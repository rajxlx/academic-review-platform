'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Mail, Phone, Calendar, RefreshCw, LogOut } from 'lucide-react'

export default function AdminMessages() {
  const router = useRouter()
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchMessages = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/contact')
      const data = await res.json()
      if (data.success) {
        setMessages(data.messages)
      } else {
        setError('Failed to load messages')
      }
    } catch (err) {
      setError('Failed to load messages')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  useEffect(() => {
    fetchMessages()
    const interval = setInterval(fetchMessages, 30000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0A0E17]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0A0E17] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white">📬 Contact Messages</h1>
            <p className="text-gray-400 mt-1">Total: {messages.length} messages</p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={fetchMessages}
              className="flex items-center gap-2 px-4 py-2 bg-[#111827] border border-[#1E293B] rounded-xl text-gray-300 hover:text-white hover:border-blue-500/50 transition-all"
            >
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 hover:bg-red-500/20 transition-all"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-400 mb-6">
            {error}
          </div>
        )}

        {messages.length === 0 ? (
          <div className="bg-[#111827] rounded-2xl p-12 text-center border border-[#1E293B]">
            <div className="text-6xl mb-4">📭</div>
            <p className="text-gray-400 text-lg">No messages yet</p>
            <p className="text-gray-500 text-sm mt-1">Messages from the contact form will appear here</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {messages.map((msg: any) => (
              <div key={msg.id} className="bg-[#111827] rounded-2xl p-6 border border-[#1E293B] hover:border-blue-500/30 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{msg.full_name?.charAt(0) || '?'}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{msg.full_name}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Mail className="w-3 h-3" />
                        {msg.email}
                      </span>
                      {msg.phone && (
                        <span className="flex items-center gap-1">
                          <Phone className="w-3 h-3" />
                          {msg.phone}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {msg.service_needed && (
                  <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-400 mb-2">
                    {msg.service_needed}
                  </div>
                )}

                <p className="text-gray-300 mt-2 leading-relaxed">{msg.message}</p>

                <div className="flex items-center gap-4 mt-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(msg.created_at).toLocaleString()}
                  </span>
                  <span className="px-2 py-1 rounded-full text-xs bg-yellow-500/20 text-yellow-400">
                    {msg.status || 'pending'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
