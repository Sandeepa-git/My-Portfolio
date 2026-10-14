import { supabase } from '@/lib/supabase';

// Fallback posts shown until Supabase is configured. `body` is trusted HTML written by the site owner.
const samplePosts = [
  {
    slug: 'add-whatsapp-order-button-nextjs',
    title: 'How to Add a WhatsApp Order Button to Your Next.js Website',
    description: 'A step-by-step guide to adding a floating WhatsApp chat and order button to a Next.js site, with a pre-filled message, so customers can order in one tap.',
    date: '2026-10-15',
    updatedAt: '2026-10-15',
    tags: ['Next.js', 'WhatsApp', 'Small Business'],
    readingTime: 6,
    coverImage: null,
    body: `
<p>For many small shops in Sri Lanka and beyond, WhatsApp is where sales actually happen. Customers don't want to fill long checkout forms; they want to send a quick message and get a reply. In this guide I'll show you exactly how I added a floating WhatsApp order button to my own Next.js sites, including this portfolio.</p>

<h2>Why a WhatsApp button works</h2>
<ul>
  <li><strong>Zero friction:</strong> one tap opens a chat on the customer's phone.</li>
  <li><strong>Pre-filled messages:</strong> you decide what the first message says, so every order arrives in the same format.</li>
  <li><strong>No backend needed:</strong> it is just a link, so it works on any static site.</li>
</ul>

<h2>Step 1: Build the WhatsApp link</h2>
<p>WhatsApp supports "click to chat" links in this format. Use your number in international format, without <code>+</code>, spaces or leading zeros:</p>
<pre><code>https://wa.me/94771234567?text=Hi%2C%20I%20want%20to%20order</code></pre>
<p>The <code>text</code> parameter must be URL-encoded. In JavaScript, <code>encodeURIComponent()</code> does this for you.</p>

<h2>Step 2: Create the button component</h2>
<p>Create <code>components/WhatsAppButton.js</code>:</p>
<pre><code>const PHONE = '94771234567';

export default function WhatsAppButton({ message = 'Hi, I would like to place an order.' }) {
  const href = \`https://wa.me/\${PHONE}?text=\${encodeURIComponent(message)}\`;
  return (
    &lt;a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Order on WhatsApp (opens in a new tab)"
    &gt;
      Order on WhatsApp
    &lt;/a&gt;
  );
}</code></pre>
<p>Note the <code>rel="noopener noreferrer"</code>: always add it to links that open a new tab, for security.</p>

<h2>Step 3: Make it float</h2>
<p>Add this CSS to your global stylesheet so the button stays in the bottom-right corner on every page:</p>
<pre><code>.wa-float {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 60;
  padding: 0.8rem 1.2rem;
  border-radius: 999px;
  background: #25d366;
  color: #fff;
  font-weight: 600;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}</code></pre>
<p>On mobile, check that it doesn't cover other fixed elements such as a bottom navigation bar. Raise <code>bottom</code> if it does.</p>

<h2>Step 4: Add it to every page</h2>
<p>In the App Router, put the component in <code>app/layout.js</code> so it appears site-wide:</p>
<pre><code>import WhatsAppButton from '@/components/WhatsAppButton';

export default function RootLayout({ children }) {
  return (
    &lt;html lang="en"&gt;
      &lt;body&gt;
        {children}
        &lt;WhatsAppButton /&gt;
      &lt;/body&gt;
    &lt;/html&gt;
  );
}</code></pre>

<h2>Step 5: Product-specific messages</h2>
<p>For online stores, pass the product name so the customer doesn't have to type it:</p>
<pre><code>&lt;WhatsAppButton message={\`Hi, I want to order: \${product.name} (Rs. \${product.price})\`} /&gt;</code></pre>
<p>When I built a gaming top-up store, this one change cut down "which package?" back-and-forth messages a lot, because every order arrived with the package name and price already filled in.</p>

<h2>Tips to get more orders</h2>
<ul>
  <li>Use the <strong>WhatsApp Business</strong> app and set up quick replies and a catalog.</li>
  <li>Show your opening hours near the button so customers know when to expect a reply.</li>
  <li>Keep the button label action-focused: "Order on WhatsApp" beats "Contact us".</li>
</ul>

<h2>Wrapping up</h2>
<p>A WhatsApp order button takes about 15 minutes to add and needs no backend, payment gateway or database. It's one of the highest-impact features you can add to a small-business website.</p>
<p>Need a store or business website with WhatsApp ordering built in? <a href="/#contact">Get in touch</a> and I'll help you set it up.</p>
`,
  },
];

const fromRow = (r) => ({
  slug: r.slug,
  title: r.title,
  description: r.description,
  date: r.date,
  tags: r.tags || [],
  readingTime: r.reading_time,
  updatedAt: r.updated_at,
  coverImage: r.cover_image,
  body: r.body,
});

// Published posts, newest first.
export async function getPosts() {
  if (!supabase) return samplePosts;
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('published', true)
    .order('date', { ascending: false });
  if (error) {
    console.error('Supabase getPosts:', error.message);
    return [];
  }
  return data.map(fromRow);
}

export async function getPost(slug) {
  if (!supabase) return samplePosts.find((p) => p.slug === slug) ?? null;
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .maybeSingle();
  if (error) console.error('Supabase getPost:', error.message);
  return data ? fromRow(data) : null;
}

export function relatedPosts(post, all, limit = 3) {
  return all
    .filter((p) => p.slug !== post.slug)
    .map((p) => ({ p, score: p.tags.filter((t) => post.tags.includes(t)).length }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ p }) => p);
}

export const POSTS_PER_PAGE = 12;

export const formatDate = (d) =>
  new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
