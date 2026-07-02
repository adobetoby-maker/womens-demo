// FILE 14: app/patient-resources/page.tsx — Patient Resources for Dr. Amara N. Osei OB/GYN

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, FileText, Download, Monitor, CheckCircle, Phone } from 'lucide-react'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What insurance do you accept?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We accept Blue Cross Blue Shield, Aetna, Cigna, United Healthcare, Medicare, Medicaid, Select Health, and Tricare. Insurance plans change frequently — please call to verify your specific plan before your appointment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a referral to see an OB/GYN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Most patients do not need a referral to see an OB/GYN. OB/GYNs are considered primary care providers for women's health under most insurance plans. However, some HMO and Medicaid plans require a referral from your primary care physician. Check with your insurance carrier or call our office to confirm.",
      },
    },
    {
      '@type': 'Question',
      name: 'What should I bring to my first appointment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bring your insurance card and photo ID, a list of all current medications and supplements, the date of your last menstrual period, records of any prior pregnancies or gynecologic surgeries, and a list of questions for Dr. Osei.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer telehealth visits?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer telehealth appointments for appropriate follow-up visits, medication management, and consultations that do not require a physical examination. Telehealth is not appropriate for new patient exams, prenatal care visits requiring fetal monitoring, or procedures. Call our office to determine if your visit qualifies.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I request my medical records?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Complete a Release of Information form at our office or through our patient portal. We process records requests within 10 business days. There may be a small fee for copying and handling.',
      },
    },
  ],
}

const faqs = [
  {
    question: 'What insurance do you accept?',
    answer:
      'We currently accept Blue Cross Blue Shield, Aetna, Cigna, United Healthcare, Medicare, Medicaid, Select Health, and Tricare. Insurance plans and coverage change frequently — please call our office to verify your specific plan before your appointment. We are happy to help you understand your benefits.',
  },
  {
    question: 'Do I need a referral to see Dr. Osei?',
    answer:
      "Most patients do not need a referral to see an OB/GYN — we are considered primary care providers for women's health under most insurance plans. However, some HMO and Medicaid plans do require a referral from your primary care physician. Check with your insurance carrier or call our office at (208) 555-0351 and we will help you find out.",
  },
  {
    question: 'What should I bring to my first appointment?',
    answer:
      'Please bring your insurance card and photo ID, a list of all current medications and supplements (including prenatal vitamins if you are pregnant), the date of your last menstrual period, records of any prior pregnancies or gynecologic surgeries, and a list of questions for Dr. Osei. If you are a new OB patient, bring any prenatal records from a prior provider if applicable.',
  },
  {
    question: 'Do you offer telehealth visits?',
    answer:
      'Yes, we offer telehealth appointments for appropriate follow-up visits, medication management, and consultations that do not require a physical examination. Telehealth is not appropriate for new patient exams, prenatal care visits requiring fetal monitoring, or procedures. Call our office or book online to determine if your visit qualifies for telehealth.',
  },
  {
    question: 'How do I request my medical records?',
    answer:
      'You can request your medical records by completing a Release of Information form at our office or through our patient portal. We process records requests within 10 business days in accordance with Idaho state law. There may be a small fee for copying and handling. Please allow additional time if records are being sent directly to another provider.',
  },
]

function FaqItem({
  question,
  answer,
  index,
}: {
  question: string
  answer: string
  index: number
}) {
  const [open, setOpen] = useState(false)
  const id = `faq-${index}`

  return (
    <div className="border border-purple-100 rounded-xl overflow-hidden">
      <button
        id={`${id}-btn`}
        className="w-full flex items-center justify-between p-5 bg-white text-left cursor-pointer hover:bg-purple-50 transition-colors duration-150"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={id}
      >
        <span className="text-sm font-semibold text-gray-800 pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
          style={{ color: '#581c87' }}
        />
      </button>
      {open && (
        <div
          id={id}
          role="region"
          aria-labelledby={`${id}-btn`}
          className="px-5 pb-5 bg-white border-t border-purple-50"
        >
          <p className="text-gray-600 text-sm leading-relaxed mt-4">{answer}</p>
        </div>
      )}
    </div>
  )
}

const insurance = [
  'Blue Cross Blue Shield',
  'Aetna',
  'Cigna',
  'United Healthcare',
  'Medicare',
  'Medicaid',
  'Select Health',
  'Tricare',
]

const newPatientForms = [
  {
    name: 'New Patient Registration',
    description: 'Personal information and insurance details',
  },
  {
    name: 'Medical History Form',
    description: 'Complete health history and current medications',
  },
  {
    name: 'HIPAA Privacy Notice',
    description: 'How we protect your health information',
  },
  {
    name: 'Financial Policy Agreement',
    description: 'Payment policies and financial responsibility',
  },
]

