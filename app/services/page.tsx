// FILE 10: app/services/page.tsx — Services page for Dr. Amara N. Osei OB/GYN

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
  ChevronRight,
  Phone,
} from 'lucide-react'

export const metadata: Metadata = {
  title: "OB/GYN Services in Nampa, ID | Osei Women's Health",
  description:
    "Comprehensive OB/GYN services in Nampa, ID — prenatal care, labor & delivery, minimally invasive surgery, menopause management, infertility evaluation, and more. Dr. Amara N. Osei.",
  alternates: {
    canonical: 'https://oseiomenshealth.com/services',
  },
  openGraph: {
    title: "OB/GYN Services in Nampa, ID | Osei Women's Health",
    description:
      "8 specialized OB/GYN services for every stage of a woman's life — Nampa, Idaho.",
    images: [{ url: 'https://oseiomenshealth.com/og-image.jpg' }], // [DEMO] replace with real image
  },
  twitter: {
    card: 'summary_large_image',
    title: "OB/GYN Services | Osei Women's Health Nampa ID",
    description: "Prenatal care, labor & delivery, surgery, menopause management, and more.",
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://oseiomenshealth.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://oseiomenshealth.com/services' },
  ],
}

const servicesProceduresSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalProcedure',
      name: 'Prenatal Care',
      description: 'Comprehensive prenatal care from first confirmation of pregnancy through delivery at West Valley Medical Center.',
      provider: {
        '@type': 'MedicalOrganization',
        name: "Osei Women's Health",
        telephone: '(208) 555-0351',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '3090 N Maple Grove Rd',
          addressLocality: 'Nampa',
          addressRegion: 'ID',
          postalCode: '83687',
        },
      },
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Labor & Delivery',
      description: 'Expert obstetric management of labor and delivery, including both vaginal and cesarean births.',
      provider: { '@type': 'MedicalOrganization', name: "Osei Women's Health" },
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Gynecologic Exams',
      description: 'Annual well-woman exams, Pap smears, pelvic exams, and STI screening.',
      provider: { '@type': 'MedicalOrganization', name: "Osei Women's Health" },
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Family Planning',
      description: 'Comprehensive contraception counseling covering all FDA-approved methods.',
      provider: { '@type': 'MedicalOrganization', name: "Osei Women's Health" },
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Minimally Invasive Surgery',
      description: 'Laparoscopic and robotic-assisted procedures for endometriosis, fibroids, ovarian cysts, and more.',
      provider: { '@type': 'MedicalOrganization', name: "Osei Women's Health" },
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Menopause Management',
      description: 'Evidence-based hormone therapy and non-hormonal alternatives for vasomotor symptoms, mood, and bone health.',
      provider: { '@type': 'MedicalOrganization', name: "Osei Women's Health" },
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Infertility Evaluation',
      description: 'Initial fertility work-up including hormonal panels, pelvic ultrasound, and hysterosalpingography.',
      provider: { '@type': 'MedicalOrganization', name: "Osei Women's Health" },
    },
    {
      '@type': 'MedicalProcedure',
      name: 'High-Risk Pregnancy',
      description: 'Specialized management of pregnancies complicated by maternal health conditions or prior obstetric history.',
      provider: { '@type': 'MedicalOrganization', name: "Osei Women's Health" },
    },
  ],
}

