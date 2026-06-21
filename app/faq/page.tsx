export default function FAQPage() {
  const faqs = [
    {
      q: 'What services do you offer?',
      a: 'We help with programming projects, research papers, assignments, practical work, major projects, minor projects, and college events.'
    },
    {
      q: 'How much does it cost?',
      a: 'Our pricing starts from ₹499. Contact us for a custom quote based on your project requirements.'
    },
    {
      q: 'Is the work original?',
      a: 'Yes! All work is 100% original and checked with advanced plagiarism detection tools.'
    },
    {
      q: 'How long does delivery take?',
      a: 'Delivery times vary from 1-10 days depending on project complexity and urgency.'
    },
    {
      q: 'Who are the experts?',
      a: 'Our experts are qualified professionals with Masters or PhD degrees in their respective fields.'
    },
    {
      q: 'Can I request revisions?',
      a: 'Yes! All plans include free revisions. Premium plans offer unlimited revisions.'
    },
    {
      q: 'How do I get started?',
      a: 'Simply click "Get Started" or visit our Contact page to tell us about your project.'
    },
    {
      q: 'Is my data secure?',
      a: 'Yes! We take privacy seriously. All data is encrypted and never shared with third parties.'
    }
  ]

  const colors = ['blue', 'purple', 'pink', 'indigo', 'blue', 'purple', 'pink', 'indigo']

  return (
    <div className="min-h-screen bg-[#0A0E17] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Questions</span>
          </h1>
          <p className="text-gray-400 text-lg">Find answers to common questions</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {faqs.map((faq, i) => (
            <div 
              key={i}
              className="bg-[#111827] rounded-2xl p-6 border border-[#1E293B] hover:border-blue-500/50 transition-all hover:-translate-y-1"
            >
              <h3 className="text-white font-semibold text-lg mb-2">{faq.q}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl p-8 border border-blue-500/20">
          <p className="text-gray-300 text-lg mb-4">
            Still have questions? We're here to help!
          </p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}
