import React from 'react'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    { 
       title: 'Vortex API', 
       category: 'Backend Architecture', 
       desc: 'A high-performance custom API gateway for managing web traffic.',
       tags: ['Node.js', 'Express', 'Redis']
    },
    { 
       title: 'Titan Dash', 
       category: 'Full Stack App', 
       desc: 'Streamline your operations with this intuitive administrative platform.',
       tags: ['React', 'PostgreSQL']
    },
    { 
       title: 'SecureFlow', 
       category: 'Tooling', 
       desc: 'A minimalist security library for handling distributed auth patterns.',
       tags: ['TypeScript', 'JWT']
    }
  ]

  return (
    <div className="max-w-5xl">
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Selected Projects</h1>
        <p className="text-lg text-slate-500">A collection of engineering projects focused on speed and reliability.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((proj, idx) => (
          <div key={idx} className="group flex flex-col">
            <div className="w-full aspect-[16/10] bg-blue-50 rounded-2xl mb-6 relative overflow-hidden border border-blue-100 group-hover:border-blue-200 transition-all flex items-center justify-center text-blue-200 font-black uppercase tracking-tighter text-4xl select-none group-hover:text-blue-300">
               {proj.title.split(' ')[0]}
            </div>
            
            <div className="flex-grow">
               <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2 block">{proj.category}</span>
               <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors uppercase italic">{proj.title}</h2>
               <p className="text-slate-600 leading-relaxed mb-6">{proj.desc}</p>
            </div>

            <div className="flex items-center gap-6">
               <div className="flex flex-wrap gap-2">
                  {proj.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-blue-500 uppercase tracking-widest border border-blue-100 px-3 py-1 rounded-full">{tag}</span>
                  ))}
               </div>
               <div className="ml-auto flex gap-4">
                  <ExternalLink size={18} className="text-slate-400 cursor-pointer hover:text-blue-900 transition-colors" />
                  <Github size={18} className="text-slate-400 cursor-pointer hover:text-blue-900 transition-colors" />
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
