import React from 'react'
import { Sparkles, MapPin, Mail, Coffee } from 'lucide-react'

const About = () => {
  return (
    <div className="max-w-4xl">
      <div className="grid md:grid-cols-3 gap-16 items-start">
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold text-slate-900 mb-8 border-b border-blue-100 pb-4 text-blue-600 font-serif italic">My Story</h1>
          <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
            <p>
              I am Denver Marasigan, a web developer with a passion for building user-centric digital environments. My philosophy is that technology should be simple to use and visually satisfying.
            </p>
            <p>
              My journey started with a fascination for technology and how it can solve everyday problems. Since then, I’ve been constantly refining my craft, focusing on modern tools like React and Node.js.
            </p>
            <p>
              I believe that communication and empathy are just as important as code. Understanding the user's needs is my top priority.
            </p>
          </div>
        </div>

        <aside className="space-y-8">
           <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
              <h3 className="text-xs font-black text-blue-400 uppercase tracking-widest mb-8">Details</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-sm font-medium text-slate-700">
                  <MapPin size={18} className="text-blue-400" /> Philippines
                </div>
                <div className="flex items-center gap-4 text-sm font-medium text-slate-700">
                  <Mail size={18} className="text-blue-400" /> denver@example.com
                </div>
                <div className="flex items-center gap-4 text-sm font-medium text-slate-700">
                  <Sparkles size={18} className="text-blue-400" /> Freelance Available
                </div>
                <div className="flex items-center gap-4 text-sm font-medium text-slate-700 pt-6 border-t border-blue-200">
                  <Coffee size={18} className="text-blue-400" /> Iced Coffee
                </div>
              </div>
           </div>
        </aside>
      </div>
    </div>
  )
}

export default About
