'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const services = [
    { name: 'Programming Projects', icon: '💻' },
    { name: 'Research & Analysis', icon: '📊' },
    { name: 'Academic Writing', icon: '📝' },
    { name: 'Major Projects', icon: '🎯' },
    { name: 'Minor Projects', icon: '📐' },
    { name: 'Practical Work', icon: '🔬' },
    { name: 'College Events', icon: '🎪' },
    { name: 'AI & ML Projects', icon: '🧠' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0E17]/80 backdrop-blur-xl border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Academic Review
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className="text-gray-300 hover:text-white transition-colors text-sm font-medium flex items-center gap-1">
                Our Services
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-[#111827] rounded-xl border border-[#1E293B] shadow-xl py-2 z-50">
                  {services.map((service, i) => (
                    <Link 
                      key={i}
                      href="/contact"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:bg-blue-500/10 hover:text-white transition-colors"
                    >
                      <span>{service.icon}</span>
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              About
            </Link>
            <Link href="/faq" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              FAQ
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Contact
            </Link>
            
            <Link href="/register">
              <button className="px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all hover:scale-105">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-300 hover:text-white">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A0E17] border-b border-[#1E293B] py-4 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col gap-2 px-4">
            <Link href="/" className="text-gray-300 hover:text-white py-2 text-sm font-medium">Home</Link>
            
            <div className="border-t border-[#1E293B] pt-2 mt-1">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Our Services</p>
              {services.map((service, i) => (
                <Link 
                  key={i}
                  href="/contact"
                  className="flex items-center gap-2 text-gray-300 hover:text-white py-1.5 text-sm"
                >
                  <span>{service.icon}</span>
                  {service.name}
                </Link>
              ))}
            </div>

            <Link href="/about" className="text-gray-300 hover:text-white py-2 text-sm font-medium">About</Link>
            <Link href="/faq" className="text-gray-300 hover:text-white py-2 text-sm font-medium">FAQ</Link>
            <Link href="/contact" className="text-gray-300 hover:text-white py-2 text-sm font-medium">Contact</Link>
            
            <div className="border-t border-[#1E293B] pt-2 mt-1">
              <Link href="/register">
                <button className="w-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:shadow-lg">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}


