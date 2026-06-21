import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Academic Review Platform | India\'s Largest Academic Support Engine',
  description: 'Get expert help for assessments, practicals, major projects, and college events. #BuildTheFuture',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#0A0E17]`}>
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  )
}