const services = [
  {
    name: 'Prenatal Care',
    Icon: Baby,
    description:
      'Prenatal care begins from the moment you learn you are pregnant. Dr. Osei provides comprehensive monitoring from your first visit — typically 8–10 weeks — through each trimester, including all standard laboratory screenings, genetic counseling referrals, anatomy ultrasound at 20 weeks, gestational diabetes screening, and Group B streptococcus testing.',
    whoNeeds:
      'Every pregnant patient benefits from structured prenatal care. Women with prior pregnancy complications, diabetes, hypertension, autoimmune conditions, or multiples receive additional monitoring as part of a high-risk protocol.',
    whatToExpect:
      'Expect approximately 12–14 appointments over the course of a low-risk pregnancy, increasing in frequency as your due date approaches. Each visit includes blood pressure monitoring, fetal heart tones, fundal height measurement, and dedicated time for your questions.',
  },
  {
    name: 'Labor & Delivery',
    Icon: Heart,
    description:
      'Dr. Osei manages labor and delivery at West Valley Medical Center in Caldwell, Idaho. She provides skilled obstetric support throughout active labor, managing both uncomplicated vaginal deliveries and cesarean sections when medically indicated.',
    whoNeeds:
      'All obstetric patients approaching term. Labor management is tailored to your birth preferences, risk factors, and the clinical picture at the time of delivery. Dr. Osei takes birth plans seriously and reviews them before your due date.',
    whatToExpect:
      'When you go into labor, you will contact our office or the hospital directly. Dr. Osei or her covering partner will be present for delivery. Pain management options including epidural analgesia, IV medications, and non-pharmacologic approaches are available.',
  },
  {
    name: 'Gynecologic Exams',
    Icon: Stethoscope,
    description:
      'Annual gynecologic exams are the cornerstone of preventive women&apos;s health care. Dr. Osei performs comprehensive well-woman visits that include Pap smear and HPV co-testing per current ASCCP guidelines, clinical breast exam, pelvic exam, and a review of age-appropriate preventive screenings.',
    whoNeeds:
      'All women beginning at age 21, or earlier for those who are sexually active and have specific risk factors. Frequency of Pap testing varies by age and history — current guidelines recommend screening every 3 years (Pap alone) or every 5 years (Pap plus HPV co-test) for most women ages 21–65.',
    whatToExpect:
      'A well-woman visit typically takes 30–45 minutes. It includes a full health review, a brief physical exam, any indicated laboratory tests, and a discussion of contraception, sexual health, bone density, cardiovascular risk, and other age-appropriate topics.',
  },
  {
    name: 'Family Planning',
    Icon: Shield,
    description:
      'Choosing the right contraceptive method is a deeply personal decision. Dr. Osei counsels patients on all FDA-approved methods: combined oral contraceptive pills, progestin-only pills, contraceptive patches, vaginal rings, injectable medroxyprogesterone (Depo-Provera), hormonal and copper IUDs, the subdermal implant (Nexplanon), and permanent sterilization options.',
    whoNeeds:
      'Any woman who wants to prevent pregnancy, space pregnancies, or manage conditions like PCOS, endometriosis, or dysmenorrhea that respond to hormonal therapy. There is no single best method — the right choice depends on your health history, lifestyle, future fertility plans, and preferences.',
    whatToExpect:
      'A family planning consultation covers your full reproductive history, health conditions that may affect method choice, and your goals. IUD insertion and implant placement are performed in-office, typically in under 10 minutes, with mild cramping during and after the procedure.',
  },
  {
    name: 'Minimally Invasive Surgery',
    Icon: Scissors,
    description:
      'Dr. Osei performs laparoscopic and robotic-assisted procedures for a range of gynecologic conditions. Minimally invasive surgery uses small incisions rather than a large abdominal opening, resulting in less pain, fewer complications, shorter hospital stays, and faster return to normal activity compared to open surgery.',
    whoNeeds:
      'Women with symptomatic endometriosis, uterine fibroids causing heavy bleeding or pelvic pressure, ovarian cysts requiring removal, or other gynecologic conditions that have not responded to medical management.',
    whatToExpect:
      'Most laparoscopic procedures are performed as outpatient surgery under general anesthesia. You will go home the same day and typically return to light activity within 1–2 weeks. Dr. Osei reviews your imaging and laboratory results in detail before recommending surgery.',
  },
  {
    name: 'Menopause Management',
    Icon: Thermometer,
    description:
      'Menopause management at Osei Women&apos;s Health is individualized and evidence-based. Treatment options include systemic hormone therapy (estradiol plus progesterone), low-dose vaginal estrogen for genitourinary symptoms, non-hormonal prescription medications (fezolinetant, SSRIs, gabapentin), and evidence-backed lifestyle and behavioral approaches.',
    whoNeeds:
      'Women experiencing vasomotor symptoms (hot flashes, night sweats), sleep disruption, mood changes, vaginal dryness, painful intercourse, or other symptoms related to perimenopause or menopause. Management is appropriate for women in the perimenopausal transition as well as those who are fully postmenopausal.',
    whatToExpect:
      'A menopause consultation includes a thorough symptom inventory, cardiovascular risk assessment, review of your personal and family history, and a discussion of treatment options with an honest explanation of current evidence on risks and benefits.',
  },
  {
    name: 'Infertility Evaluation',
    Icon: Microscope,
    description:
      'When conception does not happen on the expected timeline, a structured evaluation can identify causes and guide treatment. Dr. Osei provides an initial fertility work-up including baseline hormone levels (FSH, LH, AMH, estradiol), thyroid function, semen analysis (for the male partner), pelvic ultrasound, and hysterosalpingography (HSG) to assess tubal patency.',
    whoNeeds:
      'Women under 35 who have been trying to conceive for 12 months without success, or women over 35 who have been trying for 6 months. Women with known risk factors for infertility — irregular cycles, prior pelvic surgery, endometriosis, PCOS, or recurrent pregnancy loss — may be evaluated earlier.',
    whatToExpect:
      'The initial evaluation is spread over 2–3 appointments timed to specific cycle days. Results are reviewed in a dedicated consultation where Dr. Osei explains findings clearly and outlines next steps, including referral to a reproductive endocrinologist when indicated.',
  },
  {
    name: 'High-Risk Pregnancy',
    Icon: Activity,
    description:
      'High-risk obstetric care involves closer monitoring and individualized management for pregnancies complicated by maternal medical conditions, obstetric history, or fetal findings. Dr. Osei manages a wide spectrum of high-risk conditions directly, coordinating with maternal-fetal medicine specialists when subspecialty consultation is appropriate.',
    whoNeeds:
      'Women with pregestational or gestational diabetes, chronic hypertension, preeclampsia risk factors, prior preterm birth, autoimmune conditions (lupus, antiphospholipid syndrome), prior cesarean sections, multiple gestations, advanced maternal age, or fetal anomalies detected on ultrasound.',
    whatToExpect:
      'High-risk patients are seen more frequently than standard prenatal patients and receive additional ultrasounds, fetal monitoring (non-stress tests, biophysical profiles), and laboratory surveillance tailored to their specific risk factors. Dr. Osei coordinates care plans proactively to reduce complications.',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesProceduresSchema) }}
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
              <li aria-current="page" className="text-white font-medium">Services</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">Our Services</h1>
          <p className="text-purple-200 max-w-xl">
            Comprehensive OB/GYN care for every stage of a woman&apos;s life — all in Nampa, Idaho.
          </p>
        </div>
      </section>

      {/* ─── SERVICES LIST ────────────────────────────────────────── */}
      <section className="py-16" aria-label="Services detail">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map(({ name, Icon, description, whoNeeds, whatToExpect }) => (
              <article
                key={name}
                id={name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                className="bg-white rounded-2xl border border-purple-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                {/* Service header */}
                <div
                  className="px-6 sm:px-8 py-5 flex items-center gap-4"
                  style={{ backgroundColor: '#faf5ff' }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#581c87' }}
                  >
                    <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <h2
                    className="text-xl sm:text-2xl font-bold"
                    style={{ color: '#581c87' }}
                  >
                    {name}
                  </h2>
                </div>

                {/* Service content */}
                <div className="px-6 sm:px-8 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-2">
                      About This Service
                    </h3>
                    <p
                      className="text-gray-700 text-sm leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: description }}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-2">
                      Who Needs It
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{whoNeeds}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-2">
                      What to Expect
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{whatToExpect}</p>
                    <Link
                      href="/appointments"
                      className="inline-flex items-center gap-1 mt-4 text-sm font-semibold hover:underline"
                      style={{ color: '#9333ea' }}
                    >
                      Book for {name}
                      <ChevronRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section
        className="py-16"
        style={{ background: 'linear-gradient(135deg, #581c87 0%, #9333ea 100%)' }}
        aria-labelledby="services-cta-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="services-cta-heading"
            className="text-2xl sm:text-3xl font-bold text-white mb-4"
          >
            Questions About Our Services?
          </h2>
          <p className="text-purple-200 mb-8">
            Our team is here to help you find the right care. New OB patients welcome.
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
