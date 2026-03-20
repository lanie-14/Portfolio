import React, { useEffect } from 'react'
import { BookOpen, Share2, Mail, Github, Twitter, Facebook, Link as LinkIcon, CheckCircle, ChevronRight, Star, ArrowRight, Zap, Target, MessageSquare, Quote } from 'lucide-react'

const Reflection = () => {
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
  }, []);

  const reflections = [
    {
      id: '01',
      question: "Which technologies powered this digital ecosystem?",
      answer: "This architecture utilizes React 18 for high-performance UI, Tailwind CSS for a custom utility-first design system, and Lucide React for consistent vector iconography. The result is a lightning-fast, glassmorphism-inspired SPA that prioritizes user experience and visual excellence.",
      color: "indigo"
    },
    {
      id: '02',
      question: "What were the high-impact success points?",
      answer: "The 가장 effective phase was the architectural transition to a component-based model. This allowed for precise control over animations and state-driven UI elements, making the portfolio feel like a cohesive, living project rather than a static resume.",
      color: "cyan"
    },
    {
      id: '03',
      question: "Navigating Technical Crossroads",
      answer: "The most challenging technical hurdle was engineering a performant glassmorphism design that maintained high FPS on mobile devices. This required careful optimization of backdrop-blurs and custom hardware-accelerated animations.",
      color: "rose"
    },
    {
      id: '04',
      question: "Horizon Scanning: Next-Gen Goals",
      answer: "My strategic focus is now shifting towards mastering Next.js for server-side optimization and exploring AI integration within organizational tools. I aim to build systems that don't just store data, but actively streamline human workflows.",
      color: "amber"
    }
  ]

  return (
    <div className="pt-32 pb-24 overflow-hidden min-h-screen">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-4xl mb-24 fade-in">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border-indigo-500/20">
            <Quote className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-bold tracking-widest text-indigo-100 uppercase">Strategic Insights</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-headline font-black text-white mb-8">
            REFLECTIONS ON <span className="text-gradient">GROWTH</span> & INNOVATION
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl italic border-l-4 border-indigo-500/30 pl-8">
            "The best way to predict the future is to invent it." — Analyzing the journey from static code to dynamic digital systems.
          </p>
        </div>

        {/* Reflections Content */}
        <div className="grid lg:grid-cols-2 gap-10 mb-32">
          {reflections.map((ref, i) => (
            <div key={ref.id} className={`glass-card group hover:!border-${ref.color}-500/30 slide-up stagger-delay-${i % 4}`}>
                <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                        <span className={`text-4xl font-headline font-black text-${ref.color}-500/20 group-hover:text-${ref.color}-500/40 transition-colors`}>{ref.id}</span>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6 group-hover:text-indigo-400 transition-colors tracking-tight">{ref.question}</h2>
                        <p className="text-slate-400 leading-relaxed text-lg italic group-hover:text-slate-300 transition-colors">
                            "{ref.answer}"
                        </p>
                    </div>
                </div>
            </div>
          ))}
        </div>

        {/* Closing Call to Action */}
        <section className="fade-in">
          <div className="glass-card !p-12 md:!p-20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-indigo-600/20 transition-all duration-1000"></div>
            
            <div className="max-w-3xl mx-auto text-center relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-3xl shadow-indigo-500/20 transform group-hover:rotate-12 transition-transform duration-700">
                    <Share2 className="w-10 h-10 text-white fill-current" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">Found these insights <span className="text-gradient">Valuable</span>?</h2>
                <p className="text-xl text-slate-400 mb-12 italic">
                    I believe in open collaboration and shared learning. If you're building something significant or just want to discuss technical strategy, let's connect.
                </p>
                
                <div className="flex flex-wrap justify-center gap-6 mb-16">
                    <SocialLite icon={Mail} label="Email" href="mailto:arvindelarosa@gmail.com" color="indigo" />
                    <SocialLite icon={Github} label="GitHub" href="https://github.com/arvindelarosa" color="slate" />
                </div>

                <div className="pt-8 border-t border-white/5">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-6">Distribute this Transmission</p>
                    <div className="flex justify-center gap-4">
                        <ShareNode icon={Twitter} />
                        <ShareNode icon={Facebook} />
                        <ShareNode icon={LinkIcon} />
                    </div>
                </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

const SocialLite = ({ icon: Icon, label, href, color }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`btn btn-secondary !px-8 group hover:!border-${color}-500/30`}>
        <Icon className={`w-5 h-5 text-${color}-400 group-hover:text-${color}-300 transition-colors`} />
        <span>{label}</span>
    </a>
)

const ShareNode = ({ icon: Icon }) => (
    <button className="w-12 h-12 glass hover:bg-white/10 rounded-2xl flex items-center justify-center text-slate-500 hover:text-white transition-all border-white/5">
        <Icon className="w-5 h-5" />
    </button>
)

export default Reflection
