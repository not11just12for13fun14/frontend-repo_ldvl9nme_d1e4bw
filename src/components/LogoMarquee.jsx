import { motion } from 'framer-motion'

const brands = [
  'Acme', 'Nova', 'Vertex', 'Pulse', 'Monolith', 'Quanta', 'Nimbus', 'Aperture', 'Helix', 'Atlas'
]

export default function LogoMarquee() {
  return (
    <section className="relative py-12 sm:py-16 bg-black/90 border-y border-white/5">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.08),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Trusted by modern brands</p>
        </div>
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-14 items-center whitespace-nowrap will-change-transform"
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          >
            {[...brands, ...brands].map((b, i) => (
              <div key={i} className="shrink-0 text-gray-400/80 hover:text-white transition-colors">
                <div className="text-lg sm:text-xl font-semibold tracking-wide">
                  {b}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
