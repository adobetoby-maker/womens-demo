import { siteContent } from '@/lib/content'
// FILE 8: app/page.tsx — Home page for Dr. Amara N. Osei OB/GYN

import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Baby,
  Heart,
  Stethoscope,
  Shield,
  Scissors,
  Thermometer,
  Microscope,
  Activity,
  Star,
  Phone,
  CheckCircle,
} from 'lucide-react'

export const metadata: Metadata = {
  title: siteContent.seoTitle,
  description: siteContent.seoDescription,
  keywords: siteContent.seoKeywords,
  alternates: {
    canonical: siteContent.website,
  },
  openGraph: {
    title: siteContent.seoTitle,
    description: siteContent.seoDescription,
    url: siteContent.website,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: siteContent.practiceName }],
  },
}

const services = [
  {
    name: 'Prenatal Care',
    description:
      'Comprehensive prenatal monitoring from your first positive test through every trimester, ensuring you and your baby thrive.',
    Icon: Baby,
  },
  {
    name: 'Labor & Delivery',
    description:
      'Expert obstetric support through labor and delivery at West Valley Medical Center, for both vaginal and cesarean births.',
    Icon: Heart,
  },
  {
    name: 'Gynecologic Exams',
    description:
      'Annual well-woman exams, Pap smears, pelvic exams, and STI screenings — the foundation of lifelong reproductive health.',
    Icon: Stethoscope,
  },
  {
    name: 'Family Planning',
    description:
      'Personalized contraception counseling across all FDA-approved methods, matched to your lifestyle and reproductive goals.',
    Icon: Shield,
  },
  {
    name: 'Minimally Invasive Surgery',
    description:
      'Laparoscopic procedures for endometriosis, fibroids, and ovarian cysts. Smaller incisions, faster recovery, less time away from life.',
    Icon: Scissors,
  },
  {
    name: 'Menopause Management',
    description:
      'Evidence-based hormone therapy and non-hormonal options to manage hot flashes, sleep disruption, and menopausal symptoms.',
    Icon: Thermometer,
  },
]

const testimonials = [
  {
    // [DEMO] replace with real patient testimonials
    name: 'Keisha M.',
    quote:
      "Dr. Osei delivered my daughter and I cannot imagine a more calm, reassuring presence in that delivery room. When things moved quickly she was completely composed and kept me grounded. I felt safe the entire time.",
    rating: 5,
  },
  {
    // [DEMO] replace with real patient testimonials
    name: 'Rachel T.',
    quote:
      'I had been dismissed by two other providers before I saw Dr. Osei about my PCOS. She actually listened, ordered the right tests, and within two months I had a real diagnosis and a treatment plan that worked. My cycles are regular for the first time in years.',
    rating: 5,
  },
  {
    // [DEMO] replace with real patient testimonials
    name: 'Donna P.',
    quote:
      "I was terrified about my fibroid surgery. Dr. Osei performed a laparoscopic myomectomy and I was home the same day. I avoided a hysterectomy and was back to normal within two weeks. Her skill and compassion made all the difference.",
    rating: 5,
  },
]

