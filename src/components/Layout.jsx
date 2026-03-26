import React, { useState } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/reflection', label: 'Reflection' },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans">
      {/* Navigation */}
      <nav className="border-b border-slate-100 sticky top-0 bg-white/80 backdrop-blur-sm z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-bold text-lg tracking-tight text-blue-600">Denver Marasigan</Link>
          
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`text-sm font-medium hover:text-blue-600 transition-colors ${location.pathname === link.path ? 'text-blue-600' : 'text-slate-500'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-50 p-6 flex flex-col gap-4 bg-white shadow-xl">
             {navLinks.map((link) => (
              <Link key={link.path} to={link.path} onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-slate-600">
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow max-w-5xl mx-auto w-full px-6 py-12 md:py-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-10">
        <div className="max-w-5xl mx-auto px-6 text-center text-slate-400 text-xs">
           <p>&copy; {new Date().getFullYear()} Denver Marasigan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
