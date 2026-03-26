import React, { useState } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { Menu, X, Infinity } from 'lucide-react'

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
    <div className="min-h-screen flex flex-col font-sans">
      {/* Dynamic Header */}
      <header className="fixed top-6 left-6 right-6 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between bg-white/60 backdrop-blur-2xl border border-white/40 p-4 rounded-3xl shadow-2xl shadow-indigo-900/5">
           <Link to="/" className="group flex items-center gap-3 pl-2">
              <div className="w-10 h-10 bg-gradient-to-tr from-violet-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white rotate-12 group-hover:rotate-0 transition-all duration-300 shadow-lg shadow-violet-500/20">
                 <Infinity size={22} />
              </div>
              <span className="font-black text-xl tracking-tight text-slate-900 group-hover:text-violet-600 transition-colors">LC</span>
           </Link>
           
           <nav className="hidden md:flex gap-1 pr-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`text-xs font-black uppercase tracking-widest px-6 py-3 rounded-2xl transition-all ${location.pathname === link.path ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/20' : 'text-slate-400 hover:text-slate-900 hover:bg-white/50'}`}
                >
                  {link.label}
                </Link>
              ))}
           </nav>

           <button className="md:hidden p-3 bg-white/80 rounded-2xl border border-slate-100" onClick={() => setIsMenuOpen(!isMenuOpen)}>
             {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
           </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white/90 backdrop-blur-3xl border border-white/50 p-8 rounded-3xl shadow-2xl flex flex-col gap-6 animate-in slide-in-from-top-10 duration-500">
             {navLinks.map((link) => (
              <Link key={link.path} to={link.path} onClick={() => setIsMenuOpen(false)} className="text-2xl font-black text-slate-900 uppercase tracking-tighter hover:text-violet-600 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Main Container */}
      <main className="flex-grow pt-32 pb-20 max-w-6xl mx-auto w-full px-6">
        <Outlet />
      </main>

      {/* Modern Compact Footer */}
      <footer className="py-12 border-t border-slate-50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">&copy; 2024 LANIBEL CABRERA</p>
            <div className="flex gap-8">
               <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-violet-600 cursor-pointer transition-colors">Twitter</span>
               <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-violet-600 cursor-pointer transition-colors">Dribbble</span>
               <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-violet-600 cursor-pointer transition-colors">LinkedIn</span>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
