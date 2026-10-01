'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, User, Mail, Lock, GraduationCap, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react'

export default function RegisterPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student'
  })

  const passwordsMatch = formData.confirmPassword.length > 0 && formData.password === formData.confirmPassword

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: formData.fullName,
          email: formData.email,
          password: formData.password,
          role: formData.role
        })
      })
      const data = await res.json()
      if (data.success) {
        router.push('/dashboard')
      } else {
        setError(data.error || 'Registration failed')
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0F1115] text-[#EDE6D6] flex items-center justify-center py-16 px-4 relative overflow-hidden" style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E8A33D08_1px,transparent_1px),linear-gradient(to_bottom,#E8A33D08_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute top-6 left-6 w-8 h-8 border-l border-t border-[#E8A33D]/30"></div>
      <div className="absolute top-6 right-6 w-8 h-8 border-r border-t border-[#E8A33D]/30"></div>
      <div className="absolute bottom-6 left-6 w-8 h-8 border-l border-b border-[#E8A33D]/30"></div>
      <div className="absolute bottom-6 right-6 w-8 h-8 border-r border-b border-[#E8A33D]/30"></div>

      <div className="relative z-10 max-w-md w-full">
        <div className="border border-[#E8A33D]/20 bg-black/30 backdrop-blur-sm p-8 md:p-10">
          <div className="text-center mb-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#E8A33D] mb-3">// get started</p>
            <h2 className="text-3xl font-bold tracking-tight">Create Account</h2>
            <p className="mt-2 text-[#9C9A8F] text-sm">Join students getting real projects built</p>
          </div>

          {error && (
            <div className="flex items-center gap-2 mb-5 p-3 bg-red-500/10 border border-red-500/30 text-red-300 text-sm">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              {error}
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-mono text-[#9C9A8F] mb-1.5 uppercase tracking-wide">Full Name</label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A786F]" />
                <input type="text" required className="w-full pl-11 pr-4 py-3 bg-black/30 border border-[#E8A33D]/20 text-[#EDE6D6] placeholder-[#5A5850] focus:outline-none focus:border-[#E8A33D]/60 transition-all" placeholder="Enter your full name" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-[#9C9A8F] mb-1.5 uppercase tracking-wide">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A786F]" />
                <input type="email" required className="w-full pl-11 pr-4 py-3 bg-black/30 border border-[#E8A33D]/20 text-[#EDE6D6] placeholder-[#5A5850] focus:outline-none focus:border-[#E8A33D]/60 transition-all" placeholder="you@example.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-[#9C9A8F] mb-1.5 uppercase tracking-wide">Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A786F]" />
                <input type={showPassword ? 'text' : 'password'} required className="w-full pl-11 pr-11 py-3 bg-black/30 border border-[#E8A33D]/20 text-[#EDE6D6] placeholder-[#5A5850] focus:outline-none focus:border-[#E8A33D]/60 transition-all" placeholder="At least 6 characters" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#7A786F] hover:text-[#EDE6D6]" tabIndex={-1}>
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-[#9C9A8F] mb-1.5 uppercase tracking-wide">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A786F]" />
                <input type={showConfirm ? 'text' : 'password'} required className={`w-full pl-11 pr-11 py-3 bg-black/30 border text-[#EDE6D6] placeholder-[#5A5850] focus:outline-none transition-all ${formData.confirmPassword.length > 0 ? (passwordsMatch ? 'border-emerald-500/50' : 'border-red-500/50') : 'border-[#E8A33D]/20 focus:border-[#E8A33D]/60'}`} placeholder="Confirm your password" value={formData.confirmPassword} onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})} />
                <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#7A786F] hover:text-[#EDE6D6]" tabIndex={-1}>
                  {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {formData.confirmPassword.length > 0 && (
                <p className={`mt-1.5 text-xs flex items-center gap-1 ${passwordsMatch ? 'text-emerald-400' : 'text-red-400'}`}>
                  {passwordsMatch && <CheckCircle2 className="w-3.5 h-3.5" />}
                  {passwordsMatch ? 'Passwords match' : 'Passwords do not match'}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-mono text-[#9C9A8F] mb-1.5 uppercase tracking-wide">I am a</label>
              <div className="relative">
                <GraduationCap className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A786F] pointer-events-none" />
                <select className="w-full pl-11 pr-4 py-3 bg-black/30 border border-[#E8A33D]/20 text-[#EDE6D6] focus:outline-none focus:border-[#E8A33D]/60 transition-all appearance-none cursor-pointer" value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})}>
                  <option value="student" className="bg-black">Student — I need a project built</option>
                  <option value="expert" className="bg-black">Expert — I want to help build</option>
                </select>
              </div>
            </div>

            <button type="submit" disabled={loading} className="w-full mt-2 py-3.5 font-semibold text-[#0F1115] bg-[#E8A33D] hover:bg-[#F0B155] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-[#0F1115]/40 border-t-[#0F1115] rounded-full animate-spin"></span>
                  Creating Account...
                </>
              ) : (
                <>
                  Create Account
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <p className="text-center text-sm text-[#7A786F]">
              Already have an account?{' '}
              <Link href="/login" className="text-[#E8A33D] hover:text-[#F0B155] font-medium">Sign in</Link>
            </p>
          </form>
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        .font-mono { font-family: 'JetBrains Mono', monospace; }
      `}</style>
    </div>
  )
}
