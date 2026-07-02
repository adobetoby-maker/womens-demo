// lib/content.ts — Site-wide content for Dr. Amara N. Osei OB/GYN, Nampa ID

export interface Testimonial {
  name: string
  text: string
  rating: number
}

export interface ServiceItem {
  name: string
  description: string
  icon: string
}

export interface ConditionItem {
  name: string
  description: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  keyword: string
  author: string
  date: string
  readTime: string
  body: string
}

export interface SiteContent {
  practiceName: string
  tagline: string
  specialty: string
  patientJourney: string
  city: string
  state: string
  zip: string
  address: string
  phone: string
  email: string
  website: string
  physicianName: string
  physicianTitle: string
  physicianYears: string
  physicianBio: string
  physicianEducation: string
  physicianHospital: string
  services: ServiceItem[]
  conditions: ConditionItem[]
  testimonials: Testimonial[]
  insurance: string[]
  story: string
  mission: string
  patientPortalUrl: string
  faq: { question: string; answer: string }[]
  availableSlots: string
  bookingNote: string
  heroImageAlt: string
  seoTitle: string
  seoDescription: string
  seoKeywords: string
  primaryColor: string
  secondaryColor: string
  accentColor: string
  bgLightColor: string
  medicalSpecialty: string
  schemaType: string
  jsonLd: Record<string, unknown>
}

