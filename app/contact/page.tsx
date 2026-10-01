'use client'

import { useState } from 'react'
import { CheckCircle2, AlertCircle, Send, Mail, Phone, User, MessageSquare, Briefcase } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    service_needed: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()

      if (data.success) {
        setStatus('success')
        setFormData({ full_name: '', email: '', phone: '', service_needed: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setErrorMsg(data.error || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setStatus('error')
      setErrorMsg('Could not reach the server. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 relative overflow-hidden">
      {/* Starfield */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `radial-gradient(1px 1px at 20% 30%, white, transparent),
                           radial-gradient(1px 1px at 60% 70%, white, transparent),
                           radial-gradient(1px 1px at 85% 15%, white, transparent),
                           radial-gradient(1px 1px at 10% 80%, white, transparent),
                           radial-gradient(1.5px 1.5px at 40% 45%, white, transparent),
                           radial-gradient(1px 1px at 75% 55%, white, transparent)`,
        backgroundSize: '600px 600px',
        backgroundRepeat: 'repeat',
      }}></div>
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0176DE]/15 rounded-full blur-[140px]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_50%,transparent_100%)]"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-white/[0.04] border border-white/15 text-xs uppercase tracking-[0.2em] text-gray-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0176DE] animate-pulse"></span>
            Get In Touch
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">Contact Us</h1>
          <p className="text-gray-400">Have a project? Let's talk!</p>
        </div>

        {status === 'success' && (
          <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-4 mb-6 animate-fade-in-up">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <p className="text-emerald-300 text-sm">Message sent! We'll get back to you soon.</p>
          </div>
        )}

        {status === 'error' && (
          <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-2xl p-4 mb-6 animate-fade-in-up">
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
            <p className="text-red-300 text-sm">{errorMsg}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-8 space-y-5 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wide">Your Name *</label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  required
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0176DE]/50 focus:border-[#0176DE]/50 transition-all"
                  value={formData.full_name}
                  onChange={(e) => setFormData({...formData, full_name: e.target.value})}
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wide">Email *</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="email"
                  required
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0176DE]/50 focus:border-[#0176DE]/50 transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wide">Phone</label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="tel"
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0176DE]/50 focus:border-[#0176DE]/50 transition-all"
                  placeholder="Optional"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wide">Service Needed</label>
              <div className="relative">
                <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                <select
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#0176DE]/50 focus:border-[#0176DE]/50 transition-all appearance-none cursor-pointer"
                  value={formData.service_needed}
                  onChange={(e) => setFormData({...formData, service_needed: e.target.value})}
                >
                  <option value="" className="bg-black">Select a service (optional)</option>
                  <option value="Programming Projects" className="bg-black">Programming Projects</option>
                  <option value="Research & Analysis" className="bg-black">Research & Analysis</option>
                  <option value="AI & ML Projects" className="bg-black">AI & ML Projects</option>
                  <option value="Database Design" className="bg-black">Database Design</option>
                  <option value="Major Projects" className="bg-black">Major Projects</option>
                  <option value="College Events" className="bg-black">College Events</option>
                  <option value="Other" className="bg-black">Other</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wide">Message *</label>
            <div className="relative">
              <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-500" />
              <textarea
                rows={5}
                required
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0176DE]/50 focus:border-[#0176DE]/50 transition-all resize-none"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full group relative py-4 rounded-xl font-semibold text-white overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] bg-[#0176DE] hover:bg-[#0187FA] shadow-[0_0_0_1px_rgba(1,118,222,0.5),0_8px_30px_-8px_rgba(1,118,222,0.7)] disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
          >
            <span className="relative flex items-center justify-center gap-2">
              {status === 'loading' ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></span>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </span>
          </button>
        </form>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 text-gray-400 text-sm animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#0176DE]" />
            6263216419
          </span>
          <span className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#0176DE]" />
            hr@techlearning.shop
          </span>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both; }
      `}</style>
    </div>
  )
}
