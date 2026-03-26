import React, { useState } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

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
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans">
      {/* Navigation */}
      <nav className="bg-white border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="font-bold text-xl tracking-wide text-rose-600">
              Kyla.Design
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-rose-600 ${location.pathname === link.path ? 'text-rose-600' : 'text-stone-600'}`}
                >
                  {link.label}
                </Link>
              ))}
              <a href="mailto:kylamae@example.com" className="bg-rose-600 hover:bg-rose-700 text-white px-5 py-2 rounded-md font-medium transition-colors text-sm shadow-sm">
                Hire Me
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-stone-600 hover:text-stone-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-stone-200 shadow-lg absolute w-full">
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium transition-colors ${location.pathname === link.path ? 'text-rose-600' : 'text-stone-600'}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-stone-200 py-12 mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-bold text-lg text-rose-600 mb-4">Kyla Mae Dela Cruz</h2>
          <p className="text-stone-500 mb-6 max-w-sm mx-auto leading-relaxed">
            Bridging the gap between beautiful aesthetics and intuitive user experiences. Let's design something wonderful.
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-stone-400 hover:text-rose-600 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-stone-400 hover:text-rose-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:kylamae@example.com" className="text-stone-400 hover:text-rose-600 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-stone-400 text-xs tracking-wider uppercase">
            &copy; {new Date().getFullYear()} Kyla Mae Dela. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
