'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Package, CheckCircle2, Wallet, Star, Plus, FileText, MessageSquare, ArrowRight, LogOut } from 'lucide-react'

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/me')
      .then(res => res.json())
      .then(data => {
        if (data.success) setUser(data.user)
        else router.push('/login')
      })
      .finally(() => setLoading(false))
  }, [router])

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' })
    router.push('/login')
  }

  const stats = [
    { icon: Package, value: '0', label: 'Active Orders', color: '#E8A33D' },
    { icon: CheckCircle2, value: '0', label: 'Completed', color: '#5B8C7B' },
    { icon: Wallet, value: '₹0', label: 'Total Spent', color: '#E8A33D' },
    { icon: Star, value: '—', label: 'Rating', color: '#5B8C7B' },
  ]

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0F1115] flex items-center justify-center">
        <div className="w-10 h-10 border-2 border-[#E8A33D]/30 border-t-[#E8A33D] rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0F1115] text-[#EDE6D6] py-12 px-4 relative" style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E8A33D06_1px,transparent_1px),linear-gradient(to_bottom,#E8A33D06_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#E8A33D] mb-2">// dashboard</p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              {user ? `Welcome, ${user.full_name}` : 'Welcome back'}
            </h1>
          </div>
          <div className="flex gap-3">
            <Link href="/contact">
              <button className="px-6 py-3 font-semibold text-[#0F1115] bg-[#E8A33D] hover:bg-[#F0B155] transition-all flex items-center gap-2">
                <Plus className="w-4 h-4" />
                New Order
              </button>
            </Link>
            <button onClick={handleLogout} className="px-4 py-3 border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-all flex items-center gap-2">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="border border-[#E8A33D]/15 p-6 text-center hover:border-[#E8A33D]/40 transition-all">
              <div className="flex justify-center mb-3">
                <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
              </div>
              <p className="text-2xl md:text-3xl font-bold tabular-nums">{stat.value}</p>
              <p className="text-xs md:text-sm text-[#7A786F] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-[#E8A33D]/15 p-6 hover:border-[#E8A33D]/40 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-5 h-5 text-[#E8A33D]" />
              <h3 className="text-lg font-semibold">My Orders</h3>
            </div>
            <p className="text-[#9C9A8F] text-sm mb-4">You don't have any orders yet — send a project to get started.</p>
            <Link href="/contact" className="text-sm font-mono text-[#E8A33D] hover:text-[#F0B155] flex items-center gap-1">
              Send a project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="border border-[#E8A33D]/15 p-6 hover:border-[#E8A33D]/40 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <MessageSquare className="w-5 h-5 text-[#E8A33D]" />
              <h3 className="text-lg font-semibold">Support</h3>
            </div>
            <p className="text-[#9C9A8F] text-sm mb-4">Need help? Reach out any time.</p>
            <Link href="/contact" className="text-sm font-mono text-[#E8A33D] hover:text-[#F0B155] flex items-center gap-1">
              Contact us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
