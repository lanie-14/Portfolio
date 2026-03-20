import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Code2, Grid3X3, Code, Layers, Wrench, Users, Terminal, Braces, FileCode, Database, Coffee, Cpu, Server, Palette, LayoutGrid, GitBranch, Github, Figma, Users2, MessageCircle, ClipboardList, Lightbulb, Handshake, Clock, Folder, Mail, Zap, Layout, Monitor, Shield, Box, Rocket, Trophy } from 'lucide-react'

const Skills = () => {
  const [filter, setFilter] = useState('all')

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
  }, [filter]);

  const categories = [
    { id: 'all', label: 'All Skills', icon: Grid3X3 },
    { id: 'programming', label: 'Programming', icon: Code },
    { id: 'database', label: 'Database', icon: Database },
    { id: 'multimedia', label: 'Multimedia', icon: Palette }
  ]

  const skillsData = [
    { id: 1, category: 'programming', title: 'CSS', level: 85, label: 'Advanced', icon: Layout, color: 'indigo' },
    { id: 2, category: 'programming', title: 'JavaScript', level: 80, label: 'Advanced', icon: Braces, color: 'cyan' },
    { id: 3, category: 'programming', title: 'Python', level: 70, label: 'Intermediate', icon: Terminal, color: 'rose' },
    { id: 4, category: 'programming', title: 'Laravel', level: 75, label: 'Intermediate', icon: FileCode, color: 'indigo' },
    { id: 5, category: 'database', title: 'MySQL', level: 80, label: 'Advanced', icon: Database, color: 'cyan' },
    { id: 6, category: 'multimedia', title: 'OBS Studio', level: 85, label: 'Advanced', icon: Monitor, color: 'rose' }
  ]

  const filteredSkills = filter === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === filter)

  return (
    <div className="pt-32 pb-24 overflow-hidden min-h-screen">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-4xl mb-20 fade-in">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border-cyan-500/20">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-bold tracking-widest text-cyan-100 uppercase">Capabilities Matrix</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-headline font-black text-white mb-8">
            TECH <span className="text-gradient">STACK</span> & ARSENAL
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            A diverse toolkit built through years of organizational leadership and technical exploration.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-4 mb-20 fade-in">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-bold transition-all duration-500 border-white/5 ${
                filter === cat.id 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 -translate-y-1' 
                : 'glass text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <cat.icon className={`w-5 h-5 ${filter === cat.id ? 'text-white' : 'text-slate-500'}`} />
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, index) => (
            <SkillBlock key={skill.id} skill={skill} index={index} />
          ))}
        </div>

        {/* Learning section */}
        <section className="mt-32 bg-slate-900 border border-slate-700 rounded-lg p-12 relative overflow-hidden group">
            <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                <div className="w-24 h-24 bg-indigo-500 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                    <Rocket className="w-12 h-12 text-white fill-current" />
                </div>
                <div className="text-center md:text-left flex-1">
                    <h3 className="text-white text-3xl font-bold mb-4 italic tracking-tight">Currently Learning: Next.js & Advanced AI Integration</h3>
                    <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">
                        I'm constantly pushing my boundaries by exploring new technologies and modern frameworks. My current focus is on mastering full-stack capabilities with Next.js and exploring how AI can streamline complex organizational workflows.
                    </p>
                </div>
                <Link to="/contact" className="btn btn-primary whitespace-nowrap">
                   Partner Up
                </Link>
            </div>
        </section>
      </div>
    </div>
  )
}

const SkillBlock = ({ skill, index }) => (
  <div className={`bg-slate-900 border-2 border-slate-700 rounded-lg p-6 transition-all duration-300 hover:border-slate-600 hover:bg-slate-800`}>
    <div className="flex items-center gap-4 mb-8">
      <div className={`w-12 h-12 bg-${skill.color}-500 rounded-md flex items-center justify-center`}>
        <skill.icon className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold text-white uppercase tracking-tight">{skill.title}</h3>
        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{skill.label}</span>
      </div>
    </div>
    
    <div className="space-y-3">
        <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Proficiency</span>
            <span className="text-white font-bold">{skill.level}%</span>
        </div>
        <div className="skill-bar">
            {/* Using inline styles for dynamic width which isn't easy with pure tailwind without JIT for arbitrary values from data */}
            <div 
                className="skill-progress" 
                style={{ 
                    width: `${skill.level}%`,
                    background: `linear-gradient(to right, #6366f1, #06b6d4)`
                }}
            ></div>
        </div>
    </div>
  </div>
)

export default Skills