const insurers = [
  'Blue Cross Blue Shield',
  'Aetna',
  'Cigna',
  'United Healthcare',
  'Medicare',
  'Medicaid',
]

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[90vh] flex items-center"
        style={{ background: 'linear-gradient(135deg, #581c87 0%, #7c3aed 50%, #9333ea 100%)' }}
        aria-labelledby="hero-heading"
      >
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-3xl">
            {/* Urgency badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/30 rounded-full px-4 py-1.5 mb-6">
              <CheckCircle className="w-4 h-4 text-green-300" aria-hidden="true" />
              <span className="text-white text-sm font-medium">
                New OB Patients Welcome — Early Appointments Available
              </span>
            </div>

            {/* Practice name */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4"
            >
              Grace Women&apos;s Health
            </h1>

            <p className="text-xl sm:text-2xl text-purple-200 font-medium mb-3 italic">
              &ldquo;Compassionate Women&apos;s Care, Every Stage of Life.&rdquo;
            </p>

            <p className="text-white/80 text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
              Dr. Amara N. Osei, MD, FACOG — board-certified OB/GYN bringing 17 years of
              Yale-trained expertise to the women of Nampa and the Treasure Valley.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/appointments"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-purple-900 hover:opacity-90 transition-opacity cursor-pointer shadow-lg"
                style={{ backgroundColor: '#f3e8ff' }}
              >
                Book Appointment
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white border-2 border-white/40 hover:bg-white/10 transition-colors cursor-pointer"
              >
                Meet Dr. Osei
              </Link>
            </div>

            {/* Click-to-call */}
            <a
              href="tel:2085550351"
              className="inline-flex items-center gap-2 text-purple-200 hover:text-white transition-colors duration-150"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              <span className="text-lg font-semibold">(208) 555-0351</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── SERVICES GRID ────────────────────────────────────────── */}
      <section
        className="py-20 bg-gray-50"
        aria-labelledby="services-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              id="services-heading"
              className="text-3xl sm:text-4xl font-bold mb-3"
              style={{ color: '#581c87' }}
            >
              Our Services
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Comprehensive OB/GYN care for every stage of a woman&apos;s life — all under one roof in Nampa, ID.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ name, description, Icon }) => (
              <div
                key={name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-purple-50 hover:shadow-md hover:border-purple-200 transition-all duration-200"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: '#f3e8ff' }}
                >
                  <Icon className="w-6 h-6" style={{ color: '#581c87' }} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 mt-4 text-sm font-semibold hover:underline"
                  style={{ color: '#9333ea' }}
                >
                  Learn more
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-opacity cursor-pointer"
              style={{ backgroundColor: '#581c87' }}
            >
              View All 8 Services
            </Link>
          </div>
        </div>
      </section>

      {/* ─── ABOUT TEASER ─────────────────────────────────────────── */}
      <section
        className="py-20 bg-white"
        aria-labelledby="about-teaser-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo placeholder */}
            <div
              className="rounded-2xl overflow-hidden aspect-[4/5] bg-purple-100 flex items-center justify-center text-center p-8"
              aria-label="Physician photo placeholder"
            >
              {/* [DEMO] replace with real photo of Dr. Osei — ideally a warm, professional headshot */}
              <div>
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: '#9333ea' }}
                >
                  <span className="text-white text-2xl font-bold">AO</span>
                </div>
                <p className="text-purple-400 text-sm font-medium">Dr. Amara N. Osei, MD, FACOG</p>
              </div>
            </div>

            {/* Bio content */}
            <div>
              <span
                className="inline-block text-sm font-semibold uppercase tracking-wider mb-3"
                style={{ color: '#9333ea' }}
              >
                Meet Your Doctor
              </span>
              <h2
                id="about-teaser-heading"
                className="text-3xl sm:text-4xl font-bold mb-2"
                style={{ color: '#581c87' }}
              >
                Dr. Amara N. Osei
              </h2>
              <p className="text-gray-500 font-medium mb-4">MD, FACOG — Board-Certified OB/GYN</p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Dr. Amara N. Osei brings 17 years of dedicated experience to the women of the
                Treasure Valley. A graduate of Yale School of Medicine who completed her residency
                at Barnes-Jewish Hospital in St. Louis, she combines elite training with a deeply
                personal, patient-centered philosophy.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Whether you are expecting your first child, managing a complex gynecologic condition,
                or navigating menopause, Dr. Osei meets you with the same careful attention —
                listening first, treating with precision, and partnering with you at every step.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  'Yale School of Medicine',
                  'Barnes-Jewish Hospital Residency',
                  '17 Years Experience',
                  'FACOG Certified',
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium"
                    style={{ backgroundColor: '#f3e8ff', color: '#581c87' }}
                  >
                    <CheckCircle className="w-3 h-3" aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-opacity cursor-pointer"
                style={{ backgroundColor: '#581c87' }}
              >
                Full Bio & Credentials
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────────── */}
      <section
        className="py-20"
        style={{ backgroundColor: '#faf5ff' }}
        aria-labelledby="testimonials-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              id="testimonials-heading"
              className="text-3xl sm:text-4xl font-bold mb-3"
              style={{ color: '#581c87' }}
            >
              What Our Patients Say
            </h2>
            {/* [DEMO] replace with real review source and link */}
            <p className="text-gray-500">Real stories from real patients.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, quote, rating }) => (
              <div
                key={name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-purple-100"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4" aria-label={`${rating} out of 5 stars`}>
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                {/* [DEMO] replace with real patient quote */}
                <blockquote className="text-gray-700 text-sm leading-relaxed mb-4">
                  &ldquo;{quote}&rdquo;
                </blockquote>
                {/* [DEMO] replace with real patient name */}
                <p className="font-semibold text-sm" style={{ color: '#581c87' }}>
                  — {name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INSURANCE ROW ────────────────────────────────────────── */}
      <section className="py-14 bg-white border-y border-gray-100" aria-labelledby="insurance-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="insurance-heading"
            className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400 mb-6"
          >
            We Accept
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {insurers.map((insurer) => (
              <span
                key={insurer}
                className="px-4 py-2 rounded-full text-sm font-medium border border-purple-200 text-purple-800 bg-purple-50"
              >
                {insurer}
              </span>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">
            {/* [DEMO] verify insurance list with billing department before launch */}
            Call to verify your specific plan. Additional plans may be accepted.
          </p>
        </div>
      </section>

      {/* ─── BOTTOM CTA ───────────────────────────────────────────── */}
      <section
        className="py-20"
        style={{ background: 'linear-gradient(135deg, #581c87 0%, #9333ea 100%)' }}
        aria-labelledby="bottom-cta-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="bottom-cta-heading"
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Ready to feel better?
          </h2>
          <p className="text-purple-200 mb-8 max-w-xl mx-auto text-lg">
            New OB patients welcome. Early appointments available. Same-day visits often available for urgent concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointments"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-purple-900 hover:opacity-90 transition-opacity cursor-pointer shadow-lg"
              style={{ backgroundColor: '#f3e8ff' }}
            >
              New Patient Appointment
            </Link>
            {/* [DEMO] replace href with real patient portal URL */}
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white border-2 border-white/40 hover:bg-white/10 transition-colors cursor-pointer"
            >
              Existing Patient Portal
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
