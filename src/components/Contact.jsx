import { useState } from 'react'

export default function Contact(){
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if(!res.ok) throw new Error('Failed to submit')
      setStatus('Thanks! We will reach out shortly.')
      e.currentTarget.reset()
    } catch(err){
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Tell us about your goals</h2>
          <p className="mt-4 text-gray-300">We’ll design a marketing engine around your audience, offer and outcomes.</p>
          <ul className="mt-6 space-y-3 text-gray-300 text-sm">
            <li>• Typical reply in under 24 hours</li>
            <li>• India-first team, global execution</li>
            <li>• Transparent pricing and reporting</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Your name" className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-400" />
            <input name="email" required type="email" placeholder="Email" className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-400" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <input name="company" placeholder="Company" className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-400" />
            <input name="phone" placeholder="Phone" className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-400" />
          </div>
          <select name="service_interest" className="mt-4 w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white">
            <option value="Social Media Marketing">Social Media Marketing</option>
            <option value="Performance Marketing">Performance Marketing</option>
            <option value="Brand/Creative">Brand/Creative</option>
            <option value="Automation & CRM">Automation & CRM</option>
          </select>
          <textarea name="message" required rows="5" placeholder="Tell us about your project..." className="mt-4 w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-400" />

          <button className="mt-6 w-full px-6 py-3 rounded-md bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold shadow shadow-red-500/30">Send message</button>
          {status && <p className="mt-3 text-sm text-gray-300">{status}</p>}
        </form>
      </div>
    </section>
  )
}
