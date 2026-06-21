'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react'

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    service_needed: '',
    message: ''
  })

  const services = [
    'Programming Project',
    'Research & Analysis',
    'Academic Writing',
    'Major Project',
    'Minor Project',
    'Practical Work',
    'College Event',
    'Other'
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await res.json()

      if (data.success) {
        setSuccess(true)
        setFormData({
          full_name: '',
          email: '',
          phone: '',
          service_needed: '',
          message: ''
        })
      } else {
        setError(data.error || 'Something went wrong')
      }
    } catch (err) {
      setError('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0E17] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's talk! We're here to help you succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-[#111827] rounded-2xl p-8 border border-[#1E293B]">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>

            {success && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center gap-3 text-green-400">
                <CheckCircle className="w-5 h-5" />
                <span>Message sent successfully! We'll get back to you soon.</span>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-[#0A0E17] border border-[#1E293B] rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition"
                  placeholder="Your full name"
                  value={formData.full_name}
                  onChange={(e) => setFormData({...formData, full_name: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-[#0A0E17] border border-[#1E293B] rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-[#0A0E17] border border-[#1E293B] rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Service Needed</label>
                <select
                  className="w-full px-4 py-3 bg-[#0A0E17] border border-[#1E293B] rounded-xl text-white focus:border-blue-500 focus:outline-none transition"
                  value={formData.service_needed}
                  onChange={(e) => setFormData({...formData, service_needed: e.target.value})}
                >
                  <option value="">Select a service...</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Message *</label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#0A0E17] border border-[#1E293B] rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition resize-none"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-[#111827] rounded-2xl p-8 border border-[#1E293B]">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-blue-400 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-400">support@academicreview.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-purple-400 mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-400">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-pink-400 mt-1" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-400">India (Remote)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#111827] rounded-2xl p-8 border border-[#1E293B]">
              <h3 className="text-xl font-bold mb-4">What happens next?</h3>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 text-sm font-bold">1</span>
                  <span>We receive your request</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 text-sm font-bold">2</span>
                  <span>We review and match you with the right expert</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-pink-500/20 rounded-full flex items-center justify-center text-pink-400 text-sm font-bold">3</span>
                  <span>You get a personalized solution within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
