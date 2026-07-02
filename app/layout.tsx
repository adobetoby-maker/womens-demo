// FILE 7: app/layout.tsx — Root layout for Dr. Amara N. Osei OB/GYN

import type { Metadata } from 'next'
import { siteContent } from '@/lib/content'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.website || 'https://demo.local'),
  title: {
    default: siteContent.seoTitle,
    template: `%s | ${siteContent.practiceName}`,
  },
  description: siteContent.seoDescription,
  keywords: siteContent.seoKeywords,
  openGraph: {
    title: siteContent.seoTitle,
    description: siteContent.seoDescription,
    url: siteContent.website,
    siteName: siteContent.practiceName,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteContent.seoTitle,
    description: siteContent.seoDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['MedicalOrganization', 'LocalBusiness'],
  name: "Osei Women's Health",
  description:
    "Board-certified OB/GYN practice in Nampa, Idaho, specializing in prenatal care, labor & delivery, minimally invasive surgery, menopause management, and comprehensive women's health.",
  url: 'https://oseiomenshealth.com',
  telephone: '(208) 555-0351', // [DEMO] verify phone
  email: 'hello@oseiomenshealth.com', // [DEMO] replace with real email
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
    latitude: 43.5738, // [DEMO] replace with real coordinates
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
  medicalSpecialty: {
    '@type': 'MedicalSpecialty',
    name: 'Obstetrics',
  },
  physician: {
    '@type': 'Physician',
    name: 'Dr. Amara N. Osei',
    honorificSuffix: 'MD, FACOG',
  },
  priceRange: '$$$',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300;0,14..32,400;0,14..32,500;0,14..32,600;0,14..32,700;0,14..32,800;1,14..32,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-sans antialiased text-gray-900 bg-white">
        <Navigation />
        <main>{children}</main>
        <Footer />
        {/* Mobile fixed-bottom CTA bar — visible only on small screens */}
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden shadow-2xl">
          <a
            href="/appointments"
            className="flex items-center justify-center w-full py-4 text-white font-bold text-base tracking-wide"
            style={{ backgroundColor: '#581c87' }}
          >
            Book Appointment
          </a>
        </div>
        {/* Spacer so content isn't hidden behind the fixed bar on mobile */}
        <div className="h-14 md:hidden" aria-hidden="true" />
      </body>
    </html>
  )
}
