import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// null until NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY are set
export const supabase = url && key ? createClient(url, key, {
  // Stay signed in across reloads and browser restarts until "Sign out" is clicked
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false },
}) : null;

export const IMAGE_BUCKET = 'blog-images';
