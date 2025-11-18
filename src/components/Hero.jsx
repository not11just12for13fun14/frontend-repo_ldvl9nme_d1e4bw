import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-black" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/70 to-black" />

      <div className="relative z-10">
        {/* Above-the-fold hero */}
        <div className="max-w-7xl mx-auto px-6 pt-28 pb-16">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
              >
                Content Craft Media
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl"
              >
                A modern agency site with sharp typography, bold layouts, and a high-contrast palette. Inspired by premium Dribbble shots.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-10 flex flex-wrap items-center gap-4"
              >
                <a href="#schedule" className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-zinc-100">Get started</a>
                <a href="#contact" className="px-6 py-3 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20">Talk to sales</a>
              </motion.div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-white/5 border border-white/10 p-5">
                <div className="absolute -right-24 -top-24 w-72 h-72 bg-rose-600/20 blur-3xl rounded-full" />
                <div className="relative grid grid-cols-3 gap-3">
                  {[...Array(6)].map((_,i)=> (
                    <div key={i} className="aspect-video rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10" />
                  ))}
                </div>
                <div className="mt-4 text-sm text-gray-400">Snapshot of recent work — strategy, creative, and performance</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stat bar */}
        <div className="border-y border-white/10 bg-black/60">
          <div className="max-w-7xl mx-auto px-6 py-6 grid sm:grid-cols-3 gap-6 text-center">
            {[['120M+','Impressions'],['4.8x','ROAS'],['56%','MoM growth']].map(([k,v]) => (
              <div key={k} className="">
                <div className="text-2xl font-bold text-white">{k}</div>
                <div className="text-xs uppercase tracking-wide text-gray-400">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
