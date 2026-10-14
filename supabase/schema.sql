-- Run this once in Supabase: Dashboard → SQL Editor → New query → paste → Run.
-- Change the admin email below if you log in to /admin with a different address.

create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  description text not null default '',
  body text not null default '',
  tags text[] not null default '{}',
  cover_image text,
  reading_time int not null default 5,
  published boolean not null default false,
  date date not null default current_date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.posts enable row level security;

-- Anyone can read published posts
create policy "Public reads published posts" on public.posts
  for select using (published = true);

-- Only the admin can read drafts and write
create policy "Admin manages posts" on public.posts
  for all to authenticated
  using ((auth.jwt() ->> 'email') = 'agsvwimalasiri@gmail.com')
  with check ((auth.jwt() ->> 'email') = 'agsvwimalasiri@gmail.com');

-- Public image bucket for cover and in-article images
insert into storage.buckets (id, name, public)
values ('blog-images', 'blog-images', true)
on conflict (id) do nothing;

create policy "Admin uploads blog images" on storage.objects
  for insert to authenticated
  with check (bucket_id = 'blog-images' and (auth.jwt() ->> 'email') = 'agsvwimalasiri@gmail.com');

create policy "Admin deletes blog images" on storage.objects
  for delete to authenticated
  using (bucket_id = 'blog-images' and (auth.jwt() ->> 'email') = 'agsvwimalasiri@gmail.com');
