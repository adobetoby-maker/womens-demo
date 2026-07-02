// FILE 17: components/Navigation.tsx — Sticky navigation for Osei Women's Health

'use client'
import { siteContent } from '@/lib/content'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Conditions', href: '/conditions' },
  { label: 'Appointments', href: '/appointments' },
  { label: 'Contact', href: '/contact' },
  { label: 'Resources', href: '/patient-resources' },
  { label: 'Blog', href: '/blog' },
]

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav
      className="sticky top-0 z-50 bg-white shadow-sm border-b border-purple-100"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo / Practice Name */}
          <Link
            href="/"
            className="flex items-center gap-2 flex-shrink-0"
            aria-label={`${siteContent.practiceName} — Home`}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
              style={{ backgroundColor: '#581c87' }}
              aria-hidden="true"
            >
              OW
            </div>
            <span className="font-bold text-base sm:text-lg leading-tight" style={{ color: '#581c87' }}>
              {siteContent.practiceName}
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-purple-700 transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop right: phone + book button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:2085550351"
              className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-purple-700 transition-colors duration-150"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              (208) 555-0351
            </a>
            <Link
              href="/appointments"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold text-white cursor-pointer hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#581c87' }}
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-purple-50 transition-colors duration-150 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-purple-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-800 rounded-lg transition-colors duration-150"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 pb-2 border-t border-gray-100 space-y-2">
              <a
                href="tel:2085550351"
                className="flex items-center gap-2 px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-purple-50 rounded-lg transition-colors duration-150"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                (208) 555-0351
              </a>
              <Link
                href="/appointments"
                className="block w-full text-center px-4 py-3 rounded-lg text-base font-semibold text-white cursor-pointer hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#581c87' }}
                onClick={() => setMobileOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
