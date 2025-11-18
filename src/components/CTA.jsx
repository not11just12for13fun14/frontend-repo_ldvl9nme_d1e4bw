import { ArrowRight } from 'lucide-react'

export default function CTA(){
  return (
    <section className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(244,63,94,0.08),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-950 to-zinc-900 p-8 sm:p-12 overflow-hidden">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-rose-600/20 blur-3xl" />
          <div className="grid md:grid-cols-2 gap-8 items-center relative">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Let’s design a growth system that compounds</h3>
              <p className="mt-3 text-gray-300">Book a 20-min strategy session. We’ll map quick wins and long-term levers tailored to your pipeline.</p>
            </div>
            <div className="md:text-right">
              <a href="#schedule" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-zinc-100 transition">
                Schedule now <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
