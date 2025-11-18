import { Megaphone, LineChart, Rocket, Bot, ShieldCheck, Users } from 'lucide-react'

const features = [
  {
    icon: Megaphone,
    title: 'Social Media Strategy',
    desc: 'Platform-native strategies, content calendars and thumb-stopping creatives that scale reach and engagement.'
  },
  {
    icon: LineChart,
    title: 'Performance Marketing',
    desc: 'ROI-focused ad campaigns across Meta, Google, and LinkedIn with full-funnel tracking.'
  },
  {
    icon: Rocket,
    title: 'Brand & Creative',
    desc: 'Visual systems, brand messaging, and video production designed for attention and conversion.'
  },
  {
    icon: Bot,
    title: 'Automations & CRM',
    desc: 'Lead capture, onboarding, and retention flows powered by a lightweight CRM layer.'
  },
  {
    icon: ShieldCheck,
    title: 'Reputation & UGC',
    desc: 'Community management, reviews, and creator collaborations to build trust.'
  },
  {
    icon: Users,
    title: 'B2B Growth',
    desc: 'Outbound, ABM, and sales enablement playbooks for modern pipeline growth.'
  }
]

export default function Features(){
  return (
    <section className="relative py-24 bg-gradient-to-b from-black to-zinc-900" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Full-stack social & digital marketing</h2>
          <p className="mt-4 text-gray-300">From strategy to execution — built to outperform.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({icon:Icon,title,desc}) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-rose-600 flex items-center justify-center text-white shadow shadow-red-500/30">
                <Icon size={20} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-gray-300 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
