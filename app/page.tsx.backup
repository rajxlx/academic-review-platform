'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Users, Briefcase, Award, Zap, ChevronRight, Star,
  Code, GitBranch, Target, Rocket, Crown, TrendingUp,
  ArrowRight, Calendar, Clock, CheckCircle, Play,
  Quote, GraduationCap, Trophy, Sparkles, Brain,
  Cpu, Database, Shield, Layers, Lightbulb, GitPullRequest
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  const stats = [
    { icon: Users, label: 'Students Helped', value: '5000+' },
    { icon: Briefcase, label: 'Projects Completed', value: '10,000+' },
    { icon: Award, label: 'Satisfaction Rate', value: '98%' },
    { icon: Zap, label: 'Expert Available', value: '100+' }
  ];

  const features = [
    { icon: Brain, title: 'AI-Powered Matching', desc: 'Get matched with the perfect expert for your project using our intelligent algorithm.' },
    { icon: Code, title: 'Code Reviews & Support', desc: 'Expert code reviews, debugging help, and complete project guidance.' },
    { icon: Layers, title: 'End-to-End Solutions', desc: 'From ideation to delivery - we handle everything for your academic success.' },
    { icon: Shield, title: 'Quality Assured', desc: 'All work is 100% original with plagiarism checks and quality guarantees.' },
  ];

  const journey = [
    { icon: GitBranch, title: 'Submit Your Request', desc: 'Tell us about your project, deadline, and requirements.' },
    { icon: GitPullRequest, title: 'Get Matched', desc: 'Our AI matches you with the perfect expert for your needs.' },
    { icon: Code, title: 'Work Together', desc: 'Collaborate with your expert to build your project step by step.' },
    { icon: Rocket, title: 'Deliver & Launch', desc: 'Get your complete project delivered on time with full support.' },
  ];

  const testimonials = [
    { name: 'Rahul Singh', role: 'B.Tech Student', text: 'This platform helped me complete my major project with top grades! The experts are amazing.', rating: 5 },
    { name: 'Priya Sharma', role: 'M.Tech Student', text: 'Got my research paper published with expert guidance. Highly recommend!', rating: 5 },
    { name: 'Amit Kumar', role: 'College Student', text: 'The best platform for academic support. My practical assignments were perfect!', rating: 5 },
  ];

  const services = [
    { icon: Code, title: 'Programming Projects', desc: 'Web, mobile, desktop apps & more', color: 'from-blue-500 to-blue-600' },
    { icon: Brain, title: 'Research & Analysis', desc: 'Papers, case studies, data analysis', color: 'from-purple-500 to-purple-600' },
    { icon: Cpu, title: 'AI & ML Projects', desc: 'Machine learning, AI solutions', color: 'from-pink-500 to-pink-600' },
    { icon: Database, title: 'Database Design', desc: 'SQL, NoSQL, system design', color: 'from-indigo-500 to-indigo-600' },
    { icon: Trophy, title: 'Major Projects', desc: 'Final year, capstone projects', color: 'from-orange-500 to-orange-600' },
    { icon: Lightbulb, title: 'College Events', desc: 'Hackathons, competitions, workshops', color: 'from-green-500 to-green-600' },
  ];

  return (
    <div className="min-h-screen bg-[#0A0E17] text-white overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden border-b border-[#1E293B]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyQzNBNUIiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2MkgyNHYtMmgxMnptMCAydjJoLTEydi0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        
        <div className="absolute top-[-30%] left-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-30%] right-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-blue-500/30 rounded-full bg-blue-500/10 text-sm text-blue-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Registrations Open for 2026-27
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              India's Largest
              <span className="block mt-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Academic Support
                <span className="text-white font-mono text-3xl md:text-5xl ml-2">/</span>
                <span className="text-white">Engine</span>
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Get expert help for assessments, practicals, major projects, and college events.
              <span className="text-blue-400 font-medium block sm:inline"> #BuildTheFuture</span>
            </p>

            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link href="/register">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started Free
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-4 border border-gray-600 rounded-xl font-semibold text-gray-300 hover:bg-white/5 hover:border-gray-400 transition-all duration-300">
                  Our Services
                </button>
              </Link>
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            >
              {stats.map((stat, i) => (
                <motion.div key={i} variants={fadeInUp} className="text-center">
                  <stat.icon className="w-8 h-8 mx-auto text-blue-400 mb-2" />
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-gray-500 rotate-90" />
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 px-4 border-b border-[#1E293B]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold">System Status: <span className="text-green-400">Online</span></h2>
            <p className="text-gray-400 mt-4 text-lg">The AI era is no longer a future prediction. It is the baseline reality.</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, i) => (
              <motion.div key={i} variants={fadeInUp} className="group relative bg-[#111827] rounded-2xl p-6 border border-[#1E293B] hover:border-blue-500/50 transition-all hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* JOURNEY SECTION */}
      <section className="py-20 px-4 border-b border-[#1E293B]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold">Your Journey to <span className="text-purple-400">Success</span></h2>
            <p className="text-gray-400 mt-4 text-lg">You don't join a track. You forge your own path.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {journey.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-[#111827] rounded-2xl p-6 border border-[#1E293B] text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/20">
                    <step.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="text-2xl font-mono text-gray-700 mb-2">0{i+1}</div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400">{step.desc}</p>
                </div>
                {i < journey.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-700" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 px-4 border-b border-[#1E293B]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold">Our <span className="text-pink-400">Services</span></h2>
            <p className="text-gray-400 mt-4 text-lg">Click any service to get started → Contact us</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Link href="/contact" key={i}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="group bg-[#111827] rounded-2xl p-6 border border-[#1E293B] hover:border-purple-500/50 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer"
                >
                  <div className={"w-12 h-12 bg-gradient-to-br " + service.color + " rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-blue-400 to-purple-400 transition-all">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-400">{service.desc}</p>
                  <div className="mt-4 flex items-center text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Contact us →
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 px-4 border-b border-[#1E293B]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold">Hear from our <span className="text-yellow-400">winners</span></h2>
            <p className="text-gray-400 mt-4 text-lg">Real students. Real stories. Real success.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#111827] rounded-2xl p-6 border border-[#1E293B] hover:border-blue-500/30 transition-all"
              >
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">"{testimonial.text}"</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl p-12 border border-blue-500/20"
          >
            <h2 className="text-4xl font-bold mb-4">Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Build</span> the Future?</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of students who've already succeeded. Your academic journey starts here.
            </p>
            <Link href="/contact">
              <button className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  Contact Us Now
                  <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
