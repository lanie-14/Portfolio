import React from 'react'
import { Sparkles, MapPin, Coffee, GraduationCap } from 'lucide-react'

const About = () => {
  return (
    <div className="py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-6">
        
        <header className="mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-black text-stone-900 mb-6">Behind the Screen</h1>
            <p className="text-xl text-stone-500 max-w-2xl mx-auto">
              I'm Kyla Mae Dela Cruz, a creative thinker obsessed with solving problems through empathetic design.
            </p>
        </header>

        {/* Swapped order: Info Cards Left, My Story Right */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          <div className="space-y-6">
             {/* Mini Info Card 1 */}
             <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm flex items-center flex-row-reverse text-right gap-4">
                <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center text-stone-600">
                   <MapPin className="w-6 h-6" />
                </div>
                <div>
                   <h3 className="font-bold text-stone-900">Current Base</h3>
                   <p className="text-stone-500">Working remotely from the Philippines</p>
                </div>
             </div>

             {/* Mini Info Card 2 */}
             <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm flex items-center flex-row-reverse text-right gap-4">
                <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center text-stone-600">
                   <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                   <h3 className="font-bold text-stone-900">Education Background</h3>
                   <p className="text-stone-500">Bachelor of Science in Information Technology</p>
                </div>
             </div>

             {/* Mini Info Card 3 */}
             <div className="bg-stone-900 rounded-2xl p-6 border border-stone-800 shadow-md flex items-center flex-row-reverse text-right gap-4 text-white">
                <div className="w-12 h-12 bg-rose-600 rounded-xl flex items-center justify-center">
                   <Coffee className="w-6 h-6" />
                </div>
                <div>
                   <h3 className="font-bold text-white">Fuel Source</h3>
                   <p className="text-stone-300">Iced Lattes and ambient music playlists</p>
                </div>
             </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
            <div className="flex flex-row-reverse text-right items-center gap-4 mb-8 pb-8 border-b border-stone-100">
               <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center text-rose-600">
                  <Sparkles className="w-8 h-8" />
               </div>
               <div>
                 <h2 className="text-2xl font-bold text-stone-900">My Story</h2>
                 <p className="text-stone-400 font-medium">Design & Development</p>
               </div>
            </div>
            <div className="space-y-6 text-stone-600 text-right leading-relaxed text-lg">
              <p>
                My passion for UI/UX Design began when I noticed how often we struggle with poorly designed software. I realized that code is powerful, but design is how people experience that power.
              </p>
              <p>
                Over the past years, I've transitioned from being just a coder into someone who designs with psychology and human empathy in mind. This allows me to craft products that aren't just functional, but an absolute joy to use.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default About
