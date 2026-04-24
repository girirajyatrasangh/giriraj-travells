'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTAStrip from '@/components/home/CTAStrip'
import { blogPosts, BlogPost } from '@/lib/blog-data'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

type Category = 'All' | 'Local' | 'Gujarat' | 'National'

const categories: Category[] = ['All', 'Local', 'Gujarat', 'National']

export default function BlogPage() {
  const [active, setActive] = useState<Category>('All')

  const filtered: BlogPost[] =
    active === 'All' ? blogPosts : blogPosts.filter((p) => p.category === active)

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-14 bg-[#080603] border-b border-[rgba(201,168,76,0.15)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-3 font-body">Travel Insights</p>
            <h1 className="text-[#F5F0E8] font-serif text-4xl sm:text-5xl font-bold mb-4 text-balance">
              Our Travel Journal
            </h1>
            <div className="gold-divider w-24 mx-auto mt-4 mb-6" />
            <p className="text-[#9C9080] max-w-xl mx-auto text-sm leading-relaxed font-body">
              Road trip guides, destination features, and travel tips from 51 years of experience on Gujarat&apos;s roads.
            </p>
          </div>
        </section>

        {/* Filter + Grid */}
        <section className="py-16 bg-[#0A0805]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category filter */}
            <div className="flex flex-wrap gap-3 mb-10 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-body transition-all duration-300 ${
                    active === cat
                      ? 'bg-[#C9A84C] text-[#0A0805] font-semibold'
                      : 'border border-[rgba(201,168,76,0.3)] text-[#9C9080] hover:border-[#C9A84C]/60 hover:text-[#C9A84C]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Blog grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post) => (
                <article
                  key={post.id}
                  className="glass-card rounded-2xl overflow-hidden hover:border-[#C9A84C]/60 transition-all duration-300 group hover:-translate-y-1 flex flex-col"
                >
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-[#C9A84C]/10 text-[#C9A84C] text-xs px-3 py-1 rounded-full font-body">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-[#9C9080] text-xs font-body">
                        <Clock size={11} />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-[#F5F0E8] font-serif text-lg font-semibold mb-3 leading-snug group-hover:text-[#C9A84C] transition-colors flex-1 text-balance">
                      {post.title}
                    </h2>
                    <p className="text-[#9C9080] text-sm leading-relaxed mb-5 font-body">{post.excerpt}</p>

                    <div className="gold-divider mb-4" />

                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-[#9C9080] text-xs font-body">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-[#C9A84C] text-xs flex items-center gap-1 hover:gap-2 transition-all font-semibold"
                      >
                        Read Article <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-16 text-[#9C9080] font-body">
                No articles in this category yet.
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
