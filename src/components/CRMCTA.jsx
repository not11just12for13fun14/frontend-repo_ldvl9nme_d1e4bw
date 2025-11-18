import { ArrowRight, Lock } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function CRMCTA(){
  return (
    <section className="relative py-24 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Client CRM built-in</h2>
          <p className="mt-4 text-gray-300">Onboarding, briefs, approvals and reporting in one place. Invite your team and track progress in real time.</p>
          <ul className="mt-6 text-gray-300 text-sm space-y-2">
            <li>• Dedicated client portal</li>
            <li>• Task boards and approvals</li>
            <li>• KPI dashboard & reports</li>
            <li>• Secure file delivery</li>
          </ul>
          <div className="mt-8 flex gap-4">
            <Link to="/login" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold shadow shadow-red-500/30">
              <Lock size={16} /> Client Login
            </Link>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white/10 text-white font-semibold hover:bg-white/20">
              Talk to Sales <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1,y:0}} transition={{duration:.6}} className="rounded-xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-6">
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
            <div className="p-4 rounded-lg bg-white/5">
              <div className="text-white font-semibold">Leads</div>
              <div className="text-3xl font-bold text-red-400">248</div>
            </div>
            <div className="p-4 rounded-lg bg-white/5">
              <div className="text-white font-semibold">CPL</div>
              <div className="text-3xl font-bold text-green-400">₹94</div>
            </div>
            <div className="p-4 rounded-lg bg-white/5">
              <div className="text-white font-semibold">Engagement</div>
              <div className="text-3xl font-bold text-rose-400">+132%</div>
            </div>
            <div className="p-4 rounded-lg bg-white/5">
              <div className="text-white font-semibold">Conversion</div>
              <div className="text-3xl font-bold text-blue-400">4.8%</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
