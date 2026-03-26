import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
       title: 'Voyage App Concept',
       category: 'Mobile Application Design',
       desc: 'A comprehensive travel companion app designed for modern adventurers. Focuses on intuitive itinerary building and beautiful destination imagery.',
       tags: ['Figma', 'Prototyping', 'User Testing'],
       color: 'rose'
    },
    {
       title: 'Edify E-Learning',
       category: 'Web Redesign',
       desc: 'A complete UX overhaul of a struggling e-learning platform. Increased user retention by simplifying the course navigation structure.',
       tags: ['UX Research', 'Wireframes', 'React.js'],
       color: 'stone'
    },
    {
       title: 'Lumina Café',
       category: 'Website Development',
       desc: 'A minimalist landing page for a local artisanal coffee shop. Developed using responsive Tailwind CSS and lightweight components.',
       tags: ['HTML/CSS', 'Tailwind', 'UI Design'],
       color: 'amber'
    }
  ]

  return (
    <div className="py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="mb-20 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-8">
           <div>
             <h1 className="text-4xl md:text-6xl font-black text-stone-900 mb-4">Selected Case Studies</h1>
             <p className="text-xl text-stone-500 max-w-lg">
               A showcase of problems identified, solved, and beautifully presented.
             </p>
           </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {projects.map((proj, idx) => (
            <div key={idx} className="group flex flex-col cursor-pointer">
              
              <div className={`w-full aspect-[4/3] rounded-3xl mb-8 flex items-center justify-center relative overflow-hidden bg-${proj.color}-50 border border-stone-100 shadow-sm group-hover:shadow-2xl transition-all duration-500`}>
                
                {/* Abstract Image Placeholder */}
                <div className={`w-3/4 h-3/4 rounded-2xl bg-white shadow-xl flex flex-col p-6 group-hover:scale-105 transition-transform duration-700`}>
                   <div className="w-12 h-12 bg-stone-100 rounded-full mb-4"></div>
                   <div className="w-3/4 h-4 bg-stone-200 rounded-full mb-3"></div>
                   <div className="w-1/2 h-4 bg-stone-200 rounded-full"></div>
                </div>

                {/* View Project Button */}
                <div className="absolute right-6 bottom-6 w-12 h-12 bg-stone-900 rounded-full text-white flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>

              <div className="flex-grow">
                <span className="text-rose-600 font-bold text-xs uppercase tracking-widest block mb-2">{proj.category}</span>
                <h2 className="text-2xl font-black text-stone-900 mb-4 group-hover:text-rose-600 transition-colors">{proj.title}</h2>
                <p className="text-stone-500 leading-relaxed mb-6">{proj.desc}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {proj.tags.map(tag => (
                  <span key={tag} className="text-xs font-bold text-stone-600 bg-stone-100 px-4 py-2 rounded-full border border-stone-200">
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Projects
