import React from 'react'
import { Terminal, Layout, Figma, GitBranch } from 'lucide-react'

const Skills = () => {
  const skills = [
    { title: 'Frontend', category: 'Logic', color: 'bg-violet-600', text: 'text-white', items: ['React.js', 'Next.js', 'Tailwind', 'Motion'], icon: <Terminal size={20} /> },
    { title: 'Core', category: 'Structure', color: 'bg-slate-900', text: 'text-white', items: ['HTML5', 'CSS3', 'JS ES6+', 'Node.js'], icon: <Layout size={20} /> },
    { title: 'Creative', category: 'Visual', color: 'bg-white', text: 'text-slate-900', items: ['UI/UX', 'Figma', 'Editorial', 'Motion'], icon: <Figma size={20} /> },
    { title: 'Workflow', category: 'Process', color: 'bg-indigo-900', text: 'text-indigo-100', items: ['Git/GitHub', 'Agile', 'Vercel', 'Netlify'], icon: <GitBranch size={20} /> }
  ]

  return (
    <div className="max-w-6xl mx-auto translate-y-10">
      <div className="mb-24 text-center">
         <h1 className="text-6xl md:text-9xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-6">TECH<br /><span className="text-violet-600 italic">STACK.</span></h1>
         <div className="w-24 h-1 bg-violet-200 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {skills.map((skill, idx) => (
          <div key={idx} className={`${skill.color} ${skill.text} p-10 rounded-[3rem] shadow-2xl shadow-indigo-900/5 hover:-translate-y-4 transition-all duration-500 flex flex-col justify-between h-[380px] group border-4 border-white/10`}>
             <div>
                <div className={`w-14 h-14 ${skill.color === 'bg-white' ? 'bg-slate-50' : 'bg-white/10'} rounded-2xl flex items-center justify-center mb-10 rotate-12 group-hover:rotate-0 transition-all shadow-inner`}>
                   {skill.icon}
                </div>
                <h3 className="text-3xl font-black italic mb-2 tracking-tighter uppercase">{skill.title}</h3>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">{skill.category}</p>
             </div>

             <div className="flex flex-wrap gap-2 pt-10 border-t border-white/5">
                {skill.items.map(item => (
                  <span key={item} className="text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full border border-white/5">{item}</span>
                ))}
             </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