export const siteContent: SiteContent = {
  // [DEMO] replace with real practice name
  practiceName: "Treasure Valley Women's Health",

  tagline: "Compassionate Women's Care, Every Stage of Life.",

  specialty: 'OB/GYN',

  patientJourney:
    'From your first prenatal appointment through delivery and beyond, Dr. Osei partners with you at every stage of your reproductive health journey — providing evidence-based, personalized care with genuine compassion.',

  // [DEMO] replace with real address details
  city: 'Nampa',
  state: 'Idaho',
  zip: '83687',
  address: '3090 N Maple Grove Rd',

  // [DEMO] replace with real phone
  phone: '(208) 555-0351',

  // [DEMO] replace with real email
  email: 'hello@oseiwomenshealth.com',

  // [DEMO] replace with real website URL
  website: 'https://oseiwomenshealth.com',

  // [DEMO] replace with real physician name
  physicianName: 'Dr. Amara N. Osei',

  // [DEMO] replace with real physician title/credentials
  physicianTitle: 'MD, FACOG',

  // [DEMO] replace with real years of experience
  physicianYears: '17',

  // [DEMO] replace with real physician hospital affiliation
  physicianHospital: 'West Valley Medical Center',

  // [DEMO] replace with real physician bio
  physicianBio:
    "Dr. Amara N. Osei is a board-certified OB/GYN with 17 years of dedicated experience caring for women at every stage of life. A Yale School of Medicine graduate who completed her residency at Barnes-Jewish Hospital in St. Louis, she brings world-class training to the Treasure Valley. Dr. Osei is known for her thoughtful approach to high-risk obstetrics, minimally invasive gynecologic surgery, and her genuine commitment to building lasting patient relationships rooted in trust and respect.",

  // [DEMO] replace with real physician education — verify all institutions and credentials
  physicianEducation:
    'MD, Yale School of Medicine | Residency, OB/GYN, Barnes-Jewish Hospital, Washington University | Board Certified, American Board of Obstetrics and Gynecology | Fellow, American College of Obstetricians and Gynecologists (FACOG) | Hospital Privileges, West Valley Medical Center',

  services: [
    {
      // [DEMO] verify service name and description
      name: 'Prenatal Care',
      description:
        'Comprehensive prenatal care from your first positive test through each trimester. We combine evidence-based monitoring with personalized attention to keep you and your baby thriving.',
      icon: 'baby',
    },
    {
      // [DEMO] verify service name and description
      name: 'Labor & Delivery',
      description:
        'Expert obstetric support throughout labor and delivery at West Valley Medical Center. Dr. Osei manages both vaginal and cesarean deliveries with skill and compassion.',
      icon: 'heart',
    },
    {
      // [DEMO] verify service name and description
      name: 'Gynecologic Exams',
      description:
        'Annual well-woman exams, Pap smears, pelvic exams, and STI screenings. Preventive care is the cornerstone of lifelong reproductive health.',
      icon: 'stethoscope',
    },
    {
      // [DEMO] verify service name and description
      name: 'Family Planning',
      description:
        'Personalized contraception counseling covering all FDA-approved methods — from daily pills to long-acting IUDs and implants — tailored to your lifestyle and reproductive goals.',
      icon: 'shield',
    },
    {
      // [DEMO] verify service name and description
      name: 'Minimally Invasive Surgery',
      description:
        'Laparoscopic and robotic-assisted procedures for endometriosis, fibroids, ovarian cysts, and other gynecologic conditions. Smaller incisions, faster recovery.',
      icon: 'scissors',
    },
    {
      // [DEMO] verify service name and description
      name: 'Menopause Management',
      description:
        'Evidence-based hormone therapy, non-hormonal alternatives, and lifestyle strategies to manage hot flashes, mood changes, bone loss, and other menopausal symptoms.',
      icon: 'thermometer',
    },
    {
      // [DEMO] verify service name and description
      name: 'Infertility Evaluation',
      description:
        'Initial fertility work-up including hormonal panels, pelvic ultrasound, and HSG. We coordinate closely with reproductive endocrinologists for advanced treatment pathways.',
      icon: 'microscope',
    },
    {
      // [DEMO] verify service name and description
      name: 'High-Risk Pregnancy',
      description:
        'Specialized management of pregnancies complicated by diabetes, hypertension, multiples, prior preterm birth, or maternal health conditions requiring closer surveillance.',
      icon: 'activity',
    },
  ],

  conditions: [
    {
      // [DEMO] verify condition name and description
      name: 'PCOS',
      description:
        'Polycystic ovary syndrome affects 1 in 10 women and causes irregular cycles, elevated androgens, and metabolic changes. Dr. Osei offers individualized management for symptom relief and fertility.',
    },
    {
      // [DEMO] verify condition name and description
      name: 'Endometriosis',
      description:
        'A chronic condition where uterine-like tissue grows outside the uterus, causing severe pelvic pain and fertility challenges. Dr. Osei specializes in laparoscopic excision — the gold-standard treatment.',
    },
    {
      // [DEMO] verify condition name and description
      name: 'Uterine Fibroids',
      description:
        'Noncancerous growths causing heavy bleeding, pelvic pressure, and pain. We offer medical management and minimally invasive myomectomy tailored to your reproductive goals.',
    },
    {
      // [DEMO] verify condition name and description
      name: 'Menstrual Disorders',
      description:
        'Irregular periods, heavy bleeding (menorrhagia), and painful periods (dysmenorrhea) that disrupt daily life deserve a thorough evaluation and an effective treatment plan.',
    },
    {
      // [DEMO] verify condition name and description
      name: 'Ovarian Cysts',
      description:
        'Most ovarian cysts are benign and resolve on their own, but some require monitoring or intervention. We use ultrasound and laboratory markers to determine the safest management plan.',
    },
    {
      // [DEMO] verify condition name and description
      name: 'Gestational Diabetes',
      description:
        'Diabetes that develops during pregnancy requires careful monitoring and management to protect both mother and baby. Dr. Osei provides close surveillance and individualized diet and medication guidance.',
    },
    {
      // [DEMO] verify condition name and description
      name: 'Preeclampsia',
      description:
        'A serious blood pressure complication of pregnancy requiring close monitoring and timely delivery planning. Our high-risk obstetric team provides expert management of this condition.',
    },
    {
      // [DEMO] verify condition name and description
      name: 'Cervical Dysplasia',
      description:
        'Abnormal cervical cell changes detected by Pap smear or HPV testing. We monitor and treat dysplasia with colposcopy and LEEP procedures to prevent progression to cervical cancer.',
    },
  ],

  testimonials: [
    {
      // [DEMO] replace with real patient testimonial
      name: 'Keisha M.',
      text: "Dr. Osei delivered my daughter and I cannot imagine a more calm, reassuring presence in that delivery room. When things moved quickly she was completely composed and kept me grounded. I felt safe the entire time. She's the only doctor I trust with my pregnancies.",
      rating: 5,
    },
    {
      // [DEMO] replace with real patient testimonial
      name: 'Rachel T.',
      text: 'I had been dismissed by two other providers before I saw Dr. Osei about my PCOS. She actually listened, ordered the right tests, and within two months I had a real diagnosis and a treatment plan that worked. My cycles are regular for the first time in years.',
      rating: 5,
    },
    {
      // [DEMO] replace with real patient testimonial
      name: 'Donna P.',
      text: "I was terrified about my fibroid surgery. Dr. Osei performed a laparoscopic myomectomy and I was home the same day. I avoided a hysterectomy and was back to normal within two weeks. Her skill and compassion made all the difference in the world.",
      rating: 5,
    },
  ],

  // [DEMO] replace with real accepted insurance list — verify with billing department
  insurance: [
    'Blue Cross Blue Shield',
    'Aetna',
    'Cigna',
    'United Healthcare',
    'Medicare',
    'Medicaid',
    'Select Health',
    'Tricare',
  ],

  // [DEMO] replace with real practice story
  story:
    "Treasure Valley Women's Health was founded on the belief that every woman deserves a physician who listens as carefully as she treats. Dr. Amara N. Osei built this practice because she saw firsthand how transformative it is for patients to feel genuinely heard — not rushed, not dismissed, not reduced to a chief complaint. From routine annual exams to complex high-risk pregnancies, we approach every visit as an opportunity to earn your trust.",

  // [DEMO] replace with real mission statement
  mission:
    "To deliver compassionate, evidence-based women's health care that honors each patient's unique story — from her first gynecologic exam to her last hot flash and every milestone in between.",

  // [DEMO] replace with real patient portal URL
  patientPortalUrl: 'https://portal.treasurevalleywomens.com',

  faq: [
    {
      question: 'What insurance do you accept?',
      answer:
        'We currently accept Blue Cross Blue Shield, Aetna, Cigna, United Healthcare, Medicare, Medicaid, Select Health, and Tricare. Insurance plans and coverage change frequently — please call our office to verify your specific plan before your appointment. We are happy to help you understand your benefits.',
    },
    {
      question: 'Do I need a referral to see Dr. Osei?',
      answer:
        "Most patients do not need a referral to see an OB/GYN — we are considered primary care providers for women's health under most insurance plans. However, some HMO and Medicaid plans do require a referral from your primary care physician. Check with your insurance carrier if you are unsure, or call our office and we will help you find out.",
    },
    {
      question: 'What should I bring to my first appointment?',
      answer:
        'Please bring your insurance card and photo ID, a list of all current medications and supplements, the date of your last menstrual period, records of any prior pregnancies or gynecologic surgeries, and a list of questions for Dr. Osei. If you are a new OB patient, bring any prenatal records from a prior provider if applicable.',
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
  ],

  // [DEMO] replace with real availability message
  availableSlots: 'New OB patients welcome — early appointments available',

  // [DEMO] replace with real booking note
  bookingNote:
    'Call us or request an appointment online. New gynecology patients are typically seen within 1–2 weeks. For urgent concerns, same-day appointments are often available.',

  // [DEMO] replace with real hero image alt text
  heroImageAlt: "Dr. Amara N. Osei, OB/GYN, Nampa Idaho — Treasure Valley Women's Health",

  // [DEMO] verify SEO fields before launch
  seoTitle: "OB/GYN Nampa ID | Dr. Amara N. Osei | Treasure Valley Women's Health",
  seoDescription:
    "Board-certified OB/GYN in Nampa, ID. Prenatal care, labor & delivery, PCOS, menopause management. Accepting new OB patients. Call (208) 555-0351.",
  seoKeywords:
    "OB/GYN Nampa Idaho, prenatal care Nampa, women's health Nampa, PCOS treatment Idaho, endometriosis Nampa, high-risk pregnancy Nampa, menopause doctor Nampa, Dr Amara Osei OB/GYN",

  primaryColor: '#581c87',
  secondaryColor: '#9333ea',
  accentColor: '#f3e8ff',
  bgLightColor: '#faf5ff',

  medicalSpecialty: 'Obstetrics',
  schemaType: 'Obstetrics',

  jsonLd: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['MedicalOrganization', 'LocalBusiness'],
        '@id': 'https://oseiomenshealth.com/#organization',
        // [DEMO] replace with real practice name
        name: "Treasure Valley Women's Health",
        medicalSpecialty: {
          '@type': 'MedicalSpecialty',
          name: 'Obstetrics',
        },
        // [DEMO] replace with real URL
        url: 'https://treasurevalleywomens.com',
        telephone: '(208) 555-0351',
        email: 'hello@oseiomenshealth.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '3090 N Maple Grove Rd',
          addressLocality: 'Nampa',
          addressRegion: 'ID',
          postalCode: '83687',
          addressCountry: 'US',
        },
        geo: {
          '@type': 'GeoCoordinates',
          // [DEMO] replace with real coordinates
          latitude: 43.5738,
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
        availableService: [
          { '@type': 'MedicalProcedure', name: 'Prenatal Care' },
          { '@type': 'MedicalProcedure', name: 'Labor & Delivery' },
          { '@type': 'MedicalProcedure', name: 'Gynecologic Exams' },
          { '@type': 'MedicalProcedure', name: 'Family Planning' },
          { '@type': 'MedicalProcedure', name: 'Minimally Invasive Surgery' },
          { '@type': 'MedicalProcedure', name: 'Menopause Management' },
          { '@type': 'MedicalProcedure', name: 'Infertility Evaluation' },
          { '@type': 'MedicalProcedure', name: 'High-Risk Pregnancy' },
        ],
      },
      {
        '@type': 'Physician',
        '@id': 'https://oseiomenshealth.com/#physician',
        name: 'Dr. Amara N. Osei',
        honorificSuffix: 'MD, FACOG',
        medicalSpecialty: {
          '@type': 'MedicalSpecialty',
          name: 'Obstetrics',
        },
        worksFor: {
          '@id': 'https://oseiomenshealth.com/#organization',
        },
        alumniOf: [
          {
            '@type': 'CollegeOrUniversity',
            name: 'Yale School of Medicine',
          },
          {
            '@type': 'Hospital',
            name: 'Barnes-Jewish Hospital, Washington University',
          },
        ],
        memberOf: {
          '@type': ['MedicalOrganization'],
          name: 'American College of Obstetricians and Gynecologists',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://oseiomenshealth.com/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What insurance do you accept?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We accept Blue Cross Blue Shield, Aetna, Cigna, United Healthcare, Medicare, Medicaid, Select Health, and Tricare. Please call to verify your specific plan.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do I need a referral to see an OB/GYN?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Most patients do not need a referral — OB/GYNs are considered primary care providers for women's health under most plans. HMO and some Medicaid plans may require a referral. Call your insurer or our office to confirm.",
            },
          },
          {
            '@type': 'Question',
            name: 'What should I bring to my first appointment?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Bring your insurance card, photo ID, medication list, date of last menstrual period, and any prior pregnancy or gynecologic surgery records.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you offer telehealth visits?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, for appropriate follow-up visits and consultations that do not require a physical exam. Book online or call to confirm if your visit qualifies.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I request my medical records?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Complete a Release of Information form at our office or through the patient portal. Records are processed within 10 business days.',
            },
          },
        ],
      },
    ],
  },
}
