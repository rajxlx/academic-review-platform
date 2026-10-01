'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Lock, ArrowRight, AlertCircle } from 'lucide-react'

export default function AdminLoginPage() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      })
      const data = await res.json()
      if (data.success) {
        router.push('/admin')
      } else {
        setError(data.error || 'Invalid password')
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
      <div className="relative z-10 max-w-md w-full">
        <div className="border border-[#E8A33D]/20 bg-black/30 backdrop-blur-sm p-8 md:p-10">
          <div className="text-center mb-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#E8A33D] mb-3">// admin portal</p>
            <h2 className="text-3xl font-bold tracking-tight">Admin Access</h2>
            <p className="mt-2 text-[#9C9A8F] text-sm">Enter password to manage platform</p>
          </div>

          {error && (
            <div className="flex items-center gap-2 mb-5 p-3 bg-red-500/10 border border-red-500/30 text-red-300 text-sm">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              {error}
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-mono text-[#9C9A8F] mb-1.5 uppercase tracking-wide">Admin Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A786F]" />
                <input
                  type="password"
                  required
                  className="w-full pl-11 pr-4 py-3 bg-black/30 border border-[#E8A33D]/20 text-[#EDE6D6] placeholder-[#5A5850] focus:outline-none focus:border-[#E8A33D]/60 transition-all"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button type="submit" disabled={loading} className="w-full mt-2 py-3.5 font-semibold text-[#0F1115] bg-[#E8A33D] hover:bg-[#F0B155] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-[#0F1115]/40 border-t-[#0F1115] rounded-full animate-spin"></span>
                  Authenticating...
                </>
              ) : (
                <>
                  Enter Admin Dashboard
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
