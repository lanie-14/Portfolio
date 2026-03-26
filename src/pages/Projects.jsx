import React from 'react'
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react'

const Projects = () => {
  const projects = [
    { title: 'Project ONE', slug: '01', desc: 'A revolutionary digital interface for modern artists.', tags: ['UX', 'React'] },
    { title: 'Cyber Flow', slug: '02', desc: 'Connecting distributed networks through clean design.', tags: ['API', 'Node'] },
    { title: 'Nova Brand', slug: '03', desc: 'Minimalist branding for the next generation of web.', tags: ['Logo', 'UI'] },
    { title: 'Infinity UI', slug: '04', desc: 'The ultimate design system for high-performance apps.', tags: ['Tailwind', 'Figma'] }
  ]

  return (
    <div className="max-w-6xl mx-auto translate-y-10">
      <div className="mb-24 flex flex-col md:flex-row items-end justify-between gap-10">
         <h1 className="text-6xl md:text-9xl font-black text-slate-900 uppercase tracking-tighter leading-none m-0 italic">MY<br /><span className="text-violet-600">FOLIO.</span></h1>
         <p className="text-lg text-slate-400 font-bold max-w-sm mb-4 leading-relaxed">
            A curated selection of experiments and solutions developed over the years of exploration.
         </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((proj, idx) => (
          <div key={idx} className="group relative bg-slate-50 rounded-[4rem] overflow-hidden p-12 hover:bg-violet-50 transition-all duration-700 hover:shadow-2xl shadow-violet-600/5">
             <div className="absolute top-10 right-10 text-8xl font-black text-slate-100 opacity-50 group-hover:text-violet-100 group-hover:scale-125 transition-all duration-700 pointer-events-none">
                {proj.slug}
             </div>
             
             <div className="relative z-10 flex flex-col h-full justify-between min-h-[300px]">
                <div>
                   <div className="flex gap-2 mb-10">
                      {proj.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-4 py-1 bg-white rounded-full shadow-sm text-slate-500">{tag}</span>
                      ))}
                   </div>
                   <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter italic mb-4 group-hover:text-violet-600 transition-colors uppercase leading-[0.85]">{proj.title}</h2>
                   <p className="text-slate-400 font-medium text-base max-w-xs">{proj.desc}</p>
                </div>

                <div className="flex gap-4 pt-10 border-t border-slate-100 mt-10">
                   <button className="bg-slate-900 text-white w-14 h-14 rounded-full flex items-center justify-center hover:bg-violet-600 transition-all">
                      <ArrowUpRight size={24} />
                   </button>
                   <button className="bg-white text-slate-900 w-14 h-14 rounded-full border border-slate-100 flex items-center justify-center hover:bg-slate-50 transition-all">
                      <Github size={20} />
                   </button>
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
