import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTAStrip from '@/components/home/CTAStrip'
import { blogPosts } from '@/lib/blog-data'
import { Calendar, Clock, ArrowLeft, ArrowRight, Tag } from 'lucide-react'

// ── Static generation: pre-build all 6 article pages ─────────────────────────
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

// ── Per-page SEO metadata ─────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: `${post.title} | Giriraj Yatra Sangh`,
    description: post.excerpt,
    keywords: [
      'Jamnagar',
      'Gujarat',
      'cab',
      'travel',
      'road trip',
      post.category,
    ],
    alternates: {
      canonical: `https://giriraj-travells.vercel.app/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://giriraj-travells.vercel.app/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: ['Giriraj Yatra Sangh'],
      locale: 'en_IN',
    },
  }
}

// ── Page component ────────────────────────────────────────────────────────────
export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  // Return 404 if slug doesn't match any post
  if (!post) notFound()

  // Prev / Next navigation
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug)
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  return (
    <>
      <Navbar />
      <main>
        {/* ── Article hero ─────────────────────────────────────────────── */}
        <section className="pt-28 pb-14 bg-[#080603] border-b border-[rgba(201,168,76,0.15)]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#9C9080] hover:text-[#C9A84C] text-sm mb-8 transition-colors font-body"
            >
              <ArrowLeft size={14} /> Back to Travel Journal
            </Link>

            {/* Category + read time */}
            <div className="flex items-center gap-3 mb-5">
              <span className="bg-[#C9A84C]/10 text-[#C9A84C] text-xs px-3 py-1 rounded-full font-body flex items-center gap-1.5">
                <Tag size={10} /> {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-[#9C9080] text-xs font-body">
                <Clock size={11} /> {post.readTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-[#F5F0E8] font-serif text-3xl sm:text-4xl font-bold leading-tight mb-5 text-balance">
              {post.title}
            </h1>

            <div className="gold-divider mb-5" />

            {/* Date */}
            <div className="flex items-center gap-2 text-[#9C9080] text-sm font-body">
              <Calendar size={13} />
              <span>Published {post.date}</span>
              <span className="mx-1">·</span>
              <span>Giriraj Yatra Sangh Travel Blog</span>
            </div>
          </div>
        </section>

        {/* ── Article body ─────────────────────────────────────────────── */}
        <section className="py-16 bg-[#0A0805]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb schema for specific articles */}
            {slug === 'pilgrimage-destinations-jamnagar-2025' && (
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://giriraj-travells.vercel.app' },
                      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://giriraj-travells.vercel.app/blog' },
                      { '@type': 'ListItem', position: 3, name: 'Top 7 Pilgrimage Destinations Near Jamnagar 2025', item: 'https://giriraj-travells.vercel.app/blog/pilgrimage-destinations-jamnagar-2025' },
                    ],
                  }),
                }}
              />
            )}
            {slug === 'innova-crysta-best-family-car' && (
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://giriraj-travells.vercel.app' },
                      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://giriraj-travells.vercel.app/blog' },
                      { '@type': 'ListItem', position: 3, name: 'Why Innova Crysta Is the Best Family Road-Trip Car', item: 'https://giriraj-travells.vercel.app/blog/innova-crysta-best-family-car' },
                    ],
                  }),
                }}
              />
            )}
            {slug === 'jamnagar-to-rann-of-kutch-guide' && (
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://giriraj-travells.vercel.app' },
                      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://giriraj-travells.vercel.app/blog' },
                      { '@type': 'ListItem', position: 3, name: 'Jamnagar to Rann of Kutch Road-Trip Guide', item: 'https://giriraj-travells.vercel.app/blog/jamnagar-to-rann-of-kutch-guide' },
                    ],
                  }),
                }}
              />
            )}
            
            {/* Lead excerpt */}
            <p className="text-[#F5F0E8]/80 text-lg leading-relaxed mb-8 italic font-body">
              {post.excerpt}
            </p>

            {/* Body paragraphs */}
            <div className="flex flex-col gap-6">
              {post.paragraphs.map((para, i) => (
                <p key={i} className="text-[#9C9080] text-base leading-relaxed font-body">
                  {para}
                </p>
              ))}
            </div>

            {/* Gold divider */}
            <div className="gold-divider my-12" />

            {/* Author / attribution */}
            <div className="glass-card rounded-xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40 flex items-center justify-center shrink-0">
                <span className="text-[#C9A84C] font-serif font-bold text-sm">GY</span>
              </div>
              <div>
                <p className="text-[#F5F0E8] text-sm font-semibold font-body">Giriraj Yatra Sangh</p>
                <p className="text-[#9C9080] text-xs font-body mt-0.5">
                  Est. 1974 · Jamnagar, Gujarat · 51 years of trusted travel
                </p>
              </div>
            </div>

            {/* ── Prev / Next navigation ─────────────────────────────── */}
            {(prevPost || nextPost) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
                {prevPost ? (
                  <Link
                    href={`/blog/${prevPost.slug}`}
                    className="glass-card rounded-xl p-5 hover:border-[#C9A84C]/50 transition-all duration-300 group"
                  >
                    <p className="text-[#9C9080] text-xs font-body mb-2 flex items-center gap-1">
                      <ArrowLeft size={11} /> Previous Article
                    </p>
                    <p className="text-[#F5F0E8] text-sm font-semibold font-serif leading-snug group-hover:text-[#C9A84C] transition-colors">
                      {prevPost.title}
                    </p>
                  </Link>
                ) : <div />}

                {nextPost && (
                  <Link
                    href={`/blog/${nextPost.slug}`}
                    className="glass-card rounded-xl p-5 hover:border-[#C9A84C]/50 transition-all duration-300 group text-right"
                  >
                    <p className="text-[#9C9080] text-xs font-body mb-2 flex items-center gap-1 justify-end">
                      Next Article <ArrowRight size={11} />
                    </p>
                    <p className="text-[#F5F0E8] text-sm font-semibold font-serif leading-snug group-hover:text-[#C9A84C] transition-colors">
                      {nextPost.title}
                    </p>
                  </Link>
                )}
              </div>
            )}
          </div>
        </section>

        <CTAStrip />
      </main>
      <Footer />
    </>
  )
}
