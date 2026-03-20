import React, { useState, useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { Menu, X, Github, Linkedin, Mail, ArrowRight, Zap } from 'lucide-react'

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/reflection', label: 'Reflection' },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-6'}`}>
        <div className="container-custom">
          <div className={`glass px-6 py-2 rounded-2xl flex items-center justify-between transition-all duration-500 ${isScrolled ? 'shadow-2xl shadow-indigo-500/10 border-white/10' : 'bg-transparent border-transparent'}`}>
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-indigo-500/20">
                <Zap className="text-white w-6 h-6 fill-current" />
              </div>
              <span className="font-headline font-bold text-xl tracking-tight hidden sm:block uppercase">
                DELA ROSA<span className="text-indigo-400">.</span>
              </span>
            </Link>


            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
              <a href="#contact" className="btn btn-primary !py-2 !px-5 text-sm">
                Let's Chat
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute top-full left-0 right-0 p-4 transition-all duration-500 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <div className="glass-dark rounded-2xl p-6 flex flex-col gap-6 border-white/5 shadow-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium transition-colors ${location.pathname === link.path ? 'text-indigo-400' : 'text-slate-300'}`}
              >
                {link.label}
              </Link>
            ))}
            <a href="#contact" className="btn btn-primary w-full">
              Get In Touch
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="py-20 bg-slate-950/50 backdrop-blur-sm border-t border-white/5">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="fade-in">
              <Link to="/" className="flex items-center gap-2 mb-6 group">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-all">
                  <Zap className="text-white w-5 h-5 fill-current" />
                </div>
                <span className="font-headline font-bold text-xl tracking-tight uppercase">DELA ROSA<span className="text-indigo-400">.</span></span>
              </Link>
              <p className="text-slate-400 leading-relaxed mb-6">

                Bridging the gap between leadership and technology to create impactful digital experiences.
              </p>
              <div className="flex gap-4">
                <SocialIcon icon={Github} href="https://github.com/arvindelarosa" />
                <SocialIcon icon={Linkedin} href="https://linkedin.com/in/arvindelarosa" />
                <SocialIcon icon={Mail} href="mailto:arvindelarosa@gmail.com" />
              </div>

            </div>

            <div className="fade-in stagger-delay-1">
              <h3 className="text-white font-bold mb-6 text-lg uppercase tracking-widest">Navigation</h3>
              <ul className="space-y-4">
                {navLinks.map(link => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="fade-in stagger-delay-2">
              <h3 className="text-white font-bold mb-6 text-lg uppercase tracking-widest">Connect</h3>
              <p className="text-slate-400 mb-6 italic">"The best way to predict the future is to invent it."</p>
              <a href="mailto:arvindelarosa@gmail.com" className="btn btn-secondary w-full">
                Drop an Email
              </a>

            </div>
          </div>

          <div className="pt-8 border-t border-white/5 text-center">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Arvin Dela Rosa. All Rights Reserved.
            </p>
          </div>

        </div>
      </footer>
    </div>
  )
}

const SocialIcon = ({ icon: Icon, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-10 h-10 glass-light rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600/20 hover:border-indigo-500/50 transition-all"
  >
    <Icon className="w-5 h-5" />
  </a>
)

export default Layout
