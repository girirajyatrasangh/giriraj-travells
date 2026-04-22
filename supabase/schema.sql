-- ═══════════════════════════════════════════════════════════════════════════
--  GIRIRAJ YATRA SANGH — SUPABASE DATABASE SCHEMA
--  Project: ardlabgyyqntbphcyyvb
--
--  HOW TO RUN:
--    Supabase Dashboard → SQL Editor → New Query → paste & run
--
--  Run once on a fresh project. Re-running is safe (uses IF NOT EXISTS).
-- ═══════════════════════════════════════════════════════════════════════════


-- ── TABLE: bookings ──────────────────────────────────────────────────────────
-- Stores every booking form submission from the website.
-- Primary business record — mirrors the WhatsApp message sent to the owner.
-- Fields map directly to BookingForm.tsx FormData interface.

CREATE TABLE IF NOT EXISTS public.bookings (

  -- Primary key
  id            uuid          DEFAULT gen_random_uuid()  PRIMARY KEY,

  -- Customer details (from BookingForm)
  name          text          NOT NULL,
  phone         text          NOT NULL,                  -- 10-digit Indian mobile

  -- Trip details (from BookingForm)
  origin        text          NOT NULL,                  -- pickup city
  destination   text          NOT NULL,                  -- drop city
  travel_date   text          NOT NULL,                  -- ISO string e.g. "2025-05-15"
  passengers    text          NOT NULL,                  -- "4", "7-10", "18-27", "28-50"
  vehicle_type  text          NOT NULL,                  -- matches VEHICLE_TYPES in BookingForm.tsx
  notes         text,                                    -- optional special requests

  -- Workflow status (for future admin dashboard)
  -- Allowed values: 'new' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled'
  status        text          NOT NULL  DEFAULT 'new',

  -- Timestamps
  submitted_at  timestamptz   NOT NULL  DEFAULT now(),   -- when form was submitted
  updated_at    timestamptz   NOT NULL  DEFAULT now()    -- last status change

);

-- ── Auto-update updated_at on every row change ────────────────────────────────
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS bookings_updated_at ON public.bookings;
CREATE TRIGGER bookings_updated_at
  BEFORE UPDATE ON public.bookings
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();


-- ── INDEXES ───────────────────────────────────────────────────────────────────
-- Speed up the most common admin queries

CREATE INDEX IF NOT EXISTS bookings_phone_idx       ON public.bookings (phone);
CREATE INDEX IF NOT EXISTS bookings_status_idx      ON public.bookings (status);
CREATE INDEX IF NOT EXISTS bookings_submitted_idx   ON public.bookings (submitted_at DESC);
CREATE INDEX IF NOT EXISTS bookings_travel_date_idx ON public.bookings (travel_date);


-- ── ROW LEVEL SECURITY (RLS) ──────────────────────────────────────────────────
-- The API route uses the service role key which bypasses RLS entirely.
-- These policies protect direct database access via the anon key.

ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Anyone (anon) can INSERT a new booking (website form submission)
DROP POLICY IF EXISTS "anon_can_insert_bookings" ON public.bookings;
CREATE POLICY "anon_can_insert_bookings"
  ON public.bookings
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users (admin) can read all bookings
DROP POLICY IF EXISTS "admin_can_select_bookings" ON public.bookings;
CREATE POLICY "admin_can_select_bookings"
  ON public.bookings
  FOR SELECT
  TO authenticated
  USING (true);

-- Only authenticated users (admin) can update booking status
DROP POLICY IF EXISTS "admin_can_update_bookings" ON public.bookings;
CREATE POLICY "admin_can_update_bookings"
  ON public.bookings
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);


-- ── VERIFY SETUP ──────────────────────────────────────────────────────────────
-- Run this separately after the above to confirm everything is correct:

-- 1. Check columns
-- SELECT column_name, data_type, column_default, is_nullable
-- FROM information_schema.columns
-- WHERE table_name = 'bookings'
-- ORDER BY ordinal_position;

-- 2. Check RLS policies
-- SELECT policyname, cmd, roles FROM pg_policies WHERE tablename = 'bookings';

-- 3. Test insert (optional)
-- INSERT INTO public.bookings (name, phone, origin, destination, travel_date, passengers, vehicle_type)
-- VALUES ('Test User', '9033999877', 'Jamnagar', 'Dwarka', '2025-06-01', '4', 'Toyota Innova Crysta');
-- SELECT * FROM public.bookings ORDER BY submitted_at DESC LIMIT 1;
-- DELETE FROM public.bookings WHERE name = 'Test User'; -- cleanup
