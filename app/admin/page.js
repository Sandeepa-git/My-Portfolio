"use client";

import { useEffect, useRef, useState } from 'react';
import { supabase, IMAGE_BUCKET } from '@/lib/supabase';

const empty = {
  id: null, slug: '', title: '', description: '', body: '', tags: '',
  cover_image: '', reading_time: 5, published: true,
};

const today = () => new Date().toISOString().slice(0, 10);

const slugify = (s) => s.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const escapeAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

// All blog images must be 16:9 (e.g. 1280×720, 1600×900, 1920×1080)
const RATIO = 16 / 9;
const RATIO_TOLERANCE = 0.02;
const MIN_WIDTH = 1200;
const MAX_BYTES = 2 * 1024 * 1024;

function readSize(file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new window.Image();
    img.onload = () => { resolve({ w: img.naturalWidth, h: img.naturalHeight }); URL.revokeObjectURL(url); };
    img.onerror = () => { reject(new Error('Could not read this image file.')); URL.revokeObjectURL(url); };
    img.src = url;
  });
}

async function checkImage(file) {
  if (!file.type.startsWith('image/')) throw new Error('Please choose an image file.');
  if (file.size > MAX_BYTES) throw new Error(`Image is ${(file.size / 1048576).toFixed(1)} MB. Keep it under 2 MB (compress it at squoosh.app).`);
  const { w, h } = await readSize(file);
  if (Math.abs(w / h - RATIO) / RATIO > RATIO_TOLERANCE) {
    throw new Error(`Image is ${w}×${h}. Images must be 16:9, e.g. 1600×900 or 1920×1080. Crop it and try again.`);
  }
  if (w < MIN_WIDTH) throw new Error(`Image is only ${w}px wide. Use at least ${MIN_WIDTH}px (e.g. 1600×900).`);
}

// Tell the server to rebuild the blog pages right away
async function refreshBlog() {
  const { data } = await supabase.auth.getSession();
  const token = data.session?.access_token;
  if (!token) return;
  await fetch('/api/revalidate', { method: 'POST', headers: { Authorization: `Bearer ${token}` } }).catch(() => {});
}

async function uploadImage(file) {
  await checkImage(file);
  const ext = file.name.split('.').pop().toLowerCase();
  const path = `${new Date().getFullYear()}/${crypto.randomUUID()}.${ext}`;
  const { error } = await supabase.storage.from(IMAGE_BUCKET).upload(path, file, { contentType: file.type });
  if (error) throw error;
  return supabase.storage.from(IMAGE_BUCKET).getPublicUrl(path).data.publicUrl;
}

function Alert({ msg, onClose }) {
  if (!msg) return null;
  return (
    <div className={`alert alert-${msg.type}`} role={msg.type === 'error' ? 'alert' : 'status'}>
      <span>{msg.text}</span>
      {onClose && msg.type !== 'info' && (
        <span className="alert-actions">
          <button type="button" className="btn btn-sm" onClick={onClose} aria-label="Dismiss">Dismiss</button>
        </span>
      )}
    </div>
  );
}

export default function AdminPage() {
  const [session, setSession] = useState(null);
  const [ready, setReady] = useState(!supabase);

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getSession().then(({ data }) => { setSession(data.session); setReady(true); });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => sub.subscription.unsubscribe();
  }, []);

  if (!ready) return null;
  return (
    <div className="page">
      <section className="section admin">
        <span className="eyebrow">Admin</span>
        <h1 className="blog-title">Blog editor</h1>
        {!supabase ? (
          <p className="alert alert-error">Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY in <code>.env.local</code>.</p>
        ) : session ? <Editor email={session.user.email} /> : <Login />}
      </section>
    </div>
  );
}

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setMsg({ type: 'info', text: 'Signing in…' });
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setMsg(error ? { type: 'error', text: error.message === 'Invalid login credentials' ? 'Wrong email or password. Please try again.' : error.message } : null);
  };

  return (
    <form onSubmit={submit} className="card admin-form admin-login">
      <label>Email<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="username" /></label>
      <label>Password<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="current-password" /></label>
      <button className="btn btn-dark" type="submit">Sign in</button>
      <Alert msg={msg} />
    </form>
  );
}

