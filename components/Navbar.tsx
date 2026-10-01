'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0E17]/80 backdrop-blur-xl border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-white">
            TechLearning
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
            <Link href="/contact" className="text-gray-300 hover:text-white">Our Services</Link>
            <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
            <Link href="/faq" className="text-gray-300 hover:text-white">FAQ</Link>
            <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
            <Link href="/register">
              <button className="px-5 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700">
                Get Started
              </button>
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-300">
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0A0E17] border-t border-gray-800 py-4 px-4">
          <div className="flex flex-col gap-3">
            <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
            <Link href="/contact" className="text-gray-300 hover:text-white">Our Services</Link>
            <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
            <Link href="/faq" className="text-gray-300 hover:text-white">FAQ</Link>
            <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
            <Link href="/register">
              <button className="w-full py-2 bg-blue-600 rounded-lg text-white">Get Started</button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
