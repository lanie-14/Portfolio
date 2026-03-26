import React from 'react'
import { Link } from 'react-router-dom'
import { Palette, PenTool, LayoutGrid, ArrowUpRight } from 'lucide-react'

const Home = () => {
  return (
    <div className="py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Hero Section (Reversed) */}
        <section className="mb-28 text-center md:text-right flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <span className="inline-block py-1 px-3 rounded-full bg-rose-50 text-rose-600 text-sm font-bold tracking-widest uppercase mb-6">
              UX/UI Designer
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-stone-900 mb-6 tracking-tight leading-tight">
              Designing <br className="hidden md:block" /> Human-Centric <br className="hidden md:block" /> Experiences.
            </h1>
            <p className="text-lg md:text-xl text-stone-500 mb-8 max-w-xl md:ml-auto leading-relaxed">
              Hi, I'm Kyla Mae Dela Cruz. I specialize in interface design, wireframing, and creating pixel-perfect frontend code that users actually love to interact with.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center md:justify-end justify-center text-sm font-bold">
              <Link to="/about" className="w-full sm:w-auto text-center bg-transparent border-2 border-stone-200 text-stone-600 px-8 py-4 rounded-xl hover:border-stone-300 hover:text-stone-900 transition-colors">
                Learn About Me
              </Link>
              <Link to="/projects" className="w-full sm:w-auto text-center bg-stone-900 text-white px-8 py-4 rounded-xl hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl">
                See My Works
              </Link>
            </div>
          </div>
          
          <div className="flex-1 hidden md:flex justify-start">
             {/* Abstract Design Element to fill the hero */}
             <div className="w-80 h-96 bg-gradient-to-tr from-amber-50 to-rose-100 rounded-full blur-3xl opacity-70"></div>
          </div>
        </section>

        {/* Areas of Expertise */}
        <section className="mb-24">
          <div className="flex items-center justify-center md:justify-end mb-8 text-center md:text-right">
            <h2 className="text-3xl font-black text-stone-900">What I Can Do</h2>
          </div>
          {/* Swapped order of the grid elements logically */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 mr-0 ml-auto group-hover:-translate-y-2 transition-transform">
                <PenTool className="text-rose-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3 text-right">Prototyping</h3>
              <p className="text-stone-500 leading-relaxed text-right">Building high-fidelity interactive prototypes in Figma to simulate genuine user flows effortlessly.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:-translate-y-2 transition-transform">
                <LayoutGrid className="text-rose-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3 text-center">UX Research</h3>
              <p className="text-stone-500 leading-relaxed text-center">Understanding user behaviors through journey mapping, wireframes, and usability testing.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform">
                <Palette className="text-rose-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Visual Design</h3>
              <p className="text-stone-500 leading-relaxed">Crafting beautiful, modern, and accessible interfaces that align perfectly with brand identities.</p>
            </div>
          </div>
        </section>

        {/* Small CTA Banner (Reversed) */}
        <section className="bg-stone-900 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row-reverse items-center justify-between gap-8 text-center md:text-right">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Have an idea in mind?</h2>
            <p className="text-stone-400 text-lg max-w-lg md:ml-auto">Let's collaborate to turn your vision into a practical, breathtaking digital reality.</p>
          </div>
          <a href="mailto:kylamae@example.com" className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-500 text-white font-bold px-8 py-4 rounded-xl transition-colors whitespace-nowrap">
            <ArrowUpRight className="w-5 h-5" /> Let's Talk
          </a>
        </section>
        
      </div>
    </div>
  )
}

export default Home
