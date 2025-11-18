import { Link, NavLink } from 'react-router-dom'
import { Menu, Phone, LogIn } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-red-600 to-rose-500 shadow-lg shadow-red-500/30" />
            <div className="leading-tight">
              <div className="text-white font-semibold -mb-1">Content Craft Media</div>
              <div className="text-[11px] text-gray-400">Social & Digital Marketing</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <a href="#about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white">About</a>
            <a href="#contact" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white">Contact</a>
            <a href="#schedule" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white">Schedule</a>
            <NavLink to="/story" className={navLinkClass}>Our Story</NavLink>
            <NavLink to="/privacy" className={navLinkClass}>Privacy</NavLink>
            <NavLink to="/terms" className={navLinkClass}>Terms</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#schedule" className="inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white">
              <Phone size={16} /> Book a Call
            </a>
            <Link to="/login" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-red-600 to-rose-600 text-white text-sm font-semibold shadow shadow-red-500/30">
              <LogIn size={16} /> Client Login
            </Link>
          </div>

          <button className="md:hidden text-gray-200" onClick={() => setOpen(!open)}>
            <Menu />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80">
          <div className="px-4 py-3 space-y-2">
            <NavLink to="/" className="block text-gray-200" onClick={() => setOpen(false)}>Home</NavLink>
            <a href="#about" className="block text-gray-200" onClick={() => setOpen(false)}>About</a>
            <a href="#contact" className="block text-gray-200" onClick={() => setOpen(false)}>Contact</a>
            <a href="#schedule" className="block text-gray-200" onClick={() => setOpen(false)}>Schedule</a>
            <NavLink to="/story" className="block text-gray-200" onClick={() => setOpen(false)}>Our Story</NavLink>
            <NavLink to="/privacy" className="block text-gray-200" onClick={() => setOpen(false)}>Privacy</NavLink>
            <NavLink to="/terms" className="block text-gray-200" onClick={() => setOpen(false)}>Terms</NavLink>
            <NavLink to="/login" className="block text-white font-semibold" onClick={() => setOpen(false)}>Client Login</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
