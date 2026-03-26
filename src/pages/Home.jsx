import React from 'react'
import { Link } from 'react-router-dom'
import { Code2, ArrowRight } from 'lucide-react'

const Home = () => {
  const profileImage = "/images/profile.png" // Pointing to public/images/profile.png

  return (
    <div className="relative">
      {/* Soft Background Glows */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10"></div>
      
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <div className="flex-1 max-w-2xl order-2 md:order-1">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full mb-8 text-xs font-bold uppercase tracking-widest border border-blue-100">
             <Code2 size={14} /> Available for Work
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-[1.1]">
             Building <span className="text-blue-400">meaningful</span> web experiences.
          </h1>
          
          <p className="text-xl text-slate-500 mb-12 leading-relaxed max-w-xl">
             Hi, I'm <span className="text-blue-900 font-semibold">Denver Marasigan</span>. I'm a developer specializing in building clean, minimalist, and user-friendly applications from the Philippines.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
             <Link to="/projects" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 active:scale-95">
                Explore Projects <ArrowRight size={18} />
             </Link>
             <Link to="/about" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all active:scale-95">
                About Me
             </Link>
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="flex-shrink-0 order-1 md:order-2">
           <div className="relative">
              <div className="absolute inset-0 bg-blue-100 rounded-[2.5rem] rotate-3 -z-10 opacity-50"></div>
              <div className="w-64 h-80 overflow-hidden rounded-[2.5rem] shadow-xl border-4 border-white">
                <img 
                  src={profileImage} 
                  alt="Denver Marasigan Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Home
