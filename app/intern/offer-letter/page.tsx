'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Send, Loader2, CheckCircle, FileText, Lock } from 'lucide-react'

export default function OfferLetterPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [checking, setChecking] = useState(true)
  const [formData, setFormData] = useState({
    intern_name: '',
    intern_email: '',
    position: '',
    start_date: '',
    end_date: '',
    stipend: '',
    manager_name: '',
    manager_email: '',
    note: ''
  })

  const positions = [
    'Web Developer Intern',
    'Python Developer Intern',
    'AWS/Cloud Intern',
    'Full Stack Developer Intern',
    'Data Science Intern',
    'UI/UX Design Intern'
  ]

  useEffect(() => {
    // Check if user is admin
    fetch('/api/admin/check')
      .then(res => res.json())
      .then(data => {
        setIsAdmin(data.isAdmin)
        setChecking(false)
        if (!data.isAdmin) {
          router.push('/admin/login')
        }
      })
      .catch(() => {
        setIsAdmin(false)
        setChecking(false)
        router.push('/admin/login')
      })
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)

    try {
      const res = await fetch('/api/offer-letter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await res.json()

      if (data.success) {
        setSuccess(true)
        setFormData({
          intern_name: '',
          intern_email: '',
          position: '',
          start_date: '',
          end_date: '',
          stipend: '',
          manager_name: '',
          manager_email: '',
          note: ''
        })
        setTimeout(() => setSuccess(false), 5000)
      } else {
        alert(data.error || 'Something went wrong')
      }
    } catch (error) {
      alert('Failed to generate offer letter. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0A0E17]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!isAdmin) {
    return null
  }

  return (
    <div className="min-h-screen bg-[#0A0E17] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 border border-blue-500/30 rounded-full bg-blue-500/10 text-sm text-blue-400">
            <Lock className="w-4 h-4" />
            Admin Only
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            📄 Intern Offer <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Letter</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Generate and send professional internship offer letters with watermark
          </p>
        </div>

        <div className="bg-[#111827] rounded-2xl p-8 border border-[#1E293B]">
          {success && (
            <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center gap-3 text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span>Offer letter generated and sent successfully!</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Intern Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-[#0A0E17] border border-[#1E293B] rounded-xl text-white focus:border-blue-500 focus:outline-none transition"
                  placeholder="Full name"
                  value={formData.intern_name}
                  onChange={(e) => setFormData({...formData, intern_name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Intern Email *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-[#0A0E17] border border-[#1E293B] rounded-xl text-white focus:border-blue-500 focus:outline-none transition"
                  placeholder="intern@email.com"
                  value={formData.intern_email}
                  onChange={(e) => setFormData({...formData, intern_email: e.target.value})}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Position *</label>
                <select
                  required
                  className="w-full px-4 py-3 bg-[#0A0E17] border border-[#1E293B] rounded-xl text-white focus:border-blue-500 focus:outline-none transition"
                  value={formData.position}
                  onChange={(e) => setFormData({...formData, position: e.target.value})}
                >
                  <option value="">Select position...</option>
                  {positions.map((pos) => (
                    <option key={pos} value={pos}>{pos}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Stipend (₹) *</label>
                <input
                  type="number"
                  required
                  className="w-full px-4 py-3 bg-[#0A0E17] border border-[#1E293B] rounded-xl text-white focus:border-blue-500 focus:outline-none transition"
                  placeholder="25000"
                  value={formData.stipend}
                  onChange={(e) => setFormData({...formData, stipend: e.target.value})}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Start Date *</label>
                <input
                  type="date"
                  required
                  className="w-full px-4 py-3 bg-[#0A0E17] border border-[#1E293B] rounded-xl text-white focus:border-blue-500 focus:outline-none transition"
                  value={formData.start_date}
                  onChange={(e) => setFormData({...formData, start_date: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">End Date *</label>
                <input
                  type="date"
                  required
                  className="w-full px-4 py-3 bg-[#0A0E17] border border-[#1E293B] rounded-xl text-white focus:border-blue-500 focus:outline-none transition"
                  value={formData.end_date}
                  onChange={(e) => setFormData({...formData, end_date: e.target.value})}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Manager Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-[#0A0E17] border border-[#1E293B] rounded-xl text-white focus:border-blue-500 focus:outline-none transition"
                  placeholder="Manager name"
                  value={formData.manager_name}
                  onChange={(e) => setFormData({...formData, manager_name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Manager Email *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-[#0A0E17] border border-[#1E293B] rounded-xl text-white focus:border-blue-500 focus:outline-none transition"
                  placeholder="manager@techlearning.shop"
                  value={formData.manager_email}
                  onChange={(e) => setFormData({...formData, manager_email: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Additional Note</label>
              <textarea
                rows={3}
                className="w-full px-4 py-3 bg-[#0A0E17] border border-[#1E293B] rounded-xl text-white focus:border-blue-500 focus:outline-none transition resize-none"
                placeholder="Special instructions or notes..."
                value={formData.note}
                onChange={(e) => setFormData({...formData, note: e.target.value})}
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
                  Generating...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Generate & Send Offer Letter
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
