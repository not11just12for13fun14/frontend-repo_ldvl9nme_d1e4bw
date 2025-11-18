import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Projects(){
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const load = async () => {
      try{
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/feed`)
        const data = await res.json()
        setProjects(data.projects || [])
      }catch(err){
        // fallback demo
        setProjects([
          {
            title: 'D2C Beauty: 5.1x ROAS Launch',
            image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop',
            tag: 'E-commerce',
            stats: { roas: '5.1x', spend: '₹12.4L', revenue: '₹63.4L' }
          },
          {
            title: 'Fintech App: 120k Pre-Launch Signups',
            image: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=1600&auto=format&fit=crop',
            tag: 'Fintech',
            stats: { cpl: '₹42', leads: '120k', conv: '3.6%' }
          },
          {
            title: 'B2B SaaS: Pipeline +56% MoM',
            image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
            tag: 'SaaS',
            stats: { mrr: '+56%', acv: '+22%', sql: '+41%' }
          }
        ])
      }
    }
    load()
  }, [])

  return (
    <section className="relative py-24 bg-gradient-to-b from-black to-zinc-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.06),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected work</h2>
          <p className="mt-3 text-gray-300">A snapshot of launches and growth sprints</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur will-change-transform"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-rose-500/10 via-red-500/5 to-transparent rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative aspect-[16/10] overflow-hidden">
                <motion.img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 12 }}
                />
                <div className="absolute left-3 top-3 px-3 py-1 text-xs rounded-full bg-black/60 text-white border border-white/10">
                  {p.tag}
                </div>
              </div>
              <div className="relative p-5">
                <h3 className="text-white font-semibold leading-tight">{p.title}</h3>
                <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-gray-300">
                  {Object.entries(p.stats || {}).map(([k,v]) => (
                    <div key={k} className="rounded-md bg-white/5 border border-white/10 px-3 py-2 text-center">
                      <div className="text-white font-semibold">{v}</div>
                      <div className="uppercase tracking-wide text-[10px] text-gray-400">{k}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
