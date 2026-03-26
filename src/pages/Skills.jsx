import React from 'react'
import { Layout as LayoutIcon, Server, Terminal, Code2 } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    { title: 'Frontend', icon: <LayoutIcon className="w-6 h-6" />, items: ['React', 'JavaScript', 'Tailwind CSS', 'Vite'] },
    { title: 'Backend', icon: <Server className="w-6 h-6" />, items: ['Node.js', 'Express', 'MySQL', 'Git'] },
    { title: 'DevOps & Tools', icon: <Terminal className="w-6 h-6" />, items: ['Git', 'VS Code', 'Heroku', 'Deployment'] }
  ]

  return (
    <div className="max-w-4xl">
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Technical Skills</h1>
        <p className="text-lg text-slate-500">A look at the tools and technologies I use to build scalable web apps.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="bg-blue-50 p-8 rounded-2xl border border-blue-100 hover:border-blue-300 transition-colors group">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-900 mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
              {cat.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">{cat.title}</h3>
            <ul className="space-y-3">
              {cat.items.map(item => (
                <li key={item} className="flex items-center gap-2 text-slate-600 font-medium">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
