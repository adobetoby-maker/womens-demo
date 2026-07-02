// FILE 16: app/blog/[slug]/page.tsx — Individual blog post for Dr. Amara N. Osei OB/GYN

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Clock, CalendarDays, ChevronLeft, Phone } from 'lucide-react'
import { blogPosts } from '@/lib/blogPosts'

interface Params {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return { title: 'Article Not Found' }
  }

  return {
    title: `${post.title} | Osei Women's Health`,
    description: post.metaDescription,
    alternates: {
      canonical: `https://oseiomenshealth.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.date,
      authors: ['Dr. Amara N. Osei, MD, FACOG'],
      images: [{ url: 'https://oseiomenshealth.com/og-image.jpg' }], // [DEMO] replace with real image
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription,
    },
  }
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  // Article JSON-LD with physician as author
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'Dr. Amara N. Osei',
      honorificSuffix: 'MD, FACOG',
      url: 'https://oseiomenshealth.com/about',
      worksFor: {
        '@type': 'MedicalOrganization',
        name: "Osei Women's Health",
        url: 'https://oseiomenshealth.com',
      },
    },
    publisher: {
      '@type': 'MedicalOrganization',
      name: "Osei Women's Health",
      url: 'https://oseiomenshealth.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://oseiomenshealth.com/blog/${post.slug}`,
    },
  }

  // BreadcrumbList JSON-LD
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://oseiomenshealth.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://oseiomenshealth.com/blog' },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://oseiomenshealth.com/blog/${post.slug}`,
      },
    ],
  }

  // Find adjacent posts for navigation
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug)
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ─── ARTICLE HEADER ───────────────────────────────────────── */}
      <section
        className="py-14 sm:py-16"
        style={{ background: 'linear-gradient(135deg, #581c87 0%, #9333ea 100%)' }}
        aria-label="Article header"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/60 flex-wrap">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-150">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/40">/</li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors duration-150">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/40">/</li>
              <li
                aria-current="page"
                className="text-white font-medium truncate max-w-[180px] sm:max-w-xs"
              >
                {post.title}
              </li>
            </ol>
          </nav>

          {/* Category badge */}
          <span
            className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold text-purple-900"
            style={{ backgroundColor: '#f3e8ff' }}
          >
            {post.category}
          </span>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4 max-w-3xl">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-purple-200">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="w-4 h-4" aria-hidden="true" />
              <time dateTime={post.date}>
                {new Date(post.date + 'T00:00:00').toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" aria-hidden="true" />
              {post.readingTime}
            </span>
          </div>
        </div>
      </section>

      {/* ─── ARTICLE BODY ─────────────────────────────────────────── */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Author byline */}
          <div className="flex items-center gap-4 pb-6 mb-6 border-b border-purple-100">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
              style={{ backgroundColor: '#581c87' }}
              aria-hidden="true"
            >
              AO
            </div>
            <div>
              <p className="font-semibold text-gray-900">Dr. Amara N. Osei, MD, FACOG</p>
              <p className="text-sm text-gray-500">
                Board-Certified OB/GYN &bull; Osei Women&apos;s Health &bull; Nampa, Idaho
              </p>
            </div>
          </div>

          {/* Lead paragraph highlight */}
          <p
            className="text-lg text-gray-600 italic mb-8 leading-relaxed border-l-4 pl-5 py-1"
            style={{ borderLeftColor: '#9333ea' }}
          >
            {post.metaDescription}
          </p>

          {/* Article content rendered as prose */}
          <div
            className="prose prose-gray max-w-none text-gray-700 leading-relaxed
              prose-headings:font-bold prose-headings:text-purple-900
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:mb-5 prose-p:leading-relaxed
              prose-li:mb-2 prose-li:leading-relaxed
              prose-ul:my-4 prose-ul:pl-6
              prose-ol:my-4 prose-ol:pl-6
              prose-strong:text-gray-900
              prose-a:text-purple-700 prose-a:underline hover:prose-a:text-purple-900"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* ─── ABOUT THE AUTHOR BOX ─────────────────────────── */}
          <aside
            className="mt-14 rounded-2xl p-6 sm:p-8 border border-purple-100 flex flex-col sm:flex-row gap-5"
            style={{ backgroundColor: '#faf5ff' }}
            aria-label="About the author"
          >
            <div
              className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl"
              style={{ backgroundColor: '#581c87' }}
              aria-hidden="true"
            >
              AO
            </div>
            <div>
              <h2 className="text-lg font-bold mb-1" style={{ color: '#581c87' }}>
                About Dr. Amara N. Osei
              </h2>
              <p className="text-sm font-medium text-purple-700 mb-3">
                MD, FACOG &mdash; Board-Certified OB/GYN
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Dr. Osei is a board-certified OB/GYN at Osei Women&apos;s Health in Nampa, Idaho
                with 17 years of experience in prenatal care, labor and delivery, minimally invasive
                gynecologic surgery, PCOS, endometriosis management, and menopause care. She
                graduated from Yale School of Medicine and completed her residency at Barnes-Jewish
                Hospital, Washington University in St. Louis.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-1 text-sm font-semibold hover:underline"
                style={{ color: '#9333ea' }}
              >
                Full Bio
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </aside>

          {/* ─── CONSULTATION CTA ─────────────────────────────── */}
          <div
            className="mt-10 rounded-2xl p-8 text-white"
            style={{ background: 'linear-gradient(135deg, #581c87 0%, #9333ea 100%)' }}
            aria-label="Book a consultation"
          >
            <h2 className="text-xl font-bold mb-2">
              Questions? Schedule a Consultation
            </h2>
            <p className="text-purple-200 text-sm mb-5">
              Dr. Osei and her team at Osei Women&apos;s Health are ready to answer your questions
              and provide personalized care in Nampa, Idaho.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/appointments"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-bold text-purple-900 hover:opacity-90 transition-opacity cursor-pointer"
                style={{ backgroundColor: '#f3e8ff' }}
              >
                Book an Appointment
              </Link>
              <a
                href="tel:2085550351"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white border-2 border-white/40 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                (208) 555-0351
              </a>
            </div>
          </div>

          {/* ─── POST NAVIGATION ──────────────────────────────── */}
          <nav
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-between"
            aria-label="Post navigation"
          >
            {prevPost ? (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="flex items-center gap-2 text-sm font-semibold hover:underline"
                style={{ color: '#9333ea' }}
              >
                <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                {prevPost.title}
              </Link>
            ) : (
              <div />
            )}
            <Link
              href="/blog"
              className="text-sm font-semibold hover:underline"
              style={{ color: '#581c87' }}
            >
              All Articles
            </Link>
            {nextPost ? (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="flex items-center gap-2 text-sm font-semibold hover:underline text-right"
                style={{ color: '#9333ea' }}
              >
                {nextPost.title}
                <span aria-hidden="true">→</span>
              </Link>
            ) : (
              <div />
            )}
          </nav>
        </div>
      </article>
    </div>
  )
}
