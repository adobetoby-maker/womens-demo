// FILE 11: app/conditions/page.tsx — Conditions page for Dr. Amara N. Osei OB/GYN

import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: "Conditions We Treat | OB/GYN Nampa ID | Grace Women's Health",
  description:
    "Expert diagnosis and treatment of PCOS, endometriosis, uterine fibroids, menstrual disorders, ovarian cysts, gestational diabetes, preeclampsia, and cervical dysplasia in Nampa, ID.",
  alternates: {
    canonical: 'https://gracewomenshealth.com/conditions',
  },
  openGraph: {
    title: "Conditions We Treat | Grace Women's Health Nampa ID",
    description:
      "PCOS, endometriosis, fibroids, menstrual disorders, ovarian cysts, gestational diabetes, preeclampsia, cervical dysplasia — expert care in Nampa, Idaho.",
    images: [{ url: 'https://gracewomenshealth.com/og-image.jpg' }], // [DEMO] replace with real image
  },
  twitter: {
    card: 'summary_large_image',
    title: "Conditions We Treat | Grace Women's Health",
    description: "Comprehensive gynecologic and obstetric condition management in Nampa, Idaho.",
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gracewomenshealth.com' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Conditions',
      item: 'https://gracewomenshealth.com/conditions',
    },
  ],
}

const conditions = [
  {
    name: 'PCOS (Polycystic Ovary Syndrome)',
    description:
      'PCOS is the most common hormonal disorder in women of reproductive age, affecting an estimated 1 in 10 women. It is characterized by irregular or absent menstrual cycles, elevated androgen levels (causing acne, excess hair growth, or scalp thinning), and often polycystic-appearing ovaries on ultrasound. Many women with PCOS also have insulin resistance, which contributes to weight gain and increases the long-term risk of type 2 diabetes. Treatment at Osei Women\'s Health is individualized based on your primary concern — whether that is menstrual regulation, androgen symptom management, metabolic health, or fertility.',
  },
  {
    name: 'Endometriosis',
    description:
      'Endometriosis occurs when tissue similar to the uterine lining grows outside the uterus — on the ovaries, fallopian tubes, pelvic peritoneum, and sometimes the bowel or bladder. It causes severe pelvic pain, painful periods, painful intercourse, and in many cases, infertility. It affects approximately 1 in 10 women and is notoriously underdiagnosed, with an average delay from symptoms to diagnosis of 7 years. Dr. Osei offers laparoscopic excision — the gold-standard surgical treatment — which removes lesions completely rather than burning their surface.',
  },
  {
    name: 'Uterine Fibroids',
    description:
      'Uterine fibroids are noncancerous growths of the uterine muscle that affect up to 70% of women by age 50. Many fibroids cause no symptoms. When they do, common complaints include heavy and prolonged menstrual bleeding, pelvic pressure or pain, urinary frequency, and in some cases, difficulty conceiving or maintaining a pregnancy. Treatment depends on fibroid size, location, number, your symptoms, and your reproductive goals. Options range from hormonal medication to minimally invasive myomectomy (fibroid removal with uterine preservation) or hysterectomy.',
  },
  {
    name: 'Menstrual Disorders',
    description:
      'Menstrual disorders include a spectrum of conditions: heavy menstrual bleeding (menorrhagia, defined as soaking a pad or tampon every hour for several hours or bleeding lasting longer than 7 days), painful periods (dysmenorrhea), irregular cycles, absent periods (amenorrhea), and premenstrual syndrome or PMDD. These are not simply inconveniences — they are medical conditions with identifiable causes and effective treatments. Dr. Osei evaluates each patient with appropriate laboratory work and pelvic imaging before recommending a management plan.',
  },
  {
    name: 'Ovarian Cysts',
    description:
      'Ovarian cysts are fluid-filled sacs on or inside the ovaries. Functional cysts (follicular and corpus luteum cysts) form as a normal part of the menstrual cycle and typically resolve on their own within one to three cycles. Other types — including endometriomas, dermoid cysts, and cystadenomas — may persist or grow and require intervention. Most ovarian cysts are benign. Transvaginal ultrasound is the primary diagnostic tool, and management is guided by cyst characteristics, size, symptoms, and the patient\'s age and menopausal status.',
  },
  {
    name: 'Gestational Diabetes',
    description:
      'Gestational diabetes mellitus (GDM) develops during pregnancy when the body cannot produce enough insulin to meet the increased demands of pregnancy. Left unmanaged, it raises the risk of macrosomia (large baby), birth injury, cesarean delivery, neonatal hypoglycemia, and preeclampsia. Importantly, it also increases the mother\'s lifetime risk of type 2 diabetes by 50%. Management at Osei Women\'s Health includes dietary modification, blood glucose monitoring, and — when lifestyle changes are insufficient — insulin or oral hypoglycemic medication.',
  },
  {
    name: 'Preeclampsia',
    description:
      'Preeclampsia is a serious pregnancy complication characterized by new-onset hypertension (blood pressure ≥140/90 mmHg) after 20 weeks of pregnancy, accompanied by signs of end-organ damage — most commonly protein in the urine, liver enzyme elevation, platelet abnormalities, or neurological symptoms. It affects 5–8% of pregnancies and is a leading cause of maternal and neonatal morbidity worldwide. Early detection through regular blood pressure monitoring and risk stratification is central to prenatal care. The only definitive treatment is delivery; timing is based on gestational age and severity.',
  },
  {
    name: 'Cervical Dysplasia',
    description:
      'Cervical dysplasia refers to abnormal changes in the cells of the cervix detected by Pap smear or HPV testing. These changes are caused by persistent infection with high-risk strains of human papillomavirus (HPV). Dysplasia ranges from CIN 1 (mild) to CIN 3 (severe), and while most mild cases resolve on their own, moderate to severe dysplasia requires treatment to prevent progression to cervical cancer. Dr. Osei performs in-office colposcopy for evaluation and LEEP (loop electrosurgical excision procedure) for treatment of confirmed high-grade lesions.',
  },
]

