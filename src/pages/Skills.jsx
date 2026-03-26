import React from 'react'
import { Layout, PenTool, Zap, Code2 } from 'lucide-react'

const Skills = () => {
  const design = ['Figma', 'Adobe XD', 'Wireframing', 'Prototyping', 'User Research', 'Design Systems']
  const code = ['HTML5', 'CSS / Sass', 'React.js', 'Tailwind CSS', 'Responsive Layouts', 'Git Version Control']

  return (
    <div className="py-20 lg:py-32">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="mb-20 text-right">
          <h1 className="text-4xl md:text-6xl font-black text-stone-900 mb-6">Tools of the Trade</h1>
          <p className="text-xl text-stone-500 max-w-2xl ml-auto">
            My skill set bridges the visual world of design and the structural realm of front-end development.
          </p>
        </div>

        {/* Development Skills Left, Design Skills right */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Development Skills */}
          <div className="bg-stone-900 rounded-3xl p-10 relative overflow-hidden group">
             <div className="absolute -bottom-10 -left-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <Code2 className="w-40 h-40 text-stone-100" />
             </div>
             <div className="flex flex-row-reverse text-right items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-stone-800 rounded-2xl flex items-center justify-center text-white shadow-sm relative z-10">
                   <Code2 className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-white relative z-10">Frontend Dev</h2>
             </div>
             
             <ul className="space-y-4 relative z-10">
                {code.map((skill, index) => (
                   <li key={index} className="flex flex-col gap-2">
                      <div className="flex flex-row-reverse justify-between items-center text-stone-300 font-bold text-right">
                         <span>{skill}</span>
                         <Zap className="w-4 h-4 text-stone-500" />
                      </div>
                      <div className="w-full bg-stone-800 h-2 rounded-full overflow-hidden flex justify-end">
                         <div className="bg-stone-400 w-3/4 h-full rounded-full"></div>
                      </div>
                   </li>
                ))}
             </ul>
          </div>

          {/* Design Skills */}
          <div className="bg-rose-50 rounded-3xl p-10 relative overflow-hidden group">
             <div className="absolute -top-10 -left-10 opacity-20 group-hover:opacity-40 transition-opacity">
                <PenTool className="w-40 h-40 text-rose-300" />
             </div>
             <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-rose-600 shadow-sm relative z-10">
                   <Layout className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-stone-900 relative z-10">UI/UX Design</h2>
             </div>
             
             <ul className="space-y-4 relative z-10">
                {design.map((skill, index) => (
                   <li key={index} className="flex flex-col gap-2">
                      <div className="flex justify-between items-center text-stone-700 font-bold">
                         <span>{skill}</span>
                         <Zap className="w-4 h-4 text-rose-400" />
                      </div>
                      <div className="w-full bg-rose-200 h-2 rounded-full overflow-hidden">
                         <div className="bg-rose-500 w-4/5 h-full rounded-full"></div>
                      </div>
                   </li>
                ))}
             </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills
