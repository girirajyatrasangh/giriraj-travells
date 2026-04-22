import { createClient } from '@supabase/supabase-js'

// ─────────────────────────────────────────────────────────────────────────────
//  Supabase Client Configuration
//  Credentials are loaded from .env.local (gitignored, never committed)
// ─────────────────────────────────────────────────────────────────────────────

const supabaseUrl  = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

/**
 * Public Supabase client — safe for client-side use.
 * Uses the anon key which respects Row Level Security (RLS) policies.
 */
export const supabase = createClient(supabaseUrl, supabaseAnon)

/**
 * Admin Supabase client — SERVER-SIDE API ROUTES ONLY.
 * Uses the service role key which bypasses Row Level Security.
 * ⚠️  Never import this in client components or pages.
 */
export const supabaseAdmin = createClient(
  supabaseUrl,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
)
