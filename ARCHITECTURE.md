# Giriraj Travells — Architecture Overview

## Project Structure

This is a **Next.js 16** TypeScript application deployed to **Vercel**, with a Supabase PostgreSQL backend for booking persistence.

### Directory Layout

```
app/                          # Next.js App Router
├── api/booking/route.ts       # POST /api/booking — persists bookings to Supabase
├── blog/                       # Blog listing + dynamic slug pages
├── contact/                    # Contact page
├── fleet/                      # Vehicle fleet showcase
├── layout.tsx                  # Root layout (Navbar, Footer, LenisProvider)
├── page.tsx                    # Homepage (Hero, Services, Fleet, Testimonials, Blog preview)
└── robots.ts                   # SEO — crawl permissions

components/                    # React components (custom, no UI library dependency)
├── BookingForm.tsx            # Booking form submission handler
├── Footer.tsx                 # Footer with business info & links
├── Navbar.tsx                 # Navigation bar
├── VehicleCard.tsx            # Fleet vehicle display card
├── LenisProvider.tsx          # Smooth scroll wrapper (Lenis)
├── SectionRibbon.tsx          # CTA / divider component
└── home/                      # Homepage sections
    ├── BlogPreview.tsx
    ├── CTAStrip.tsx
    ├── FleetPreview.tsx
    ├── HeroSection.tsx
    ├── ServicesSection.tsx
    └── TestimonialsSection.tsx

lib/                           # Utilities & data layer
├── supabase.ts                # Supabase client (public anon + admin)
├── blog-data.ts               # Hardcoded blog posts
├── fleet-data.ts              # Vehicle fleet data
├── constants.ts               # Business phone, email, etc.
└── utils.ts                   # Helper functions (cn, etc.)

public/
├── images/                    # Static images & vehicle photos
├── sitemap.xml                # XML sitemap for SEO
└── site.webmanifest          # PWA manifest

supabase/
└── schema.sql                 # Database schema (bookings table definition)
```

---

## Component Strategy

### Approach: Minimal, Custom Components (No shadcn/ui)

- **Why**: A travel booking site needs only ~5 core interactions (forms, modals, toasts)
- **Implementation**: Custom Tailwind CSS components, avoiding dependency bloat
- **UI Framework**: Tailwind CSS 4 (PostCSS with @supports) — no Radix UI primitives in use
- **Benefits**:
  - Faster builds (fewer dependencies)
  - Smaller bundle size
  - Full design control
  - No lock-in to shadcn/ui or v0 templates

### Component Inventory

| Component | Type | Purpose |
|-----------|------|---------|
| `BookingForm` | Custom | Collects name, phone, origin, destination, date, passengers, vehicle type |
| `Navbar` | Custom | Fixed header with links to Fleet, Blog, Contact, Booking |
| `Footer` | Custom | Business info, phone, email, links |
| `VehicleCard` | Custom | Displays vehicle image, capacity, features |
| `HeroSection` | Custom | Large banner with CTA, smooth scroll via Lenis |
| `BlogPreview` | Custom | Lists 3 most recent blog posts on homepage |
| `CTAStrip` | Custom | Call-to-action strip between sections |
| `ServicesSection` | Custom | Lists services (wedding transport, corporate tours, etc.) |
| `TestimonialsSection` | Custom | Customer testimonials (hardcoded) |
| `SectionRibbon` | Custom | Decorative divider between sections |
| `LenisProvider` | Wrapper | Enables smooth scroll library (Framer Motion alternative) |

---

## Data Layer

### Booking Persistence (Supabase)

**URL**: `POST /api/booking`

**Flow**:
1. Client submits form via `BookingForm.tsx`
2. Next.js API route `/app/api/booking/route.ts` receives POST request
3. Server-side validation (required fields check)
4. Data sanitization (trim, type-cast)
5. Insert into Supabase `bookings` table using **admin client** (service role key)
6. Return `{ success: true }` to client
7. Toast notification shown to user

