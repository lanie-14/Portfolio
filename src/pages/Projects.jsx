import React from 'react'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    { 
       title: 'Digital Portfolio', 
       category: 'Web Application', 
       desc: 'A minimalist personal portfolio built with React and Tailwind CSS.',
       tags: ['React', 'Tailwind', 'Vite']
    },
    { 
       title: 'Task Manager', 
       category: 'Productivity Tool', 
       desc: 'Streamline your daily workflow with this intuitive and highly responsive application.',
       tags: ['JavaScript', 'CSS']
    },
    { 
       title: 'Brand Showcase', 
       category: 'UI/UX Design', 
       desc: 'A minimalist brand presentation focusing on heavy typography and clean imagery.',
       tags: ['Figma', 'UI Design']
    }
  ]

  return (
    <div className="max-w-5xl">
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-rose-600 mb-4">My Works</h1>
        <p className="text-lg text-slate-500">A collection of projects showcasing my coding journey.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((proj, idx) => (
          <div key={idx} className="group flex flex-col">
            <div className="w-full aspect-[16/10] bg-rose-50 rounded-2xl mb-6 relative overflow-hidden border border-rose-100 group-hover:border-rose-200 transition-all flex items-center justify-center text-rose-200 font-black uppercase tracking-tighter text-4xl select-none group-hover:text-rose-300">
               {proj.title.split(' ')[0]}
            </div>
            
            <div className="flex-grow">
               <span className="text-xs font-bold text-rose-400 uppercase tracking-widest mb-2 block">{proj.category}</span>
               <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-rose-600 transition-colors uppercase italic">{proj.title}</h2>
               <p className="text-slate-600 leading-relaxed mb-6">{proj.desc}</p>
            </div>

            <div className="flex items-center gap-6">
               <div className="flex flex-wrap gap-2">
                  {proj.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-rose-500 uppercase tracking-widest border border-rose-100 px-3 py-1 rounded-full">{tag}</span>
                  ))}
               </div>
               <div className="ml-auto flex gap-4">
                  <ExternalLink size={18} className="text-slate-400 cursor-pointer hover:text-rose-900 transition-colors" />
                  <Github size={18} className="text-slate-400 cursor-pointer hover:text-rose-900 transition-colors" />
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
