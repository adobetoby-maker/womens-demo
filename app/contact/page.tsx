// FILE 13: app/contact/page.tsx — Contact page for Dr. Amara N. Osei OB/GYN

import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Clock, Mail } from 'lucide-react'
import { ContactFormClient } from '@/components/ContactFormClient'

export const metadata: Metadata = {
  title: "Contact Us | OB/GYN Nampa ID | Grace Women's Health",
  description:
    "Contact Grace Women's Health in Nampa, Idaho. Call (208) 555-0351, visit us at 3090 N Maple Grove Rd, or use our contact form. Mon–Fri 8 AM–5 PM, Sat 9 AM–12 PM.",
  alternates: {
    canonical: 'https://gracewomenshealth.com/contact',
  },
  openGraph: {
    title: "Contact Grace Women's Health | OB/GYN Nampa ID",
    description:
      "(208) 555-0351 | 3090 N Maple Grove Rd, Nampa, ID 83687 | Mon–Fri 8 AM–5 PM",
    images: [{ url: 'https://gracewomenshealth.com/og-image.jpg' }], // [DEMO] replace with real image
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact Grace Women's Health | Nampa, Idaho",
    description: "Call, visit, or send a message — we are here to help.",
  },
}

// LocalBusiness JSON-LD — more specific than the one in layout
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'MedicalOrganization'],
  name: "Grace Women's Health",
  description: "Board-certified OB/GYN practice in Nampa, Idaho specializing in prenatal care, labor and delivery, minimally invasive surgery, PCOS, menopause management, and comprehensive women's health.",
  // [DEMO] replace with real URL
  url: 'https://gracewomenshealth.com',
  telephone: '(208) 555-0351', // [DEMO] verify phone
  email: 'hello@gracewomenshealth.com', // [DEMO] replace with real email
  address: {
    '@type': 'PostalAddress',
    streetAddress: '3090 N Maple Grove Rd', // [DEMO] verify address
    addressLocality: 'Nampa',
    addressRegion: 'ID',
    postalCode: '83687',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 43.5738, // [DEMO] replace with verified coordinates
    longitude: -116.5635,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '12:00',
    },
  ],
  priceRange: '$$$',
  medicalSpecialty: {
    '@type': 'MedicalSpecialty',
    name: 'Obstetrics',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

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
              <li aria-current="page" className="text-white font-medium">Contact</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">Contact Us</h1>
          <p className="text-purple-200 max-w-xl">
            We are here to help. Call, visit, or send us a message.
          </p>
        </div>
      </section>

      {/* ─── MAIN CONTENT ─────────────────────────────────────────── */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* ─── LEFT: Contact info + map ──────────────────────── */}
            <div>
              {/* Address card */}
              <div className="bg-white rounded-2xl border border-purple-100 p-6 shadow-sm mb-5">
                <h2 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5" style={{ color: '#581c87' }} aria-hidden="true" />
                  Our Location
                </h2>

                {/* Map placeholder */}
                {/* [DEMO] Replace div below with a Google Maps iframe */}
                <div
                  className="w-full h-48 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center mb-4"
                  aria-label="Map placeholder — replace with Google Maps embed"
                  role="img"
                >
                  <div className="text-center">
                    <MapPin className="w-8 h-8 mx-auto mb-2 text-purple-300" aria-hidden="true" />
                    <p className="text-xs text-purple-400 font-medium">
                      [DEMO] Replace with Google Maps embed
                    </p>
                    <p className="text-xs text-purple-300">
                      3090 N Maple Grove Rd, Nampa, ID
                    </p>
                  </div>
                </div>

                <address className="text-gray-600 text-sm not-italic">
                  <strong className="block text-gray-900 mb-0.5">Osei Women&apos;s Health</strong>
                  {/* [DEMO] verify address before launch */}
                  3090 N Maple Grove Rd<br />
                  Nampa, ID 83687
                </address>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-2xl border border-purple-100 p-6 shadow-sm mb-5">
                <h2 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Phone className="w-5 h-5" style={{ color: '#581c87' }} aria-hidden="true" />
                  Phone
                </h2>
                <a
                  href="tel:2085550351"
                  className="text-base font-semibold hover:underline"
                  style={{ color: '#9333ea' }}
                >
                  (208) 555-0351
                </a>
                <p className="text-xs text-gray-500 mt-1">
                  For medical emergencies, call 911 or go to your nearest emergency room.
                </p>
              </div>

              {/* Email */}
              <div className="bg-white rounded-2xl border border-purple-100 p-6 shadow-sm mb-5">
                <h2 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Mail className="w-5 h-5" style={{ color: '#581c87' }} aria-hidden="true" />
                  Email
                </h2>
                {/* [DEMO] replace with real email */}
                <a
                  href="mailto:hello@gracewomenshealth.com"
                  className="text-sm font-medium hover:underline"
                  style={{ color: '#9333ea' }}
                >
                  hello@gracewomenshealth.com
                </a>
              </div>

              {/* Hours table */}
              <div className="bg-white rounded-2xl border border-purple-100 p-6 shadow-sm mb-5">
                <h2 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5" style={{ color: '#581c87' }} aria-hidden="true" />
                  Office Hours
                </h2>
                {/* [DEMO] verify all hours with practice before launch */}
                <table className="w-full text-sm text-gray-600">
                  <tbody>
                    <tr className="border-b border-gray-50">
                      <td className="py-2 pr-4">Monday</td>
                      <td className="py-2 font-medium text-right">8:00 AM – 5:00 PM</td>
                    </tr>
                    <tr className="border-b border-gray-50">
                      <td className="py-2 pr-4">Tuesday</td>
                      <td className="py-2 font-medium text-right">8:00 AM – 5:00 PM</td>
                    </tr>
                    <tr className="border-b border-gray-50">
                      <td className="py-2 pr-4">Wednesday</td>
                      <td className="py-2 font-medium text-right">8:00 AM – 5:00 PM</td>
                    </tr>
                    <tr className="border-b border-gray-50">
                      <td className="py-2 pr-4">Thursday</td>
                      <td className="py-2 font-medium text-right">8:00 AM – 5:00 PM</td>
                    </tr>
                    <tr className="border-b border-gray-50">
                      <td className="py-2 pr-4">Friday</td>
                      <td className="py-2 font-medium text-right">8:00 AM – 5:00 PM</td>
                    </tr>
                    <tr className="border-b border-gray-50">
                      <td className="py-2 pr-4">Saturday</td>
                      <td className="py-2 font-medium text-right">9:00 AM – 12:00 PM</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Sunday</td>
                      <td className="py-2 font-medium text-right text-red-500">Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Getting here */}
              <div
                className="rounded-2xl p-6"
                style={{ backgroundColor: '#faf5ff' }}
              >
                <h2 className="font-bold mb-3" style={{ color: '#581c87' }}>
                  Getting Here
                </h2>
                {/* [DEMO] replace with real directions and parking info */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  We are located at 3090 N Maple Grove Rd in Nampa, just off I-84 at Exit 36
                  (Northside Blvd/Garrity Blvd). Free parking is available directly in front of
                  the building. The office is accessible by public transit on Valley Regional
                  Transit Route 42.
                </p>
                <p className="text-xs text-purple-400 mt-2">
                  [DEMO] Replace with real directions and parking information.
                </p>
              </div>
            </div>

            {/* ─── RIGHT: Contact form (client component) ───────── */}
            <div>
              <ContactFormClient />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
