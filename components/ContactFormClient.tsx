'use client'

// ContactFormClient — contact form for Grace Women's Health
// [DEMO] Connect to Resend, SendGrid, Formspree, or similar before launch

export function ContactFormClient() {
  return (
    <div className="bg-white rounded-2xl border border-purple-100 shadow-sm p-6 sm:p-8">
      <h2 className="text-xl font-bold mb-2 text-gray-900">Send Us a Message</h2>
      <p className="text-sm text-gray-500 mb-6">
        We typically respond within one business day. For urgent matters, please call.
      </p>

      {/* [DEMO] Connect form to email delivery (Resend, SendGrid, Formspree) before launch */}
      <p className="text-xs text-purple-600 bg-purple-50 rounded-lg px-4 py-2 mb-6 border border-purple-200">
        [DEMO] Connect this form to your email service before launch.
      </p>

      <form
        onSubmit={(e) => e.preventDefault()}
        aria-label="Contact form (demonstration)"
        className="space-y-4"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="contact-first"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              First Name <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <input
              id="contact-first"
              name="firstName"
              type="text"
              required
              autoComplete="given-name"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2"
              placeholder="Jane"
            />
          </div>
          <div>
            <label
              htmlFor="contact-last"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Last Name <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <input
              id="contact-last"
              name="lastName"
              type="text"
              required
              autoComplete="family-name"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2"
              placeholder="Smith"
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2"
            placeholder="(208) 555-0000"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2"
            placeholder="jane@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm resize-none focus:outline-none focus:ring-2"
            placeholder="How can we help you?"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3.5 px-6 rounded-xl text-base font-bold text-white hover:opacity-90 transition-opacity cursor-pointer"
          style={{ backgroundColor: '#581c87' }}
        >
          Send Message
        </button>

        <p className="text-xs text-gray-400">
          Do not include protected health information (PHI) in this form.{' '}
          {/* [DEMO] add real privacy policy link */}
          See our{' '}
          <a href="#" className="underline hover:text-gray-600">
            Privacy Policy
          </a>
          .
        </p>
      </form>
    </div>
  )
}
