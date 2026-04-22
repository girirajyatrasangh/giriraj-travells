import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import { blogPosts } from '@/lib/blog-data'

export default function BlogPreview() {
  const preview = blogPosts.slice(0, 3)

  return (
    <section className="py-20 bg-[#0A0805]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-3 font-body">Travel Insights</p>
          <h2 className="text-[#F5F0E8] font-serif text-3xl sm:text-4xl font-bold text-balance">
            From Our Travel Journal
          </h2>
          <div className="gold-divider w-24 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {preview.map((post) => (
            <article
              key={post.id}
              className="glass-card rounded-2xl overflow-hidden hover:border-[#C9A84C]/60 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="p-6">
                <span className="inline-block bg-[#C9A84C]/10 text-[#C9A84C] text-xs px-3 py-1 rounded-full mb-4 font-body">
                  {post.category}
                </span>
                <h3 className="text-[#F5F0E8] font-serif text-lg font-semibold mb-3 leading-snug group-hover:text-[#C9A84C] transition-colors text-balance">
                  {post.title}
                </h3>
                <p className="text-[#9C9080] text-sm leading-relaxed mb-4 font-body">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-[#9C9080] text-xs font-body">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-[#C9A84C] text-xs flex items-center gap-1 hover:gap-2 transition-all font-semibold"
                  >
                    Read <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 border border-[#C9A84C] text-[#C9A84C] px-8 py-3 rounded-md hover:bg-[#C9A84C] hover:text-[#0A0805] transition-all duration-300 text-sm font-semibold"
          >
            View All Articles <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
