// FILE 18: components/Footer.tsx — Dark footer for Osei Women's Health

import Link from 'next/link'
import { MapPin, Phone, Clock, Facebook, Instagram, Twitter } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Dr. Osei', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Conditions We Treat', href: '/conditions' },
  { label: 'Appointments', href: '/appointments' },
  { label: 'Patient Resources', href: '/patient-resources' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Three-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">

          {/* Column 1: Practice info + tagline */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs"
                style={{ backgroundColor: '#9333ea' }}
                aria-hidden="true"
              >
                OW
              </div>
              <span className="font-bold text-base text-white">Osei Women&apos;s Health</span>
            </div>
            <p className="text-gray-400 text-sm mb-4 italic">
              &ldquo;Compassionate Women&apos;s Care, Every Stage of Life.&rdquo;
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-purple-400" aria-hidden="true" />
                <span>
                  3090 N Maple Grove Rd
                  <br />
                  Nampa, ID 83687
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-purple-400" aria-hidden="true" />
                <a
                  href="tel:2085550351"
                  className="hover:text-white transition-colors duration-150"
                >
                  (208) 555-0351
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-purple-400" aria-hidden="true" />
                <span>
                  Mon–Fri: 8:00 AM – 5:00 PM
                  <br />
                  {/* [DEMO] verify Saturday hours */}
                  Sat: 9:00 AM – 12:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Hours summary + social media */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Office Hours
            </h3>
            <table className="text-sm text-gray-400 w-full mb-6">
              <tbody>
                {/* [DEMO] verify all office hours with practice */}
                <tr>
                  <td className="py-1 pr-4">Monday – Friday</td>
                  <td className="py-1">8:00 AM – 5:00 PM</td>
                </tr>
                <tr>
                  <td className="py-1 pr-4">Saturday</td>
                  <td className="py-1">9:00 AM – 12:00 PM</td>
                </tr>
                <tr>
                  <td className="py-1 pr-4">Sunday</td>
                  <td className="py-1">Closed</td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-3">
              Follow Us
            </h3>
            {/* [DEMO] replace hrefs with real social media URLs */}
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook — Osei Women's Health (DEMO)"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-purple-600 transition-colors duration-150"
              >
                <Facebook className="w-4 h-4 text-white" aria-hidden="true" />
              </a>
              <a
                href="#"
                aria-label="Instagram — Osei Women's Health (DEMO)"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-purple-600 transition-colors duration-150"
              >
                <Instagram className="w-4 h-4 text-white" aria-hidden="true" />
              </a>
              <a
                href="#"
                aria-label="Twitter/X — Osei Women's Health (DEMO)"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-purple-600 transition-colors duration-150"
              >
                <Twitter className="w-4 h-4 text-white" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>
            &copy; {currentYear} Osei Women&apos;s Health. All rights reserved.
          </p>
          <p className="flex flex-wrap justify-center gap-x-3 gap-y-1">
            <span>ADA Compliant</span>
            <span>&middot;</span>
            {/* [DEMO] replace # with real privacy policy URL */}
            <a href="#" className="hover:text-gray-300 transition-colors duration-150">
              Privacy Policy
            </a>
            <span>&middot;</span>
            {/* [DEMO] replace # with real HIPAA notice URL */}
            <a href="#" className="hover:text-gray-300 transition-colors duration-150">
              HIPAA Notice
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
