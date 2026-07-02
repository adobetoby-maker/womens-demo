'use client'

// AppointmentFormClient — interactive appointment request form (demo only)
// [DEMO] Connect to Zocdoc, Athena, SimplePractice, or other scheduling system before launch

import { CheckCircle, Phone, Clock, MapPin } from 'lucide-react'

const insuranceOptions = [
  'Blue Cross Blue Shield',
  'Aetna',
  'Cigna',
  'United Healthcare',
  'Medicare',
  'Medicaid',
  'Select Health',
  'Tricare',
  'Other',
]

export function AppointmentFormClient() {
  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* ─── FORM ─────────────────────────────────────────── */}
          <div className="lg:col-span-2">
            {/* [DEMO] This form is for demonstration only — connect to scheduling system before launch */}
            <div className="bg-white rounded-2xl border border-purple-100 shadow-sm p-6 sm:p-8">
              <h2 className="text-xl font-bold mb-6" style={{ color: '#581c87' }}>
                Request an Appointment
              </h2>

              <p className="text-xs text-purple-600 bg-purple-50 rounded-lg px-4 py-2 mb-6 border border-purple-200">
                [DEMO] Connect this form to your scheduling system before launch.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                aria-label="Appointment request form (demonstration)"
                className="space-y-5"
              >
                {/* Name row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      First Name <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="first-name"
                      name="firstName"
                      type="text"
                      required
                      autoComplete="given-name"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Last Name <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="last-name"
                      name="lastName"
                      type="text"
                      required
                      autoComplete="family-name"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                {/* DOB + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="dob"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Date of Birth <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="dob"
                      name="dateOfBirth"
                      type="date"
                      required
                      autoComplete="bday"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                      placeholder="(208) 555-0000"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                    placeholder="jane@example.com"
                  />
                </div>

                {/* Patient type — large radio */}
                <fieldset>
                  <legend className="block text-sm font-medium text-gray-700 mb-2">
                    I am a <span className="text-red-500" aria-hidden="true">*</span>
                  </legend>
                  <div className="grid grid-cols-2 gap-4">
                    <label
                      className="flex items-center gap-3 p-4 rounded-xl border-2 border-purple-300 cursor-pointer"
                      style={{ backgroundColor: '#faf5ff' }}
                    >
                      <input
                        type="radio"
                        name="patientType"
                        value="new"
                        defaultChecked
                        className="accent-purple-700"
                      />
                      <div>
                        <span
                          className="block font-semibold text-sm"
                          style={{ color: '#581c87' }}
                        >
                          New Patient
                        </span>
                        <span className="text-xs text-gray-500">First visit with Dr. Osei</span>
                      </div>
                    </label>
                    <label className="flex items-center gap-3 p-4 rounded-xl border-2 border-gray-200 cursor-pointer hover:border-gray-300 transition-colors">
                      <input
                        type="radio"
                        name="patientType"
                        value="existing"
                        className="accent-purple-700"
                      />
                      <div>
                        <span className="block font-semibold text-sm text-gray-700">
                          Existing Patient
                        </span>
                        <span className="text-xs text-gray-500">Follow-up or return visit</span>
                      </div>
                    </label>
                  </div>
                </fieldset>

                {/* Insurance */}
                <div>
                  <label
                    htmlFor="insurance"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Insurance Carrier
                  </label>
                  <select
                    id="insurance"
                    name="insurance"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm bg-white focus:outline-none focus:ring-2 focus:border-transparent"
                  >
                    <option value="">Select insurance...</option>
                    {insuranceOptions.map((ins) => (
                      <option key={ins} value={ins}>
                        {ins}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Reason for visit */}
                <div>
                  <label
                    htmlFor="reason"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Reason for Visit <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    required
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm resize-none focus:outline-none focus:ring-2 focus:border-transparent"
                    placeholder="Please describe the reason for your visit or any symptoms you are experiencing..."
                  />
                </div>

                {/* Preferred date */}
                <div>
                  <label
                    htmlFor="preferred-date"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Preferred Appointment Date
                  </label>
                  <input
                    id="preferred-date"
                    name="preferredDate"
                    type="date"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl text-base font-bold text-white hover:opacity-90 transition-opacity cursor-pointer shadow-md"
                  style={{ backgroundColor: '#581c87' }}
                >
                  Request Appointment
                </button>

                <p className="text-xs text-gray-400 text-center">
                  {/* [DEMO] add real privacy policy URL */}
                  By submitting this form, you agree to our{' '}
                  <a href="#" className="underline hover:text-gray-600">
                    Privacy Policy
                  </a>
                  . This form is for appointment requests only — not for medical emergencies.
                </p>
              </form>
            </div>
          </div>

          {/* ─── SIDEBAR ──────────────────────────────────────── */}
          <aside className="space-y-5">

            {/* Prefer to call */}
            <div className="bg-white rounded-2xl border border-purple-100 p-6 shadow-sm">
              <h3 className="font-bold mb-3 text-gray-900">Prefer to Call?</h3>
              <a
                href="tel:2085550351"
                className="flex items-center gap-2 text-base font-semibold hover:underline"
                style={{ color: '#9333ea' }}
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                (208) 555-0351
              </a>
              <p className="text-xs text-gray-500 mt-2">
                Mon–Fri 8 AM–5 PM, Sat 9 AM–12 PM.
              </p>
            </div>

            {/* Office hours */}
            <div className="bg-white rounded-2xl border border-purple-100 p-6 shadow-sm">
              <h3 className="font-bold mb-3 text-gray-900 flex items-center gap-2">
                <Clock className="w-4 h-4" style={{ color: '#581c87' }} aria-hidden="true" />
                Office Hours
              </h3>
              {/* [DEMO] verify hours with practice before launch */}
              <table className="w-full text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1 pr-4">Monday – Friday</td>
                    <td className="py-1 font-medium">8:00 AM – 5:00 PM</td>
                  </tr>
                  <tr>
                    <td className="py-1 pr-4">Saturday</td>
                    <td className="py-1 font-medium">9:00 AM – 12:00 PM</td>
                  </tr>
                  <tr>
                    <td className="py-1 pr-4">Sunday</td>
                    <td className="py-1 font-medium text-red-500">Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Location */}
            <div className="bg-white rounded-2xl border border-purple-100 p-6 shadow-sm">
              <h3 className="font-bold mb-3 text-gray-900 flex items-center gap-2">
                <MapPin className="w-4 h-4" style={{ color: '#581c87' }} aria-hidden="true" />
                Location
              </h3>
              {/* [DEMO] replace with Google Maps embed */}
              <div
                className="rounded-xl overflow-hidden mb-3 bg-purple-50 h-32 flex items-center justify-center border border-purple-100"
                aria-label="Map placeholder — replace with Google Maps embed"
                role="img"
              >
                <p className="text-xs text-purple-400 text-center p-2">
                  [DEMO] Replace with Google Maps embed
                </p>
              </div>
              <address className="text-sm text-gray-600 not-italic">
                3090 N Maple Grove Rd
                <br />
                Nampa, ID 83687
              </address>
            </div>

            {/* What to bring */}
            <div className="rounded-2xl p-6" style={{ backgroundColor: '#faf5ff' }}>
              <h3 className="font-bold mb-3" style={{ color: '#581c87' }}>
                What to Bring
              </h3>
              <ul className="text-sm text-gray-700 space-y-1.5">
                {[
                  'Insurance card & photo ID',
                  'List of current medications',
                  'Date of last menstrual period',
                  'Prior pregnancy records (if applicable)',
                  'List of questions for Dr. Osei',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle
                      className="w-4 h-4 flex-shrink-0 mt-0.5"
                      style={{ color: '#9333ea' }}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
