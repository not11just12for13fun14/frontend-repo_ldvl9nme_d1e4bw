import { useState } from 'react'

export default function Schedule(){
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Scheduling...')
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/schedule`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if(!res.ok) throw new Error('Failed to schedule')
      setStatus('Booked! We will confirm shortly.')
      e.currentTarget.reset()
    } catch(err){
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="schedule" className="relative py-24 bg-gradient-to-b from-zinc-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-white">Schedule a discovery call</h2>
              <p className="mt-3 text-gray-300">Pick a day that works. We’ll audit your presence and propose the fastest path to growth.</p>
            </div>

            <form onSubmit={handleSubmit} className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
              <input name="name" required placeholder="Full name" className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-400" />
              <input name="email" required type="email" placeholder="Email" className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-400" />
              <input name="phone" placeholder="Phone" className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-400" />
              <input name="preferred_date" type="date" className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-400" />
              <input name="preferred_time" type="time" className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-400" />
              <input name="notes" placeholder="Notes" className="sm:col-span-2 w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-400" />
              <button className="sm:col-span-2 mt-2 w-full px-6 py-3 rounded-md bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold shadow shadow-red-500/30">Schedule</button>
              {status && <p className="sm:col-span-2 text-sm text-gray-300">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