export default function PatientResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
              <li aria-current="page" className="text-white font-medium">Patient Resources</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
            Patient Resources
          </h1>
          <p className="text-purple-200 max-w-xl">
            Everything you need before and after your visit — insurance, forms, portal access,
            and answers to common questions.
          </p>
        </div>
      </section>

      {/* ─── INSURANCE ACCEPTED ───────────────────────────────────── */}
      <section className="py-14 bg-white" aria-labelledby="insurance-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="insurance-heading"
            className="text-2xl font-bold mb-2"
            style={{ color: '#581c87' }}
          >
            Insurance Accepted
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            {/* [DEMO] verify insurance list with billing department before launch */}
            We accept the plans listed below. Call to verify your specific coverage before your appointment.
          </p>

          <div className="flex flex-wrap gap-3 mb-4">
            {insurance.map((plan) => (
              <span
                key={plan}
                className="px-4 py-2 rounded-full text-sm font-medium border border-purple-200 text-purple-800 bg-purple-50"
              >
                {plan}
              </span>
            ))}
          </div>

          <p className="text-xs text-gray-400">
            Additional plans may be accepted. Call{' '}
            <a
              href="tel:2085550351"
              className="font-semibold hover:underline"
              style={{ color: '#9333ea' }}
            >
              (208) 555-0351
            </a>{' '}
            to verify your insurance before your visit.
          </p>
        </div>
      </section>

      {/* ─── NEW PATIENT FORMS ────────────────────────────────────── */}
      <section
        className="py-14"
        style={{ backgroundColor: '#faf5ff' }}
        aria-labelledby="forms-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="forms-heading"
            className="text-2xl font-bold mb-2"
            style={{ color: '#581c87' }}
          >
            New Patient Forms
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Download, complete, and bring these forms to your first appointment to save time.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {newPatientForms.map((form) => (
              <div
                key={form.name}
                className="bg-white rounded-xl border border-purple-100 p-5 flex items-start gap-4 hover:shadow-sm transition-shadow duration-150"
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: '#f3e8ff' }}
                >
                  <FileText className="w-5 h-5" style={{ color: '#581c87' }} aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm">{form.name}</p>
                  <p className="text-gray-500 text-xs mt-0.5 mb-2">{form.description}</p>
                  {/* [DEMO] Replace # with real PDF URL for each form */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-xs font-semibold hover:underline"
                    style={{ color: '#9333ea' }}
                  >
                    <Download className="w-3.5 h-3.5" aria-hidden="true" />
                    Download PDF [DEMO]
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PATIENT PORTAL ───────────────────────────────────────── */}
      <section className="py-14 bg-white" aria-labelledby="portal-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl p-8 text-white flex flex-col sm:flex-row items-start sm:items-center gap-6"
            style={{ background: 'linear-gradient(135deg, #581c87 0%, #9333ea 100%)' }}
          >
            <div
              className="flex-shrink-0 w-14 h-14 rounded-xl bg-white/15 flex items-center justify-center"
              aria-hidden="true"
            >
              <Monitor className="w-7 h-7 text-white" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <h2 id="portal-heading" className="text-xl font-bold mb-1">
                Patient Portal
              </h2>
              <p className="text-purple-200 text-sm mb-4">
                View test results, request prescription refills, message your care team, and manage
                appointments — all in one secure place.
              </p>
              {/* [DEMO] replace # with real patient portal URL */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-purple-900 hover:opacity-90 transition-opacity cursor-pointer"
                style={{ backgroundColor: '#f3e8ff' }}
              >
                Access Patient Portal [DEMO]
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────── */}
      <section
        className="py-14"
        style={{ backgroundColor: '#faf5ff' }}
        aria-labelledby="faq-heading"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="faq-heading"
            className="text-2xl font-bold mb-2"
            style={{ color: '#581c87' }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Don&apos;t see your question?{' '}
            <a
              href="tel:2085550351"
              className="font-semibold hover:underline"
              style={{ color: '#9333ea' }}
            >
              Call us
            </a>{' '}
            or{' '}
            <Link
              href="/contact"
              className="font-semibold hover:underline"
              style={{ color: '#9333ea' }}
            >
              send a message
            </Link>
            .
          </p>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT TO BRING ────────────────────────────────────────── */}
      <section className="py-14 bg-white" aria-labelledby="bring-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="bring-heading"
            className="text-2xl font-bold mb-2"
            style={{ color: '#581c87' }}
          >
            What to Bring to Your Appointment
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Being prepared helps us serve you better and keeps your visit on schedule.
          </p>

          <ul className="space-y-3" role="list">
            {[
              'Insurance card and photo ID',
              'List of all current medications, supplements, and dosages',
              'Date of your last menstrual period (LMP)',
              'Records of prior pregnancies or gynecologic surgeries',
              'Names and contact information for other treating physicians',
              'Payment method for co-pays or fees',
              'A list of questions for Dr. Osei — no question is too small',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                  style={{ color: '#9333ea' }}
                  aria-hidden="true"
                />
                <span className="text-gray-700 text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/appointments"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-opacity cursor-pointer"
              style={{ backgroundColor: '#581c87' }}
            >
              Book Your Appointment
            </Link>
            <a
              href="tel:2085550351"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold border-2 hover:bg-purple-50 transition-colors cursor-pointer"
              style={{ borderColor: '#581c87', color: '#581c87' }}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              (208) 555-0351
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
