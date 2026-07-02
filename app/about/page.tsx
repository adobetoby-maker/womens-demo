// FILE 9: app/about/page.tsx — About page for Dr. Amara N. Osei OB/GYN

import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, GraduationCap, Award, Hospital, Phone, Users, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: "About Dr. Amara N. Osei | OB/GYN Nampa ID",
  description:
    "Meet Dr. Amara N. Osei, MD, FACOG — board-certified OB/GYN in Nampa, Idaho. Yale School of Medicine graduate with 17 years of experience in women's health.",
  alternates: {
    canonical: 'https://gracewomenshealth.com/about',
  },
  openGraph: {
    title: "About Dr. Amara N. Osei | OB/GYN Nampa ID",
    description:
      "17 years of experience. Yale-trained. Board-certified OB/GYN serving Nampa and the Treasure Valley.",
    images: [{ url: 'https://gracewomenshealth.com/og-image.jpg' }], // [DEMO] replace with real image
  },
  twitter: {
    card: 'summary_large_image',
    title: "About Dr. Amara N. Osei | Grace Women's Health",
    description: "Yale-trained, board-certified OB/GYN. 17 years of compassionate women's care.",
  },
}

// Physician JSON-LD schema
const physicianSchema = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: 'Dr. Amara N. Osei',
  honorificSuffix: 'MD, FACOG',
  // [DEMO] verify all physician details before launch
  description:
    "Board-certified OB/GYN with 17 years of experience specializing in prenatal care, labor and delivery, minimally invasive gynecologic surgery, PCOS, endometriosis, and menopause management in Nampa, Idaho.",
  medicalSpecialty: {
    '@type': 'MedicalSpecialty',
    name: 'Obstetrics',
  },
  worksFor: {
    '@type': 'MedicalOrganization',
    name: "Grace Women's Health",
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3090 N Maple Grove Rd',
      addressLocality: 'Nampa',
      addressRegion: 'ID',
      postalCode: '83687',
    },
  },
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'Yale School of Medicine',
    },
    {
      '@type': 'Hospital',
      name: 'Barnes-Jewish Hospital, Washington University in St. Louis',
    },
  ],
  memberOf: {
    '@type': 'MedicalOrganization',
    name: 'American College of Obstetricians and Gynecologists',
  },
  telephone: '(208) 555-0351',
  url: 'https://gracewomenshealth.com/about',
}

