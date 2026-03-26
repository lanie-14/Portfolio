import React from 'react'
import { Star, Cloud, Moon, Sun } from 'lucide-react'

const About = () => {
  return (
    <div className="max-w-5xl mx-auto translate-y-20">
      <div className="text-center md:text-left mb-20 reveal-left">
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 uppercase tracking-tighter mb-4 leading-none italic">
             THE<br /><span className="text-violet-600 transition-colors">ARCHITECT.</span>
          </h1>
          <p className="text-xl text-slate-400 font-bold uppercase tracking-[0.2em] ml-2">Everything starts with a line of code.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-20 animate-in">
         {/* Bio Main */}
         <div className="md:col-span-4 bg-white p-12 rounded-[4rem] shadow-2xl shadow-indigo-900/5 border border-slate-50 relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-violet-50 rounded-full group-hover:scale-150 transition-transform duration-700 -z-10"></div>
            <p className="text-2xl text-slate-900 font-black leading-snug mb-8">
               My name is <span className="text-violet-600">Lanibel Cabrera</span>. I believe in the power of digital architecture to transform the way we interact with the world.
            </p>
            <div className="space-y-6 text-slate-500 font-bold text-base leading-relaxed">
              <p>
                From branding identities to high-performance web applications, I bring a unique blend of structural integrity and aesthetic vibrance to every pixel.
              </p>
              <p>
                My process is simple: I listen, I observe, and I build. I don't just write code; I design systems that work for people.
              </p>
            </div>
         </div>

         {/* Side Widgets */}
         <div className="md:col-span-2 space-y-8">
            <div className="bg-indigo-900 p-10 rounded-[3.5rem] text-white flex flex-col justify-between h-56 rotate-2 hover:rotate-0 transition-transform group shadow-xl">
               <Sun size={28} className="text-yellow-400 fill-yellow-400 group-hover:scale-125 transition-transform" />
               <div>
                  <h3 className="text-xl font-black italic">Bright Ideation</h3>
                  <p className="text-[10px] font-bold opacity-50 uppercase tracking-widest mt-2">Morning Session Specialist</p>
               </div>
            </div>
            <div className="bg-violet-600 p-10 rounded-[3.5rem] text-white flex flex-col justify-between h-56 -rotate-2 hover:rotate-0 transition-transform group shadow-xl">
               <Moon size={28} className="text-indigo-200 fill-indigo-200 group-hover:rotate-12 transition-transform" />
               <div>
                  <h3 className="text-xl font-black italic">Clean Logic</h3>
                  <p className="text-[10px] font-bold opacity-50 uppercase tracking-widest mt-2">Night-Owl Execution</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default About
