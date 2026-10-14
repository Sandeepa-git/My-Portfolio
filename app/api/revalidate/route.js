import { revalidatePath } from 'next/cache';
import { supabase } from '@/lib/supabase';

// Must match the admin email in supabase/schema.sql
const ADMIN_EMAIL = 'agsvwimalasiri@gmail.com';

// Called by /admin after saving or deleting a post so the blog updates immediately.
export async function POST(request) {
  const token = request.headers.get('authorization')?.replace(/^Bearer\s+/i, '');
  if (!supabase || !token) return Response.json({ ok: false }, { status: 401 });

  const { data, error } = await supabase.auth.getUser(token);
  if (error || data.user?.email !== ADMIN_EMAIL) return Response.json({ ok: false }, { status: 401 });

  // Blog list, every post, pagination, RSS and share images
  revalidatePath('/blog', 'layout');
  revalidatePath('/sitemap.xml');
  return Response.json({ ok: true });
}
