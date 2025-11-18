import { motion } from 'framer-motion'

export default function FluidBackground(){
  const blobs = [
    { x: -220, y: -100, size: 420, color: 'from-rose-500/30 to-red-500/20', delay: 0 },
    { x: 240, y: -60, size: 360, color: 'from-indigo-500/25 to-violet-500/10', delay: 0.2 },
    { x: 0, y: 140, size: 520, color: 'from-emerald-500/20 to-teal-500/10', delay: 0.4 },
  ]
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.35, x: b.x, y: b.y }}
          animate={{
            x: [b.x, b.x + 40, b.x - 20, b.x],
            y: [b.y, b.y - 30, b.y + 20, b.y],
            opacity: [0.3, 0.5, 0.35, 0.3],
          }}
          transition={{ duration: 18, delay: b.delay, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br ${b.color} blur-3xl mix-blend-screen`}
          style={{ width: b.size, height: b.size }}
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.05),transparent_60%)]" />
      <div className="absolute inset-0 backdrop-blur-[2px]" />
    </div>
  )
}
