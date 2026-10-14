"use client";

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

const format = (n) => new Intl.NumberFormat('en', { notation: n >= 10000 ? 'compact' : 'standard' }).format(n);

// Counts one read per browser session and shows the live total via Supabase Realtime.
export default function ViewCounter({ slug, initial = 0, track = false }) {
  const [views, setViews] = useState(initial);

  useEffect(() => {
    if (!supabase) return;
    let cancelled = false;

    const key = `viewed:${slug}`;
    let seen = false;
    try { seen = sessionStorage.getItem(key) === '1'; } catch {}

    if (track && !seen) {
      supabase.rpc('increment_post_view', { post_slug: slug }).then(({ data, error }) => {
        if (cancelled || error || typeof data !== 'number') return;
        // Only remember the read once it has actually been counted
        try { sessionStorage.setItem(key, '1'); } catch {}
        setViews(data);
      });
    } else {
      // Cached pages may hold an old number, so fetch the current one
      supabase.from('posts').select('views').eq('slug', slug).maybeSingle().then(({ data }) => {
        if (!cancelled && typeof data?.views === 'number') setViews(data.views);
      });
    }

    const channel = supabase
      .channel(`views:${slug}`)
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'posts', filter: `slug=eq.${slug}` }, (payload) => {
        if (typeof payload.new?.views === 'number') setViews(payload.new.views);
      })
      .subscribe();

    return () => {
      cancelled = true;
      supabase.removeChannel(channel);
    };
  }, [slug, track]);

  return <span className="view-count">{format(views)} {views === 1 ? 'read' : 'reads'}</span>;
}
