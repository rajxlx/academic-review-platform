'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ArrowRight, Award, Users, Briefcase, Zap, Code, Database, Brain, Cpu, Globe, MessageSquare, Wrench, PackageCheck, IndianRupee } from 'lucide-react'

const BUILD_LOG = [
  '$ receiving project brief...',
  '$ scoping requirements...',
  '$ writing code by hand...',
  '$ testing build...',
  '$ shipping complete_project.zip ✓',
]

function TypedLog() {
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (done) return
    const current = BUILD_LOG[lineIndex]
    if (charIndex < current.length) {
      const t = setTimeout(() => setCharIndex(charIndex + 1), 28)
      return () => clearTimeout(t)
    } else if (lineIndex < BUILD_LOG.length - 1) {
      const t = setTimeout(() => { setLineIndex(lineIndex + 1); setCharIndex(0) }, 500)
      return () => clearTimeout(t)
    } else {
      setDone(true)
    }
  }, [charIndex, lineIndex, done])

  return (
    <div className="font-mono text-sm text-left">
      {BUILD_LOG.slice(0, lineIndex).map((l, i) => (
        <p key={i} className="text-[#5B8C7B]">{l}</p>
      ))}
      <p className="text-[#E8A33D]">
        {BUILD_LOG[lineIndex].slice(0, charIndex)}
        <span className="inline-block w-2 h-4 bg-[#E8A33D] ml-0.5 align-middle animate-blink"></span>
      </p>
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F1115] text-[#EDE6D6] overflow-x-hidden font-sans selection:bg-[#E8A33D]/30" style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>

      {/* ============================================
      HERO
      ============================================ */}
      <section className="relative min-h-[100vh] flex items-center justify-center px-4 overflow-hidden">
        {/* Blueprint grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#E8A33D08_1px,transparent_1px),linear-gradient(to_bottom,#E8A33D08_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#E8A33D0d_1px,transparent_1px),linear-gradient(to_bottom,#E8A33D0d_1px,transparent_1px)] bg-[size:200px_200px]"></div>

        {/* Corner tick marks — drafting-sheet feel */}
        <div className="absolute top-6 left-6 w-8 h-8 border-l border-t border-[#E8A33D]/30"></div>
        <div className="absolute top-6 right-6 w-8 h-8 border-r border-t border-[#E8A33D]/30"></div>
        <div className="absolute bottom-6 left-6 w-8 h-8 border-l border-b border-[#E8A33D]/30"></div>
        <div className="absolute bottom-6 right-6 w-8 h-8 border-r border-b border-[#E8A33D]/30"></div>

        {/* Grain */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxmaWx0ZXIgaWQ9Im4iPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjkiIG51bU9jdGF2ZXM9IjQiIC8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI24pIiAvPjwvc3ZnPg==')]"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-[#E8A33D]/30 text-xs font-mono uppercase tracking-[0.15em] text-[#E8A33D]">
            [ open for 2026-27 intake ]
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.05] tracking-tight">
            <span className="text-[#EDE6D6]">Got a project?</span>
            <span className="block mt-2 text-[#E8A33D]">I'll build it, by hand.</span>
          </h1>

          <p className="text-lg md:text-xl text-[#9C9A8F] max-w-xl mx-auto mb-10 leading-relaxed">
            Send me your project — college assignment, final year build, or a real product idea.
            I write it myself and hand you a complete, working infrastructure.
          </p>

          {/* Terminal signature element */}
          <div className="max-w-md mx-auto mb-10 rounded-lg border border-[#E8A33D]/20 bg-black/40 backdrop-blur-sm px-5 py-4 text-left">
            <div className="flex gap-1.5 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E8A33D]/40"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#5B8C7B]/40"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#9C9A8F]/40"></span>
            </div>
            <TypedLog />
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <button className="group px-8 py-4 font-semibold text-[#0F1115] bg-[#E8A33D] hover:bg-[#F0B155] transition-all hover:-translate-y-0.5 flex items-center gap-2">
                Tell Me About Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="#how-it-works">
              <button className="px-8 py-4 font-semibold text-[#EDE6D6] border border-[#EDE6D6]/25 hover:border-[#EDE6D6]/50 hover:bg-white/[0.03] transition-all">
                How It Works
              </button>
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto font-mono">
            {[
              { icon: Users, value: '5000+', label: 'students helped' },
              { icon: Briefcase, value: '10,000+', label: 'projects built' },
              { icon: Award, value: '98%', label: 'satisfaction' },
              { icon: Zap, value: '100+', label: 'experts involved' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-2"><stat.icon className="w-5 h-5 text-[#E8A33D]" /></div>
                <p className="text-2xl font-bold text-[#EDE6D6]">{stat.value}</p>
                <p className="text-[10px] text-[#7A786F] mt-1 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
      HOW IT WORKS — circuit-trace layout
      ============================================ */}
      <section id="how-it-works" className="py-24 px-4 relative border-t border-[#E8A33D]/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#E8A33D] mb-3">// process</p>
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Simple, direct, no middlemen</h2>
            <p className="text-[#9C9A8F] max-w-xl mx-auto">You talk to me directly. I build your project myself. You get something that actually works.</p>
          </div>

          <div className="relative grid md:grid-cols-4 gap-6">
            {/* Dashed circuit trace connecting the steps */}
            <div className="hidden md:block absolute top-[52px] left-[12.5%] right-[12.5%] border-t-2 border-dashed border-[#E8A33D]/25"></div>

            {[
              { icon: MessageSquare, tag: 'STEP/01', title: 'You Contact Me', desc: 'Tell me what you need — college project, final year submission, or a real idea.' },
              { icon: Wrench, tag: 'STEP/02', title: 'I Build It', desc: 'I personally write your project — real code, real infrastructure, not a template.' },
              { icon: PackageCheck, tag: 'STEP/03', title: 'Complete Handover', desc: 'Fully working, ready to present — with an explanation of how it works.' },
              { icon: IndianRupee, tag: 'STEP/04', title: 'Pay When Done', desc: 'Clear pricing agreed up front. No hidden costs, no surprises.' },
            ].map((item) => (
              <div key={item.title} className="relative">
                <div className="w-14 h-14 border-2 border-[#E8A33D]/40 bg-[#0F1115] flex items-center justify-center mb-4 mx-auto relative z-10">
                  <item.icon className="w-6 h-6 text-[#E8A33D]" />
                </div>
                <p className="font-mono text-[11px] text-[#5B8C7B] text-center mb-1">{item.tag}</p>
                <h3 className="text-lg font-semibold text-center mb-2">{item.title}</h3>
                <p className="text-[#9C9A8F] text-sm text-center leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link href="/contact">
              <button className="group px-8 py-3.5 font-semibold text-[#0F1115] bg-[#E8A33D] hover:bg-[#F0B155] transition-all hover:-translate-y-0.5 inline-flex items-center gap-2">
                Start With Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
      ABOUT
      ============================================ */}
      <section className="py-24 px-4 relative border-t border-[#E8A33D]/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#E8A33D] mb-3">// why me</p>
              <h2 className="text-4xl font-bold mb-5 tracking-tight">
                Not a template shop. <span className="text-[#E8A33D]">A real build.</span>
              </h2>
              <p className="text-[#9C9A8F] text-lg leading-relaxed">
                Most "project help" sites hand you copy-pasted code that breaks the moment you're
                asked a question about it. I build every project properly, and help connect students
                to internship opportunities along the way.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-5 border border-[#E8A33D]/15 hover:border-[#E8A33D]/40 transition-all">
                  <Wrench className="w-5 h-5 text-[#E8A33D] mb-2" />
                  <p className="font-semibold">Built by me</p>
                  <p className="text-sm text-[#7A786F]">Not outsourced</p>
                </div>
                <div className="p-5 border border-[#E8A33D]/15 hover:border-[#E8A33D]/40 transition-all">
                  <Briefcase className="w-5 h-5 text-[#E8A33D] mb-2" />
                  <p className="font-semibold">Internship path</p>
                  <p className="text-sm text-[#7A786F]">Beyond the project</p>
                </div>
              </div>
            </div>

            <div className="relative border border-[#E8A33D]/20 group overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=80"
                alt="Building a project"
                width={700}
                height={580}
                className="w-full h-full object-cover grayscale-[60%] transition-all duration-700 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
      WHAT I BUILD
      ============================================ */}
      <section className="py-24 px-4 relative border-t border-[#E8A33D]/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#E8A33D] mb-3">// scope</p>
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Whatever your project needs</h2>
            <p className="text-[#9C9A8F]">From a single assignment to a full product</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Code, title: 'Programming Projects', desc: 'Web, mobile, desktop — built from scratch', img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80' },
              { icon: Database, title: 'Research & Analysis', desc: 'Papers, case studies, data analysis', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80' },
              { icon: Brain, title: 'AI & ML Projects', desc: 'Real models, not black-box templates', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80' },
              { icon: Cpu, title: 'Database Design', desc: 'SQL, NoSQL, full system architecture', img: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=900&q=80' },
              { icon: Award, title: 'Final-Year Projects', desc: 'Complete capstone builds', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80' },
              { icon: Globe, title: 'College Events', desc: 'Hackathon & competition support', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80' },
            ].map((s) => (
              <Link href="/contact" key={s.title}>
                <div className="group relative border border-[#E8A33D]/15 hover:border-[#E8A33D]/50 transition-all duration-300 cursor-pointer overflow-hidden">
                  <div className="relative h-40 overflow-hidden">
                    <Image src={s.img} alt={s.title} fill className="object-cover grayscale-[55%] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-[#0F1115]/20 to-transparent"></div>
                  </div>
                  <div className="p-6 pt-4">
                    <div className="w-11 h-11 border border-[#E8A33D]/40 flex items-center justify-center mb-3 -mt-12 relative z-10 bg-[#0F1115]">
                      <s.icon className="w-5 h-5 text-[#E8A33D]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                    <p className="text-[#9C9A8F] text-sm">{s.desc}</p>
                    <div className="mt-4 text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity text-[#E8A33D]">
                      → discuss this
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
      CTA
      ============================================ */}
      <section className="py-28 px-4 relative border-t border-[#E8A33D]/10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#E8A33D] mb-4">// let's talk</p>
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Have a project in mind?</h2>
          <p className="text-[#9C9A8F] text-lg mb-9 max-w-xl mx-auto">
            Send me the details — deadline, requirements, whatever you've got. I'll tell you honestly
            what it takes and what it'll cost.
          </p>
          <Link href="/contact">
            <button className="group px-10 py-4 font-semibold text-[#0F1115] bg-[#E8A33D] hover:bg-[#F0B155] transition-all hover:-translate-y-0.5 inline-flex items-center gap-2">
              Contact Me Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </section>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        @keyframes blink { 0%,49% { opacity: 1; } 50%,100% { opacity: 0; } }
        .animate-blink { animation: blink 1s step-end infinite; }
      `}</style>
    </div>
  )
}
