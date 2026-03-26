import React from 'react'
import { MessageSquareQuote, Infinity } from 'lucide-react'

const Reflection = () => {
  return (
    <div className="max-w-4xl mx-auto py-20 translate-y-10">
      <div className="flex flex-col items-center text-center">
         <div className="w-24 h-24 bg-violet-600 rounded-[2.5rem] flex items-center justify-center text-white rotate-12 mb-12 shadow-2xl shadow-violet-600/20">
            <MessageSquareQuote size={40} />
         </div>
         
         <h1 className="text-6xl md:text-9xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-20 italic">
            THOUGHTS.<br /><span className="text-violet-400">MANIFESTO</span>
         </h1>

         <div className="relative bg-white p-12 md:p-24 rounded-[5rem] shadow-2xl shadow-indigo-900/5 border border-slate-50 text-left overflow-hidden group">
            <Infinity size={400} className="absolute -top-20 -left-20 text-slate-50 opacity-10 -rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
            
            <div className="relative z-10 space-y-10">
               <p className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-[0.9] italic underline decoration-violet-500 decoration-8 underline-offset-8">
                  "Every digital product is a conversation between the brand and the soul."
               </p>
               
               <div className="space-y-8 text-xl text-slate-500 font-bold leading-relaxed">
                  <p>
                    Coding for me is not just typing characters; it is building a bridge. Whether it's a simple splash page or a complex dashboard, my priority is the human on the other side.
                  </p>
                  <p>
                    Simplicity is the ultimate sophistication. By removing the noise, we allow the message to echo. This is the philosophy I carry into every project under the LC banner.
                  </p>
               </div>

               <div className="pt-10 border-t border-slate-100 flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-tr from-violet-600 to-indigo-900 rounded-3xl flex items-center justify-center text-white shadow-xl rotate-3 hover:rotate-0 transition-all">
                     <span className="font-black text-2xl">L</span>
                  </div>
                  <div>
                     <p className="text-xl font-black text-slate-900 uppercase tracking-tighter italic">Lanibel Cabrera</p>
                     <p className="text-xs font-black uppercase tracking-[0.3em] text-violet-400">Chief Designer • 2024</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Reflection