export default function ConditionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
              <li aria-current="page" className="text-white font-medium">Conditions</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
            Conditions We Treat
          </h1>
          <p className="text-purple-200 max-w-xl">
            Expert evaluation and individualized treatment for gynecologic and obstetric conditions
            affecting women in Nampa and the Treasure Valley.
          </p>
        </div>
      </section>

      {/* ─── CONDITIONS GRID ──────────────────────────────────────── */}
      <section className="py-16" aria-label="Conditions list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {conditions.map(({ name, description }) => (
              <div
                key={name}
                className="bg-white rounded-2xl border border-purple-100 p-6 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-200"
              >
                {/* "We treat this" badge */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h2
                    className="text-lg font-bold leading-snug"
                    style={{ color: '#581c87' }}
                  >
                    {name}
                  </h2>
                  <span
                    className="inline-flex items-center gap-1 flex-shrink-0 px-2.5 py-1 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: '#f3e8ff', color: '#581c87' }}
                  >
                    <CheckCircle className="w-3 h-3" aria-hidden="true" />
                    We treat this
                  </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>

                <Link
                  href="/appointments"
                  className="inline-flex items-center gap-1 text-sm font-semibold hover:underline"
                  style={{ color: '#9333ea' }}
                >
                  Schedule a Consultation
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section
        className="py-16"
        style={{ background: 'linear-gradient(135deg, #581c87 0%, #9333ea 100%)' }}
        aria-labelledby="conditions-cta-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="conditions-cta-heading"
            className="text-2xl sm:text-3xl font-bold text-white mb-4"
          >
            Not Sure If We Can Help?
          </h2>
          <p className="text-purple-200 mb-8 max-w-lg mx-auto">
            Call our office to speak with our care team. We will help you determine the right
            next step — whether that&apos;s an appointment with Dr. Osei or a referral to a specialist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointments"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-purple-900 hover:opacity-90 transition-opacity cursor-pointer shadow-lg"
              style={{ backgroundColor: '#f3e8ff' }}
            >
              Book a Consultation
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
