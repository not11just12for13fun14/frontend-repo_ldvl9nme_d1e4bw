import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-red-600 to-rose-500 shadow-lg shadow-red-500/30" />
            <div className="text-white font-semibold">Content Craft Media</div>
          </div>
          <p className="mt-3 text-sm text-gray-300">Social media, performance, and CRM programs engineered for growth.</p>
        </div>
        <div className="text-gray-300 text-sm">
          <div className="font-semibold text-white mb-3">Company</div>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
            <li><a href="#schedule" className="hover:text-white">Schedule</a></li>
          </ul>
        </div>
        <div className="text-gray-300 text-sm">
          <div className="font-semibold text-white mb-3">Legal</div>
          <ul className="space-y-2">
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Content Craft Media. All rights reserved.
      </div>
    </footer>
  )
}
