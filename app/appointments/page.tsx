// FILE 12: app/appointments/page.tsx — Appointments page for Dr. Amara N. Osei OB/GYN

import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { AppointmentFormClient } from '@/components/AppointmentFormClient'

export const metadata: Metadata = {
  title: "Book Appointment | OB/GYN Nampa ID | Grace Women's Health",
  description:
    "Schedule an appointment with Dr. Amara N. Osei, OB/GYN in Nampa, ID. New OB patients welcome. Early appointments available. Call (208) 555-0351 or book online.",
  alternates: {
    canonical: 'https://gracewomenshealth.com/appointments',
  },
  openGraph: {
    title: "Book Appointment | Grace Women's Health Nampa ID",
    description:
      "New OB patients welcome. Schedule with Dr. Amara N. Osei — board-certified OB/GYN in Nampa, Idaho.",
    images: [{ url: 'https://gracewomenshealth.com/og-image.jpg' }], // [DEMO] replace with real image
  },
  twitter: {
    card: 'summary_large_image',
    title: "Book Appointment | Grace Women's Health",
    description: "New OB patients welcome. Early appointments available. Nampa, Idaho.",
  },
}

export default function AppointmentsPage() {
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
              <li aria-current="page" className="text-white font-medium">Appointments</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
            Book an Appointment
          </h1>
          <p className="text-purple-200 max-w-xl">
            New OB patients welcome. Most new patients are seen within 1–2 weeks.
            Same-day visits often available for urgent concerns.
          </p>
        </div>
      </section>

      {/* ─── NEW PATIENT URGENCY BANNER ───────────────────────────── */}
      <div
        className="border-y border-purple-200 py-3 px-4"
        style={{ backgroundColor: '#f3e8ff' }}
        role="alert"
      >
        <p className="text-center text-sm font-semibold text-purple-800 flex items-center justify-center gap-2">
          <CheckCircle className="w-4 h-4 text-green-600" aria-hidden="true" />
          New OB Patients Welcome — Early Appointments Available
        </p>
      </div>

      {/* ─── INTERACTIVE FORM + SIDEBAR (client component) ───────── */}
      <AppointmentFormClient />

    </div>
  )
}
