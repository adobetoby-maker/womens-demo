// FILE 19: lib/siteData.ts — Practice constants for Dr. Amara N. Osei OB/GYN

export const PRACTICE_NAME = "Grace Women's Health"

export const PRACTICE_PHONE = '(208) 555-0351'

export const PRACTICE_ADDRESS = '3090 N Maple Grove Rd, Nampa, ID 83687'

export const PRACTICE_CITY = 'Nampa, ID'

export const URGENCY = 'New OB Patients Welcome — Early Appointments Available'

export const PRIMARY_COLOR = '#581c87'

export const SECONDARY_COLOR = '#9333ea'

export const ACCENT_COLOR = '#f3e8ff'

export interface PhysicianInfo {
  name: string
  role: string
  credentials: string
  experience: string
  education: string
  hospital: string
  bio: string
}

export const PHYSICIAN: PhysicianInfo = {
  // [DEMO] verify all physician details before launch
  name: 'Dr. Amara N. Osei',
  role: 'Board-Certified OB/GYN',
  credentials: 'MD, FACOG',
  experience: '17',
  education: 'Yale School of Medicine; Barnes-Jewish Hospital Residency',
  hospital: 'West Valley Medical Center',
  bio: 'Dr. Amara N. Osei is a board-certified OB/GYN with 17 years of dedicated experience caring for women at every stage of life. A Yale School of Medicine graduate who completed her residency at Barnes-Jewish Hospital in St. Louis, she brings world-class training to the women of the Treasure Valley. Dr. Osei is renowned for her thoughtful approach to high-risk obstetrics, minimally invasive gynecologic surgery, and her genuine commitment to building lasting patient relationships rooted in trust and mutual respect.',
}

export const SERVICES: string[] = [
  'Prenatal Care',
  'Labor & Delivery',
  'Gynecologic Exams',
  'Family Planning',
  'Minimally Invasive Surgery',
  'Menopause Management',
  'Infertility Evaluation',
  'High-Risk Pregnancy',
]

export const CONDITIONS: string[] = [
  'PCOS',
  'Endometriosis',
  'Uterine Fibroids',
  'Menstrual Disorders',
  'Ovarian Cysts',
  'Gestational Diabetes',
  'Preeclampsia',
  'Cervical Dysplasia',
]

export const INSURANCE_ACCEPTED: string[] = [
  'Blue Cross Blue Shield',
  'Aetna',
  'Cigna',
  'United Healthcare',
  'Medicare',
  'Medicaid',
  'Select Health',
  'Tricare',
]