function Editor({ email }) {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState(empty);
  const [msg, setMsg] = useState(null);
  const [notice, setNotice] = useState(null);
  const [busy, setBusy] = useState(false);
  const [confirmLogout, setConfirmLogout] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const bodyRef = useRef(null);

  const load = () =>
    supabase.from('posts').select('*').order('date', { ascending: false }).then(({ data, error }) => {
      if (error) setMsg({ type: 'error', text: error.message }); else setPosts(data);
    });
  useEffect(() => { load(); }, []);

  // Live read counts and edits from Supabase Realtime
  useEffect(() => {
    const channel = supabase
      .channel('admin-posts')
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'posts' }, ({ new: row }) => {
        setPosts((list) => list.map((p) => (p.id === row.id ? { ...p, ...row } : p)));
      })
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, []);

  const totalViews = posts.reduce((sum, p) => sum + (p.views ?? 0), 0);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }));

  const edit = (p) => { setNotice(null); setForm({ ...p, tags: p.tags.join(', '), cover_image: p.cover_image || '' }); setMsg(null); window.scrollTo(0, 0); };

  const onCover = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setBusy(true); setMsg({ type: 'info', text: 'Uploading cover…' });
    try {
      const url = await uploadImage(file);
      setForm((f) => ({ ...f, cover_image: url }));
      setMsg({ type: 'success', text: 'Cover image uploaded.' });
    } catch (err) { setMsg({ type: 'error', text: err.message }); }
    setBusy(false); e.target.value = '';
  };

  // Uploads an image and inserts an <img> tag at the cursor in the body
  const onInlineImage = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const alt = window.prompt('Describe the image (alt text, good for SEO):', '') ?? '';
    setBusy(true); setMsg({ type: 'info', text: 'Uploading image…' });
    try {
      const url = await uploadImage(file);
      const tag = `\n<figure><img src="${url}" alt="${escapeAttr(alt)}" loading="lazy" />${alt ? `<figcaption>${escapeAttr(alt)}</figcaption>` : ''}</figure>\n`;
      const el = bodyRef.current;
      const pos = el?.selectionStart ?? form.body.length;
      setForm((f) => ({ ...f, body: f.body.slice(0, pos) + tag + f.body.slice(pos) }));
      setMsg({ type: 'success', text: 'Image inserted into the body.' });
    } catch (err) { setMsg({ type: 'error', text: err.message }); }
    setBusy(false); e.target.value = '';
  };

  const save = async (e) => {
    e.preventDefault();
    setBusy(true); setMsg({ type: 'info', text: 'Saving…' });
    // Publish date is set automatically the first time a post goes live
    const prev = posts.find((p) => p.id === form.id);
    const date = form.published && !prev?.published ? today() : (prev?.date ?? today());
    const row = {
      slug: form.slug || slugify(form.title),
      title: form.title,
      description: form.description,
      body: form.body,
      tags: form.tags.split(',').map((t) => t.trim()).filter(Boolean),
      cover_image: form.cover_image || null,
      reading_time: Number(form.reading_time) || 5,
      published: form.published,
      date,
      updated_at: new Date().toISOString(),
    };
    const { data, error } = form.id
      ? await supabase.from('posts').update(row).eq('id', form.id).select().single()
      : await supabase.from('posts').insert(row).select().single();
    setBusy(false);
    if (error) {
      setMsg({ type: 'error', text: error.code === '23505' ? 'A post with this slug already exists. Change the slug and try again.' : error.message });
      return;
    }
    await refreshBlog();
    // Clear the form for the next post and show a success banner
    setForm(empty);
    setMsg(null);
    setNotice({
      published: data.published,
      title: data.title,
      slug: data.slug,
      updated: Boolean(form.id),
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    load();
  };

  const remove = async (p) => {
    setConfirmDelete(null);
    const { error } = await supabase.from('posts').delete().eq('id', p.id);
    if (error) { setMsg({ type: 'error', text: error.message }); return; }
    if (form.id === p.id) setForm(empty);
    await refreshBlog();
    setMsg({ type: 'success', text: `"${p.title}" deleted.` });
    load();
  };

  return (
    <>
      {confirmLogout && (
        <div className="modal-backdrop" onClick={() => setConfirmLogout(false)}>
          <div
            className="card modal"
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="logout-title"
            aria-describedby="logout-desc"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.key === 'Escape' && setConfirmLogout(false)}
          >
            <h2 id="logout-title">Log out?</h2>
            <p id="logout-desc">Are you sure you want to log out? You&apos;ll need your email and password to sign in again.</p>
            <div className="modal-actions">
              <button className="btn btn-sm" autoFocus onClick={() => setConfirmLogout(false)}>Cancel</button>
              <button className="btn btn-sm btn-danger" onClick={() => supabase.auth.signOut()}>Yes, log out</button>
            </div>
          </div>
        </div>
      )}

      {confirmDelete && (
        <div className="modal-backdrop" onClick={() => setConfirmDelete(null)}>
          <div
            className="card modal"
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="delete-title"
            aria-describedby="delete-desc"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.key === 'Escape' && setConfirmDelete(null)}
          >
            <h2 id="delete-title">Delete post?</h2>
            <p id="delete-desc">
              Are you sure you want to delete &ldquo;{confirmDelete.title}&rdquo;? It will be removed from your blog permanently. This cannot be undone.
            </p>
            <div className="modal-actions">
              <button className="btn btn-sm" autoFocus onClick={() => setConfirmDelete(null)}>Cancel</button>
              <button className="btn btn-sm btn-danger" onClick={() => remove(confirmDelete)}>Yes, delete</button>
            </div>
          </div>
        </div>
      )}

      <div className="admin-bar">
        <span className="post-meta">Signed in as {email}</span>
        <button className="btn btn-sm" onClick={() => setForm(empty)}>New post</button>
        <button className="btn btn-sm" onClick={() => setConfirmLogout(true)}>Log out</button>
      </div>

      {notice && (
        <div className={`alert ${notice.published ? 'alert-success' : 'alert-info'}`} role="status">
          <span>
            {notice.published ? (
              <><strong className="alert-title">{notice.updated ? 'Post updated' : 'Post published'}</strong>&ldquo;{notice.title}&rdquo; is now live on your blog.</>
            ) : (
              <><strong className="alert-title">Draft saved</strong>&ldquo;{notice.title}&rdquo; is not visible to visitors until you publish it.</>
            )}
          </span>
          <span className="alert-actions">
            {notice.published && <a className="btn btn-sm" href={`/blog/${notice.slug}`} target="_blank" rel="noopener noreferrer">View post</a>}
            <button type="button" className="btn btn-sm" onClick={() => setNotice(null)} aria-label="Dismiss">Dismiss</button>
          </span>
        </div>
      )}

      <form onSubmit={save} className="card admin-form" onChange={() => notice && setNotice(null)}>
        <label>Title<input value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value, slug: f.id ? f.slug : slugify(e.target.value) }))} required /></label>
        <label>Slug (URL)<input value={form.slug} onChange={set('slug')} required pattern="[a-z0-9-]+" /></label>
        <label>Description (shown in Google results)<textarea rows={2} value={form.description} onChange={set('description')} maxLength={170} /></label>
        <div className="admin-row">
          <label>Tags (comma separated)<input value={form.tags} onChange={set('tags')} /></label>
          <label>Read time (min)<input type="number" min={1} value={form.reading_time} onChange={set('reading_time')} /></label>
        </div>

        <div className="admin-guide">
          <strong>Image guidelines</strong>
          <ul>
            <li>Aspect ratio must be <strong>16:9</strong>, e.g. 1600×900 or 1920×1080. Other shapes are rejected.</li>
            <li>At least 1200px wide, under 2 MB. JPG or WebP preferred.</li>
            <li>Use your own screenshots or royalty-free images (no copyrighted pictures).</li>
            <li>Always write alt text describing the image.</li>
          </ul>
        </div>

        <div className="admin-cover">
          <span>Cover image (16:9)</span>
          {form.cover_image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={form.cover_image} alt="Cover preview" />
          )}
          <div className="admin-row">
            <label className="btn btn-sm admin-file">
              {form.cover_image ? 'Replace cover' : 'Upload cover'}
              <input type="file" accept="image/*" onChange={onCover} disabled={busy} hidden />
            </label>
            {form.cover_image && <button type="button" className="btn btn-sm" onClick={() => setForm((f) => ({ ...f, cover_image: '' }))}>Remove cover</button>}
          </div>
        </div>

        <label>
          <span className="admin-body-head">
            Body (HTML: &lt;h2&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;pre&gt;&lt;code&gt;)
            <span className="btn btn-sm admin-file">
              + Insert image (16:9)
              <input type="file" accept="image/*" onChange={onInlineImage} disabled={busy} hidden />
            </span>
          </span>
          <textarea ref={bodyRef} rows={20} value={form.body} onChange={set('body')} className="admin-body" />
        </label>

        <label className="admin-check"><input type="checkbox" checked={form.published} onChange={set('published')} /> Published</label>
        <button className="btn btn-dark" type="submit" disabled={busy}>{form.id ? 'Update post' : 'Create post'}</button>
        <Alert msg={msg} onClose={() => setMsg(null)} />
      </form>

      <h2 className="admin-list-title">All posts <span className="post-meta">· {totalViews.toLocaleString()} total reads · live</span></h2>
      <ul className="admin-list">
        {posts.map((p) => (
          <li key={p.id} className="card">
            <div>
              <strong>{p.title}</strong>
              <span className="post-meta"> · {p.published ? 'Published' : 'Draft'} · {p.date} · {(p.views ?? 0).toLocaleString()} reads</span>
            </div>
            <div className="admin-row">
              {p.published && <a className="btn btn-sm" href={`/blog/${p.slug}`} target="_blank" rel="noopener noreferrer">View</a>}
              <button className="btn btn-sm" onClick={() => edit(p)}>Edit</button>
              <button className="btn btn-sm" onClick={() => setConfirmDelete(p)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
