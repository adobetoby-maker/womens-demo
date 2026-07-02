// FILE 15: app/blog/page.tsx — Blog index for Dr. Amara N. Osei OB/GYN

import type { Metadata } from 'next'
import Link from 'next/link'
import { Clock, CalendarDays, ChevronRight } from 'lucide-react'
import { blogPosts } from '@/lib/blogPosts'

export const metadata: Metadata = {
  title: "Women's Health Blog | OB/GYN Nampa ID | Osei Women's Health",
  description:
    "Expert women's health articles from Dr. Amara N. Osei, OB/GYN in Nampa, Idaho. Prenatal care, PCOS, menopause, contraception, and more — evidence-based guidance for every stage of life.",
  alternates: {
    canonical: 'https://oseiomenshealth.com/blog',
  },
  openGraph: {
    title: "Women's Health Blog | Osei Women's Health",
    description:
      "Evidence-based articles on prenatal care, PCOS, menopause, and gynecologic health from Dr. Amara N. Osei.",
    images: [{ url: 'https://oseiomenshealth.com/og-image.jpg' }], // [DEMO] replace with real image
  },
  twitter: {
    card: 'summary_large_image',
    title: "Women's Health Blog | Osei Women's Health Nampa ID",
    description: "Expert OB/GYN articles from Dr. Amara N. Osei.",
  },
}

const categoryColors: Record<string, string> = {
  "Prenatal Care": '#7c3aed',
  "Hormonal Health": '#9333ea',
  "Menopause": '#581c87',
}

function getCategoryColor(category: string): string {
  return categoryColors[category] ?? '#6b21a8'
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ─── PAGE HEADER ──────────────────────────────────────────── */}
      <section
        className="py-14 sm:py-16"
        style={{ background: 'linear-gradient(135deg, #581c87 0%, #9333ea 100%)' }}
        aria-label="Page header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-150">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/40">/</li>
              <li aria-current="page" className="text-white font-medium">Blog</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
            Women&apos;s Health Blog
          </h1>
          <p className="text-purple-200 max-w-xl">
            Evidence-based articles on prenatal care, hormonal health, menopause, and more —
            authored by Dr. Amara N. Osei, MD, FACOG.
          </p>
        </div>
      </section>

      {/* ─── POST GRID ────────────────────────────────────────────── */}
      <section className="py-16" aria-label="Blog posts">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl overflow-hidden border border-purple-100 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-200 flex flex-col"
              >
                {/* Top accent bar */}
                <div
                  className="h-1.5 w-full"
                  style={{ backgroundColor: getCategoryColor(post.category) }}
                  aria-hidden="true"
                />

                <div className="p-6 flex flex-col flex-grow">
                  {/* Category badge */}
                  <span
                    className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      backgroundColor: '#f3e8ff',
                      color: getCategoryColor(post.category),
                    }}
                  >
                    {post.category}
                  </span>

                  {/* Title */}
                  <h2 className="text-lg font-bold mb-2 leading-snug" style={{ color: '#581c87' }}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:underline transition-colors duration-150"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  {/* Meta description as excerpt */}
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                    {post.metaDescription}
                  </p>

                  {/* Meta row: date + reading time */}
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <CalendarDays className="w-3.5 h-3.5" aria-hidden="true" />
                      <time dateTime={post.date}>
                        {new Date(post.date + 'T00:00:00').toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                      {post.readingTime}
                    </span>
                  </div>

                  {/* Read More link */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold hover:underline transition-colors duration-150"
                    style={{ color: '#9333ea' }}
                    aria-label={`Read: ${post.title}`}
                  >
                    Read More
                    <ChevronRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm mb-4">
              Questions about your health? Schedule a visit with Dr. Osei.
            </p>
            <Link
              href="/appointments"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-opacity cursor-pointer"
              style={{ backgroundColor: '#581c87' }}
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
