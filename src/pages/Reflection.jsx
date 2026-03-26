import React from 'react'

const Reflection = () => {
  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold text-rose-600 mb-8 font-serif italic border-b border-rose-100 pb-4 text-center md:text-left">Learning Reflections</h1>
      <div className="bg-rose-50 p-8 md:p-12 rounded-2xl border border-rose-100 shadow-sm">
        <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
           <p className="font-serif italic text-2xl text-rose-500 mb-6">"Design is not just what it looks like. Design is how it works."</p>
           <p>
             Throughout this journey, I've learned that simplicity is powerful. In every line of code and every layout choice, I strive to make things easier for the user. 
           </p>
           <p>
             Building this portfolio was a great way to consolidate my skills in React and Tailwind CSS. It taught me how to balance visual aesthetics with functional efficiency.
           </p>
           <p className="font-bold text-rose-600">— Kyla Mae Dela Cruz</p>
        </div>
      </div>
    </div>
  )
}

export default Reflection
