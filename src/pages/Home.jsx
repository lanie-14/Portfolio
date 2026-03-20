import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, ArrowRight, Mail, Code, Users, Code2, Braces, Terminal, Component, GitBranch, Trophy, Target, Rocket, BookOpen, Folder, Lightbulb, Users2, TrendingUp, Download, Github, Zap, User, UserCheck } from 'lucide-react'

const Home = () => {
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

  return (
    <div className="relative isolate">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#6366f1] to-[#06b6d4] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>

      {/* Hero Section */}
      <section className="pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in max-w-2xl">
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 border-indigo-500/20">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-semibold tracking-wide text-cyan-100 uppercase">Available for Next Big Project</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-headline font-black text-white mb-8 leading-tight tracking-tighter">
                CREATING <span className="text-gradient">DIGITAL</span> REVOLUTION<span className="text-indigo-500">.</span>
              </h1>
              
              <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-xl">
                I'm a Leader-Developer dedicated to building high-performance, aesthetically stunning digital solutions that push the boundaries of modern web standards.
              </p>

              <div className="flex flex-wrap gap-6 mb-16">
                <Link to="/projects" className="btn btn-primary group">
                  <span>Explore Work</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="https://web.facebook.com/arvin.delarosa.338/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  <Mail className="w-5 h-5" />
                  <span>Get In Touch</span>
                </a>
              </div>

              {/* Impact Stats */}
              <div className="grid grid-cols-3 gap-8">
                <StatItem value="10+" label="Projects Done" />
                <StatItem value="5+" label="Tech Stack" />
                <StatItem value="3+" label="Years Lead" />
              </div>
            </div>

            <div className="slide-up stagger-delay-1 relative hidden lg:block">
              <div className="relative">
                {/* Image Placeholder (Astig Style) */}
                <div className="relative w-[450px] aspect-[4/5] mx-auto group">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-cyan-600/20 rounded-3xl blur-2xl group-hover:scale-105 transition-transform duration-700"></div>
                    <div className="absolute inset-0 glass rounded-3xl border-white/10 overflow-hidden group-hover:border-white/20 transition-all duration-700">
                      <img 
                        src="/images/arvin-profile.png" 
                        alt="Arvin Dela Rosa" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                      />
                    </div>
                    {/* Floating Cards */}
                    <div className="absolute -top-6 -right-6 glass-light px-6 py-4 rounded-2xl shadow-strong animate-float" style={{ animationDelay: '1s' }}>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center">
                                <Code className="text-white w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-white font-bold">Developer</div>
                                <div className="text-xs text-slate-400 uppercase tracking-widest">Full-Stack</div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute -bottom-6 -left-6 glass-light px-6 py-4 rounded-2xl shadow-strong animate-float">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
                                <UserCheck className="text-white w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-white font-bold">Leader</div>
                                <div className="text-xs text-slate-400 uppercase tracking-widest">Team Mgmt</div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-24 bg-slate-950/50">
        <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-5xl font-headline font-bold mb-6">Mastering the <span className="text-gradient">Tools</span></h2>
                <p className="text-slate-400">Combining technical craftsmanship with strategic leadership.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <SkillCard icon={Code2} title="React" color="indigo" />
                <SkillCard icon={Braces} title="JavaScript" color="cyan" />
                <SkillCard icon={Terminal} title="Node.js" color="rose" />
                <SkillCard icon={Trophy} title="Leadership" color="amber" />
            </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32">
        <div className="container-custom">
            <div className="flex items-end justify-between mb-16 fade-in">
                <div>
                    <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4">SELECTED <span className="text-gradient">WORKS</span></h2>
                    <p className="text-slate-400 max-w-lg">A handpicked selection of my most challenging and impactful digital creations.</p>
                </div>
                <Link to="/projects" className="hidden md:flex items-center gap-2 text-indigo-400 font-bold hover:text-white transition-colors">
                    View All Works <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
                <ProjectFeature 
                    title="Clinicore System" 
                    desc="High-performance healthcare inventory management." 
                    tag="Academic" 
                    color="indigo" 
                />
                <ProjectFeature 
                    title="Vista Dal Mare" 
                    desc="Luxury beach resort reservation ecosystem." 
                    tag="Personal" 
                    color="cyan" 
                />
            </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-24">
        <div className="container-custom">
            <div className="glass-card !p-12 md:!p-20 text-center relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
                
                <h2 className="text-4xl md:text-6xl font-headline font-bold mb-8 text-white">Let's build something <span className="text-gradient">Epic</span></h2>
                <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto italic">
                    I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                    <a href="https://web.facebook.com/arvin.delarosa.338/" target="_blank" rel="noopener noreferrer" className="btn btn-primary !px-10 !py-4 text-lg">
                        Start a Conversation
                    </a>
                    <div className="flex gap-4">
                        <SocialBtn icon={Github} href="https://github.com/arvindelarosa" />
                    </div>

                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

const StatItem = ({ value, label }) => (
  <div className="text-left">
    <div className="text-3xl font-headline font-black text-white mb-1 group-hover:text-indigo-400 transition-colors">{value}</div>
    <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 leading-none">{label}</div>
  </div>
)

const SkillCard = ({ icon: Icon, title, color }) => (
    <div className="glass-card !p-8 text-center group cursor-pointer">
        <div className={`w-16 h-16 mx-auto mb-6 bg-${color}-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-${color}-500/20`}>
            <Icon className={`w-8 h-8 text-${color}-400 group-hover:text-white transition-colors`} />
        </div>
        <h3 className="text-white font-bold tracking-tight text-lg">{title}</h3>
    </div>
)

const ProjectFeature = ({ title, desc, tag, color }) => (
    <div className="group relative overflow-hidden rounded-3xl glass-card !p-0 aspect-video md:aspect-[16/10]">
        <div className="absolute inset-0 bg-slate-900 group-hover:bg-slate-800/50 transition-colors duration-700">
            {/* Project Image Placeholder */}
            <div className="w-full h-full flex items-center justify-center text-slate-700 font-headline font-black text-8xl opacity-10 uppercase select-none group-hover:scale-110 transition-transform duration-700">
                {title.split(' ')[0]}
            </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <span className={`badge mb-4 !bg-${color}-500/20 !text-${color}-400 border-${color}-500/30`}>{tag}</span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{title}</h3>
            <p className="text-slate-400 mb-6 group-hover:opacity-100 opacity-60 transition-opacity">{desc}</p>
            <Link to="/projects" className="flex items-center gap-2 text-white font-bold text-sm tracking-widest uppercase group/btn">
                <span>View Details</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
            </Link>
        </div>
    </div>
)

const SocialBtn = ({ icon: Icon, href }) => (
    <a href={href} className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-slate-300 hover:text-white hover:border-white/30 transition-all shadow-xl">
        <Icon className="w-6 h-6" />
    </a>
)

export default Home