const credentials = [
  {
    icon: GraduationCap,
    label: 'Medical Degree',
    value: 'Yale School of Medicine',
  },
  {
    icon: Hospital,
    label: 'Residency',
    value: 'Barnes-Jewish Hospital, Washington University in St. Louis',
  },
  {
    icon: Award,
    label: 'Board Certification',
    value: 'American Board of Obstetrics and Gynecology (ABOG)',
  },
  {
    icon: Award,
    label: 'Fellowship',
    value: 'Fellow, American College of Obstetricians and Gynecologists (FACOG)',
  },
  {
    icon: Hospital,
    label: 'Hospital Affiliation',
    value: 'West Valley Medical Center, Caldwell, Idaho',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section
        className="py-16 sm:py-20"
        style={{ background: 'linear-gradient(135deg, #581c87 0%, #9333ea 100%)' }}
        aria-labelledby="about-hero-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-150">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/40">/</li>
              <li aria-current="page" className="text-white font-medium">About</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Photo placeholder */}
            <div
              className="rounded-2xl overflow-hidden bg-purple-800/50 border border-purple-600/30 flex items-center justify-center py-20 px-8"
              aria-label="Physician photo placeholder"
            >
              {/* [DEMO] replace with real photo of Dr. Osei */}
              <div className="text-center">
                <div
                  className="w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-4 bg-white/10"
                >
                  <span className="text-white text-3xl font-bold">AO</span>
                </div>
                <p className="text-purple-300 text-sm">[DEMO] Replace with real photo of Dr. Osei</p>
              </div>
            </div>

            {/* Intro content */}
            <div>
              <h1
                id="about-hero-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-2"
              >
                Dr. Amara N. Osei
              </h1>
              <p className="text-purple-200 font-semibold text-lg mb-4">
                MD, FACOG &mdash; Board-Certified OB/GYN
              </p>

              {/* Stats badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="bg-white/15 border border-white/20 rounded-xl px-4 py-2 text-center">
                  {/* [DEMO] verify patient count with practice */}
                  <div className="text-2xl font-bold text-white">17+</div>
                  <div className="text-xs text-purple-200">Years Experience</div>
                </div>
                <div className="bg-white/15 border border-white/20 rounded-xl px-4 py-2 text-center">
                  {/* [DEMO] replace with verified patient count */}
                  <div className="text-2xl font-bold text-white">3,000+</div>
                  <div className="text-xs text-purple-200">Babies Delivered</div>
                </div>
                <div className="bg-white/15 border border-white/20 rounded-xl px-4 py-2 text-center">
                  {/* [DEMO] replace with real review rating and source */}
                  <div className="flex items-center gap-1 text-2xl font-bold text-white">
                    4.9 <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                  </div>
                  <div className="text-xs text-purple-200">Patient Rating</div>
                </div>
              </div>

              <p className="text-purple-100 leading-relaxed text-base sm:text-lg">
                Dr. Amara N. Osei is a board-certified OB/GYN who has devoted 17 years to the care
                of women throughout their reproductive lives — from the first prenatal visit to
                managing the complex transition of menopause and every milestone in between.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BIO ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-white" aria-labelledby="bio-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="bio-heading"
            className="text-2xl sm:text-3xl font-bold mb-6"
            style={{ color: '#581c87' }}
          >
            Philosophy &amp; Approach
          </h2>
          {/* [DEMO] replace with real physician bio and philosophy */}
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              Dr. Osei believes that the foundation of exceptional medical care is the willingness to
              listen — truly listen — before reaching for a prescription pad or a surgical plan. Her
              approach begins with understanding the full context of each patient&apos;s life: her
              history, her concerns, her goals, and what matters most to her at this moment. Only
              from that place of genuine understanding does she build a treatment plan.
            </p>
            <p>
              After graduating from Yale School of Medicine and completing her residency at
              Barnes-Jewish Hospital — one of the nation&apos;s leading academic medical centers —
              Dr. Osei chose to build her career in community-based practice because she wanted to
              care for women across the full arc of their reproductive lives, not just during the
              acute episodes that land in tertiary care settings. That decision led her to Nampa,
              Idaho, where she has practiced for over a decade.
            </p>
            <p>
              Her clinical focus includes high-risk obstetrics, minimally invasive gynecologic
              surgery (laparoscopic and robotic-assisted approaches for endometriosis, fibroids, and
              ovarian cysts), comprehensive PCOS management, and evidence-based menopause care.
              She is known among her patients for taking time — unhurried, thorough appointments
              where complex questions receive direct, honest answers.
            </p>
            <p>
              {/* [DEMO] replace with verified philosophy statement from physician */}
              &ldquo;My patients trust me at some of the most significant moments of their lives.
              Delivering a baby. Breaking difficult news. Making a decision about surgery. I take that
              trust seriously, and I earn it by being present, honest, and prepared — every time.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ─── CREDENTIALS GRID ─────────────────────────────────────── */}
      <section
        className="py-16"
        style={{ backgroundColor: '#faf5ff' }}
        aria-labelledby="credentials-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="credentials-heading"
            className="text-2xl sm:text-3xl font-bold mb-8"
            style={{ color: '#581c87' }}
          >
            Education &amp; Credentials
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {credentials.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="bg-white rounded-xl p-5 border border-purple-100 flex gap-4 items-start"
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: '#f3e8ff' }}
                >
                  <Icon className="w-5 h-5" style={{ color: '#581c87' }} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                    {label}
                  </p>
                  <p className="text-gray-800 font-medium text-sm">{value}</p>
                </div>
              </div>
            ))}

            {/* Years in practice */}
            <div
              className="bg-white rounded-xl p-5 border border-purple-100 flex gap-4 items-start"
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: '#f3e8ff' }}
              >
                <Users className="w-5 h-5" style={{ color: '#581c87' }} aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                  Years in Practice
                </p>
                <p className="text-gray-800 font-medium text-sm">
                  17 years serving women in Idaho and beyond
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PATIENTS SEEN + REVIEWS BADGE ───────────────────────── */}
      <section className="py-14 bg-white" aria-label="Practice highlights">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-2xl border border-gray-100">
              {/* [DEMO] replace with verified patient count */}
              <div className="text-4xl font-extrabold mb-1" style={{ color: '#581c87' }}>
                3,000+
              </div>
              <div className="text-gray-500 text-sm">Babies Delivered</div>
            </div>
            <div className="p-6 rounded-2xl border border-gray-100">
              {/* [DEMO] replace with real verified review count and rating */}
              <div className="text-4xl font-extrabold mb-1" style={{ color: '#581c87' }}>
                4.9/5
              </div>
              <div className="text-gray-500 text-sm flex items-center justify-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                Patient Rating (DEMO)
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-gray-100">
              <div className="text-4xl font-extrabold mb-1" style={{ color: '#581c87' }}>
                17
              </div>
              <div className="text-gray-500 text-sm">Years of Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section
        className="py-16"
        style={{ background: 'linear-gradient(135deg, #581c87 0%, #9333ea 100%)' }}
        aria-labelledby="about-cta-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="about-cta-heading"
            className="text-2xl sm:text-3xl font-bold text-white mb-4"
          >
            Schedule a Visit with Dr. Osei
          </h2>
          <p className="text-purple-200 mb-8">
            New OB patients welcome. Early appointments available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointments"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-purple-900 hover:opacity-90 transition-opacity cursor-pointer shadow-lg"
              style={{ backgroundColor: '#f3e8ff' }}
            >
              Book Appointment
            </Link>
            <a
              href="tel:2085550351"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white border-2 border-white/40 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              (208) 555-0351
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
