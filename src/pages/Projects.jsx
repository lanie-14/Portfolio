import React, { useState, useEffect } from 'react'
import { FolderOpen, Search, X, Filter, RotateCcw, Calendar, ExternalLink, Github, Maximize2, Clock, AlertCircle, Lightbulb, Trophy, BookOpen, ChevronRight, Star, ArrowRight, Code2, Mail, Zap, Layout, Monitor, Box, Layers } from 'lucide-react'

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [sortOrder, setSortOrder] = useState('recent')
  const [selectedProject, setSelectedProject] = useState(null)

  const projectsData = [
    {
        id: 1,
        title: "Infrax",
        category: "personal",
        date: "2025-06-10",
        duration: "2 months",
        shortDescription: "Sleek mobile application for infrastructure monitoring.",
        fullDescription: "A modern mobile app design containing 20+ screens, focused on infrastructure management and real-time monitoring. Built to streamline complex data visualization into a mobile-first experience.",
        imageAlt: "Infrax Mobile App Design",
        technologies: ["React Native", "Figma", "Tailwind CSS"],
        challenges: ["Mapping complex infrastructure nodes", "Ensuring high-performance animations"],
        solutions: ["Modular component architecture", "Hardware-accelerated transitions"],
        githubUrl: "https://github.com/arvindelarosa",
        color: "indigo"
    },
    {
        id: 2,
        title: "Brgy Profiling System",
        category: "academic",
        date: "2025-08-20",
        duration: "3 months",
        shortDescription: "AI-powered community governance platform.",
        fullDescription: "A comprehensive digital governance platform designed to replace manual processes in local communities. Features resident profiling, certificate issuance, and AI-driven data analysis for better decision making.",
        imageAlt: "Brgy Profiling System - SmartBarangay",
        technologies: ["React", "Laravel", "MySQL", "AI Integration"],
        challenges: ["Handling sensitive resident data", "Automating document generation"],
        solutions: ["Secure database encryption", "Real-time PDF generation engine"],
        githubUrl: "https://github.com/arvindelarosa",
        color: "cyan"
    }
  ]

  useEffect(() => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .slide-up, .scale-in').forEach(el => {
        observer.observe(el);
    });

    return () => observer.disconnect();
  }, [searchQuery, categoryFilter, sortOrder])

  const filteredProjects = projectsData
    .filter(p => categoryFilter === 'all' || p.category === categoryFilter)
    .filter(p => {
        const text = `${p.title} ${p.shortDescription} ${p.technologies.join(' ')}`.toLowerCase()
        return text.includes(searchQuery.toLowerCase())
    })
    .sort((a, b) => {
        if (sortOrder === 'recent') return new Date(b.date) - new Date(a.date)
        if (sortOrder === 'oldest') return new Date(a.date) - new Date(b.date)
        return a.title.localeCompare(b.title)
    })

  return (
    <div className="pt-32 pb-24 min-h-screen overflow-hidden">
      {/* Dynamic BG */}
      <div className="fixed top-0 left-1/4 -z-10 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container-custom">
        {/* Header */}
        <div className="max-w-4xl mb-20 fade-in">
          <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-700 px-4 py-2 rounded-lg mb-6">
            <Layers className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-bold tracking-widest text-slate-300 uppercase">Project Forge</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-headline font-black text-white mb-8">
            DIGITAL <span className="text-gradient">CREATIONS</span> & CASE STUDIES
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            A comprehensive look at the systems I've built, the challenges I've overcome, and the solutions I've delivered.
          </p>
        </div>

        {/* Controls Area */}
        <div className="bg-slate-900 border-2 border-slate-700 rounded-lg p-8 mb-12 fade-in">
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-grow relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input 
                        type="text" 
                        placeholder="Scan for technologies, titles, or categories..."
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg py-4 pl-12 pr-12 focus:border-indigo-600 transition-all text-white outline-none placeholder-slate-500"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {searchQuery && (
                        <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white">\n                            <X className="w-5 h-5" />
                        </button>
                    )}
                </div>
                <div className="flex flex-wrap gap-4 items-center">
                    <div className="flex gap-2 p-1 bg-slate-800 border border-slate-700 rounded-lg">
                        {['all', 'academic', 'personal'].map(cat => (
                            <button 
                                key={cat} 
                                onClick={() => setCategoryFilter(cat)}
                                className={`px-5 py-2 rounded-md text-xs font-bold uppercase transition-all duration-300 ${categoryFilter === cat ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <select 
                        className="bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-slate-400 text-xs font-bold uppercase outline-none focus:border-indigo-600"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="recent">Sort by Newest</option>
                        <option value="oldest">Sort by Oldest</option>
                        <option value="name">Sort by Title</option>
                    </select>
                </div>
            </div>
        </div>

        {/* Results Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((p, i) => (
              <ProjectBlock key={p.id} project={p} delay={`stagger-delay-${i % 3}`} onOpen={() => setSelectedProject(p)} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32 fade-in">
            <div className="w-24 h-24 bg-rose-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-rose-500/20">
                <Search className="w-12 h-12 text-rose-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 italic">No matching projects found.</h3>
            <p className="text-slate-400 mb-8">Try adjusting your scan parameters or search query.</p>
            <button onClick={() => {setSearchQuery(''); setCategoryFilter('all');}} className="btn btn-secondary">
                <RotateCcw className="w-5 h-5" /> Reset Matrix
            </button>
          </div>
        )}
      </div>

      {/* Modal View */}
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  )
}

const ProjectBlock = ({ project, delay, onOpen }) => (
    <div className="bg-slate-900 border-2 border-slate-700 rounded-lg overflow-hidden cursor-pointer transition-all hover:border-slate-600 hover:bg-slate-800" onClick={onOpen}>
        <div className="relative aspect-video overflow-hidden bg-slate-800">
            <div className="absolute inset-0 flex items-center justify-center text-slate-700 font-black text-6xl opacity-30 uppercase">
                {project.title.split(' ')[0]}
            </div>
            <div className="absolute top-4 left-4">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 bg-slate-800 px-3 py-1 rounded-md">{project.category}</span>
            </div>
        </div>
        <div className="p-6 border-t border-slate-700">
            <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">{project.title}</h3>
            <p className="text-slate-400 text-sm mb-4 line-clamp-2 italic">{project.shortDescription}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map(t => <span key={t} className="text-[9px] font-bold uppercase tracking-widest text-slate-500 bg-slate-800 px-2 py-1 rounded">{t}</span>)}
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                    <Calendar className="w-4 h-4" /> {project.date.split('-')[0]}
                </div>
                <div className="flex gap-2">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-slate-800 border border-slate-700 rounded-md flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                        <Github className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
    </div>
)

const ProjectModal = ({ project, onClose }) => (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl animate-in fade-in" onClick={onClose}></div>
        <div className="glass-card !p-0 w-full max-w-5xl max-h-[90vh] overflow-y-auto relative animate-in scale-in z-10 border-white/10 shadow-3xl">
            <button onClick={onClose} className="absolute top-6 right-6 z-20 w-12 h-12 glass hover:bg-white/10 rounded-2xl flex items-center justify-center text-white transition-all group">
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
            </button>
            <div className="relative aspect-video md:aspect-[21/9] overflow-hidden">
                <div className="absolute inset-0 bg-slate-900 border-b border-white/5">
                    <div className="w-full h-full flex items-center justify-center text-slate-800 font-black text-9xl opacity-10 uppercase">{project.title.split(' ')[0]}</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
            </div>
            <div className="p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className={`badge !bg-${project.color}-500/20 !text-${project.color}-400 border-${project.color}-500/30`}>{project.category}</span>
                    <span className="text-slate-500 font-bold uppercase tracking-widest text-xs flex items-center gap-2"><Calendar className="w-4 h-4" /> {project.date}</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">{project.title.toUpperCase()}</h2>
                
                <div className="grid md:grid-cols-12 gap-12">
                    <div className="md:col-span-8 space-y-12">
                        <section>
                            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-indigo-400 mb-6 flex items-center gap-3">
                                <Zap className="w-4 h-4" /> Mission Overview
                            </h3>
                            <p className="text-xl text-slate-300 leading-relaxed italic">
                                {project.fullDescription}
                            </p>
                        </section>
                        <div className="grid sm:grid-cols-2 gap-10">
                            <div>
                                <h3 className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                                    <AlertCircle className="w-4 h-4 text-rose-500" /> Technical Obstacles
                                </h3>
                                <ul className="space-y-4">
                                    {project.challenges.map(c => <li key={c} className="text-slate-400 text-sm flex items-start gap-3"><ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5" /> {c}</li>)}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                                    <Lightbulb className="w-4 h-4 text-cyan-400" /> Implemented Solutions
                                </h3>
                                <ul className="space-y-4">
                                    {project.solutions.map(s => <li key={s} className="text-slate-400 text-sm flex items-start gap-3"><Star className="w-4 h-4 text-cyan-400 mt-0.5" /> {s}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-4 space-y-10">
                        <div className="glass !p-8 rounded-3xl border-white/5">
                            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map(t => <span key={t} className="glass-light px-3 py-1 rounded-lg text-[10px] font-bold text-white uppercase tracking-wider">{t}</span>)}
                            </div>
                        </div>
                        <div className="glass !p-8 rounded-3xl border-white/5">
                             <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Connect</h3>
                             <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">
                                <Github className="w-5 h-5" /> Source Node
                             </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Projects
