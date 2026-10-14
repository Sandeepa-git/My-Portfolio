-- Read counts for blog posts, with live updates.
-- Run once in Supabase: Dashboard → SQL Editor → New query → paste → Run.

alter table public.posts add column if not exists views bigint not null default 0;

-- Visitors can't update posts directly, so counting goes through this function.
create or replace function public.increment_post_view(post_slug text)
returns bigint
language sql
security definer
set search_path = public
as $$
  update public.posts
  set views = views + 1
  where slug = post_slug and published = true
  returning views;
$$;

grant execute on function public.increment_post_view(text) to anon, authenticated;

-- Stream row changes to the browser (Supabase Realtime)
do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'posts'
  ) then
    alter publication supabase_realtime add table public.posts;
  end if;
end $$;
