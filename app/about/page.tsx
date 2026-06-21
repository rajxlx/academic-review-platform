export default function AboutPage() {
  const stats = [
    { label: 'Students Helped', value: '5000+', color: 'from-blue-400 to-blue-600' },
    { label: 'Projects Completed', value: '10,000+', color: 'from-purple-400 to-purple-600' },
    { label: 'Satisfaction Rate', value: '98%', color: 'from-pink-400 to-pink-600' },
    { label: 'Expert Available', value: '100+', color: 'from-indigo-400 to-indigo-600' },
  ]

  const team = [
    { name: 'Dr. Rajesh Kumar', role: 'Lead Expert - AI/ML', icon: '🧠' },
    { name: 'Prof. Priya Sharma', role: 'Expert - Web Development', icon: '💻' },
    { name: 'Dr. Amit Singh', role: 'Expert - Data Science', icon: '📊' },
    { name: 'Prof. Sneha Reddy', role: 'Expert - Research', icon: '📝' },
  ]

  return (
    <div className="min-h-screen bg-[#0A0E17] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Us</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We're on a mission to help students succeed with expert academic support
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="bg-[#111827] rounded-2xl p-6 text-center border border-[#1E293B] hover:border-blue-500/50 transition-all hover:-translate-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#111827] rounded-2xl p-8 border border-[#1E293B] mb-16">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            We believe every student deserves access to quality academic support.
            Our platform connects students with qualified experts who provide
            personalized guidance for projects, assignments, and research.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-center mb-8">Meet Our Experts</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div key={i} className="bg-[#111827] rounded-2xl p-6 text-center border border-[#1E293B] hover:border-purple-500/50 transition-all hover:-translate-y-2">
              <div className="text-5xl mb-3">{member.icon}</div>
              <h3 className="font-semibold text-white">{member.name}</h3>
              <p className="text-gray-400 text-sm mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