**Supabase Schema** (from `supabase/schema.sql`):
```sql
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  origin TEXT NOT NULL,
  destination TEXT NOT NULL,
  travel_date DATE NOT NULL,
  passengers TEXT NOT NULL,
  vehicle_type TEXT NOT NULL,
  notes TEXT,
  status TEXT DEFAULT 'new',
  submitted_at TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW()
);
```

**Why Admin Client in API Routes?**
- Bypasses Row Level Security (RLS) policies
- Guarantees booking write succeeds (no permission errors)
- Service role key kept on server only (`.env.local` → `process.env.SUPABASE_SERVICE_ROLE_KEY`)

**Blog & Fleet Data**:
- Hardcoded in `lib/blog-data.ts` and `lib/fleet-data.ts`
- Could migrate to Supabase later (CMS tables)
- No real-time updates needed currently

---

## Deployment Pipeline

### Current: Vercel (Primary)

- **Git Trigger**: Push to `main` branch on GitHub
- **Deployment**: Automatic via Vercel integration
- **Environment**: `.env.local` (development) → Vercel Project Settings (production)
- **Edge Functions**: None (standard Node.js runtime)
- **Database**: Supabase PostgreSQL (external)

### Not Used: v0 Platform

- Previous work may have been prototyped in v0
- **Policy**: v0 is for **prototyping only**, not production
- **Reason**: Avoid platform lock-in (pricing, feature limits, shutdown risk)
- **Truth Source**: This GitHub repo (`girirajyatrasangh/giriraj-travells`) is the single source of truth

### Future Options

- **Database Replicas**: Supabase supports read replicas for scale
- **Analytics**: Vercel Analytics + custom events (optional)
- **CDN**: Vercel's built-in edge caching
- **API**: No serverless function scale needed yet (bookings ~10/day estimated)

---

## Security Model

### Environment Secrets

**`.env.local`** (development, gitignored):
```
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhb...  # Public, OK to expose
SUPABASE_SERVICE_ROLE_KEY=eyJhb...     # Private, server-side only
```

**Vercel Project Settings** (production):
- `NEXT_PUBLIC_*` variables: Public (compiled into bundle)
- Private variables: Never exposed to client

### Data Protection

1. **Booking Form**: Submitted via HTTPS (Vercel auto-enabled)
2. **Row Level Security (RLS)**: Supabase policies prevent unauthorized access
3. **No User Auth**: Bookings don't require login (WhatsApp is primary channel)
4. **Validation**: Server-side checks prevent malformed data

---

## Dependencies (Core)

### Key Libraries

| Package | Version | Purpose |
|---------|---------|---------|
| `next` | 16.2.0 | React framework + App Router |
| `react` | 19 | UI library |
| `tailwindcss` | 4.2.0 | Utility CSS (PostCSS 4 support) |
| `@supabase/supabase-js` | 2.104.0 | Booking backend |
| `framer-motion` | 12.38.0 | Animations (optional, could replace with CSS) |
| `@studio-freight/lenis` | 1.0.42 | Smooth scroll library |
| `react-hook-form` | 7.54.1 | Form state management |
| `zod` | 3.24.1 | Form validation schema |
| `sonner` | 1.7.1 | Toast notifications |
| `lucide-react` | 0.564.0 | Icon library |

### Unused (Safe to Remove)

