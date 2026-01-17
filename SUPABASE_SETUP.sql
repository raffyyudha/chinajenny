
-- 1. Create a table to store successful payments
create table public.payments (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  email text not null,
  amount numeric not null,
  currency text not null,
  stripe_payment_id text not null,
  status text not null default 'succeeded',
  constraint payments_pkey primary key (id),
  constraint payments_stripe_payment_id_key unique (stripe_payment_id)
);

-- 2. Enable Row Level Security (RLS)
alter table public.payments enable row level security;

-- 3. Create a Policy: Allow anyone to READ (SELECT) if they know the email (for verification)
--    OR strictly, we only want the backend to Write, and Frontend to Read specific records.
--    For simple public verification:
create policy "Allow public read access" on public.payments for select using (true);

-- 4. Create a Policy: Only service_role (backend) can INSERT/UPDATE
--    This ensures users can't fake a payment by inserting data from the browser console.
create policy "Allow service_role insert only" on public.payments for insert to service_role with check (true);
