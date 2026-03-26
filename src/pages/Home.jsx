import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Zap, Ghost, Eye } from 'lucide-react'

const Home = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-100 rounded-full blur-[140px] -z-10 opacity-60 animate-pulse"></div>
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-indigo-100 rounded-full blur-[120px] -z-10 opacity-60"></div>

      <div className="max-w-4xl w-full text-center reveal-left">
         <div className="inline-block p-1 bg-slate-100 rounded-full mb-10 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 px-6 py-2 bg-white rounded-full">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-600"></span>
               </span>
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">Lanibel Cabrera • Digital Craft</span>
            </div>
         </div>

         <h1 className="text-7xl md:text-9xl font-black text-slate-900 leading-[0.88] tracking-tighter mb-10 translate-x-[-2px]">
            HELLO.<br />
            <span className="text-violet-600 italic font-serif">READY TO</span><br />
            BUILD?
         </h1>

         <p className="text-lg md:text-2xl text-slate-500 font-medium max-w-2xl mx-auto mb-16 leading-relaxed">
            I am <span className="text-slate-900 font-black italic underline decoration-violet-100 decoration-wavy underline-offset-4">Lanibel Cabrera</span>. A designer and developer delivering immersive digital experiences that leave a lasting mark.
         </p>

         <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/projects" className="bg-slate-900 text-white px-12 py-6 rounded-3xl font-black uppercase tracking-widest text-[11px] border-4 border-white shadow-2xl shadow-indigo-900/10 hover:bg-violet-600 transition-all flex items-center justify-center gap-3 group active:scale-95">
               View My Work <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <Link to="/about" className="bg-white/80 backdrop-blur-md text-slate-900 px-12 py-6 rounded-3xl font-black uppercase tracking-widest text-[11px] border border-slate-100 shadow-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-3 active:scale-95">
               The Whole Story <Ghost size={18} className="text-violet-400" />
            </Link>
         </div>
      </div>

      {/* Floating Dynamic Cards */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 space-y-6 reveal-right">
         <div className="w-40 h-40 bg-white rounded-[3rem] shadow-2xl shadow-indigo-900/5 rotate-6 p-6 flex items-center justify-center floating">
            <Zap size={40} className="text-yellow-400 fill-yellow-400" />
         </div>
         <div className="w-48 h-48 bg-violet-600 rounded-[3rem] shadow-2xl shadow-violet-600/20 -rotate-3 p-8 flex flex-col justify-end text-white floating" style={{animationDelay: '1s'}}>
            <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2">Role</p>
            <p className="font-black italic text-xl">DEV & DESIGN</p>
         </div>
         <div className="w-32 h-32 bg-indigo-900 rounded-[3rem] shadow-2xl p-6 flex items-center justify-center floating" style={{animationDelay: '2s'}}>
            <Eye size={32} className="text-indigo-200" />
         </div>
      </div>
    </div>
  )
}

export default Home