All 25+ `@radix-ui` packages are installed but **not imported anywhere** in the codebase:
- `@radix-ui/react-accordion`
- `@radix-ui/react-alert-dialog`
- `@radix-ui/react-aspect-ratio`
- `@radix-ui/react-avatar`
- `@radix-ui/react-checkbox`
- `@radix-ui/react-collapsible`
- `@radix-ui/react-context-menu`
- `@radix-ui/react-dialog`
- `@radix-ui/react-dropdown-menu`
- `@radix-ui/react-hover-card`
- `@radix-ui/react-label`
- `@radix-ui/react-menubar`
- `@radix-ui/react-navigation-menu`
- `@radix-ui/react-popover`
- `@radix-ui/react-progress`
- `@radix-ui/react-radio-group`
- `@radix-ui/react-scroll-area`
- `@radix-ui/react-select`
- `@radix-ui/react-separator`
- `@radix-ui/react-slider`
- `@radix-ui/react-switch`
- `@radix-ui/react-tabs`
- `@radix-ui/react-toast`
- `@radix-ui/react-toggle`
- `@radix-ui/react-toggle-group`
- `@radix-ui/react-tooltip`

**Action**: Remove all unused Radix packages to reduce:
- Bundle size (~500KB overhead)
- Install time (~2 min saved)
- Security surface area (fewer dependencies to audit)

---

## Error Handling & Loading States

### Error Boundaries

**`app/error.tsx`** — Catches runtime errors in any route:
- Displays user-friendly message
- Shows call-to-action phone number
- "Try again" button resets the boundary

**`app/[slug]/error.tsx`** — Catches blog/fleet page errors (future)

### Loading States

**`app/loading.tsx`** — Skeleton while page loads:
- Shows hero section skeleton
- Prevents blank screen flash

---

## SEO & Performance

### Meta Tags

- `robots.ts` — Crawl permissions
- `sitemap.xml` — Site structure for search engines
- Dynamic OG images — Generated from blog posts (optional, future)

### Image Optimization

**`next.config.mjs`**:
- Modern formats: AVIF (smallest) → WebP → JPEG fallback
- Device-aware srcsets (640px–1920px)
- Minimum 60s cache TTL
- Lazy loading (built-in)

### Performance Budget

- Page load: < 2s (Vercel edge, Supabase connection)
- Largest Contentful Paint (LCP): < 1s
- Cumulative Layout Shift (CLS): < 0.1

---

## Development Workflow

### Setup

```bash
git clone https://github.com/girirajyatrasangh/giriraj-travells.git
cd giriraj-travells
npm install
cp .env.example .env.local  # Fill in Supabase keys
npm run dev                 # Runs on http://localhost:3000
```

### Adding a New Page

1. Create `app/[route]/page.tsx`
2. Add route to `Navbar.tsx` links
3. Create layout file if needed (`app/[route]/layout.tsx`)
4. Push to `main` → auto-deploys to Vercel

### Adding a New Blog Post

1. Update `lib/blog-data.ts` with new post metadata
2. Create slug folder: `app/blog/[slug]/page.tsx`
3. Push to `main` → goes live

### Modifying Booking Form

1. Edit `components/BookingForm.tsx`
2. Update validation schema (if adding fields)
3. Update `app/api/booking/route.ts` sanitization
4. Update Supabase `bookings` table schema if needed
5. Push to `main`

---

## Future Improvements

- [ ] CMS: Migrate blog posts & fleet vehicles to Supabase (vs. hardcoded)
- [ ] Analytics: Track booking conversions, page views
- [ ] User Auth: Optional admin dashboard for booking management
- [ ] Webhooks: Send booking confirmation SMS/email via Twilio
- [ ] Rate Limiting: Protect `/api/booking` from spam
- [ ] Testing: E2E tests for booking flow (Playwright)
- [ ] Monitoring: Sentry for error tracking in production
- [ ] Email: SendGrid/Resend for transactional emails
- [ ] Mobile App: React Native version (shared data layer)

---

## Contact & Maintenance

**Business Phone**: +91 90339 99877 (from `lib/constants.ts`)  
**Website**: girirajyatra.in  
**GitHub**: https://github.com/girirajyatrasangh/giriraj-travells  
**Vercel**: https://vercel.com (auto-deployment)  
**Supabase**: https://supabase.com (database)

---

*Last Updated: May 2026*
