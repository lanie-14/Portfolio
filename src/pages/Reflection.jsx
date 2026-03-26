import React from 'react'

const Reflection = () => {
  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold text-blue-600 mb-8 font-serif italic border-b border-blue-100 pb-4 text-center md:text-left">Developer Reflections</h1>
      <div className="bg-blue-50 p-8 md:p-12 rounded-2xl border border-blue-100 shadow-sm">
        <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
           <p className="font-serif italic text-2xl text-blue-500 mb-6">"Software is a tool for humans, not just a set of instructions for machines."</p>
           <p>
             I’ve learned that the most complex technical systems should still be easy for the user to understand. Efficiency is just as much about user experience as it is about code performance.
           </p>
           <p>
             Working with modern technologies like React and Tailwind has shown me how to bridge the gap between structure and aesthetics effectively.
           </p>
           <p className="font-bold text-blue-600">— Denver Marasigan</p>
        </div>
      </div>
    </div>
  )
}

export default Reflection
