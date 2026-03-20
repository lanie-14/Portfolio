import React, { useEffect } from 'react'
import { User, Download, Map, Award, GraduationCap, Heart, Users, Lightbulb, Rocket, Flag, Target, Sparkles, TrendingUp, Users2, Calendar, Crown, Laptop, Compass, Check, CheckCircle, HeartHandshake, Mail, Github, Code, Zap } from 'lucide-react'

const About = () => {
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
    <div className="pt-32 pb-20 overflow-hidden">
      {/* Background Glow */}
      <div className="fixed top-0 right-0 -z-10 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container-custom">
        {/* Page Header */}
        <div className="max-w-4xl mb-20 fade-in">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border-indigo-500/20">
            <User className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-bold tracking-widest text-indigo-100 uppercase">Profile Odyssey</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-headline font-black text-white mb-8">
            THE STORY BEHIND THE <span className="text-gradient">CODE</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            A journey of leadership, technical exploration, and the relentless pursuit of digital excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Main Content Area */}
          <div className="lg:col-span-7 space-y-12">
            {/* Mission Section */}
            <section className="bg-slate-900 border-2 border-slate-700 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Target className="text-indigo-500 w-6 h-6" /> Mission & Vision
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6 text-lg">
                I'm passionate about building efficient solutions through programming, database management, and multimedia production. With a strong foundation in web development and emerging technologies, I continue to expand my technical expertise.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                    <h3 className="text-indigo-400 font-bold mb-2 uppercase tracking-wider text-xs">Programming</h3>
                    <p className="text-white font-medium">JavaScript, Python, Laravel</p>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                    <h3 className="text-cyan-400 font-bold mb-2 uppercase tracking-wider text-xs">Other Skills</h3>
                    <p className="text-white font-medium">MySQL, CSS, OBS Multimedia</p>
                </div>
              </div>
            </section>

            {/* Values Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <ValueItem icon={Heart} title="Integrity" desc="Doing what's right, especially when no one is watching." color="rose" />
              <ValueItem icon={Lightbulb} title="Innovation" desc="Constantly looking for new ways to solve old problems." color="indigo" />
              <ValueItem icon={Users2} title="Collaboration" desc="Achieving together what we cannot do alone." color="cyan" />
              <ValueItem icon={Flag} title="Leadership" desc="Empowering others to reach their full potential." color="amber" />
            </div>

            {/* Timeline */}
            <section className="bg-slate-900 border-2 border-slate-700 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
                <Compass className="text-cyan-500 w-6 h-6" /> Career Roadmap
              </h2>
              <div className="space-y-12 relative before:absolute before:left-6 before:top-2 before:bottom-2 before:w-px before:bg-white/10">
                <TimelinePoint 
                    year="2025 - PRESENT" 
                    title="Web Developer & Multimedia Creator" 
                    desc="Building full-stack applications with JavaScript, Laravel, and MySQL." 
                    color="indigo" 
                />
                <TimelinePoint 
                    year="2023 - 2024" 
                    title="Tech Learning Journey" 
                    desc="Exploring frontend development, backend frameworks, and digital production." 
                    color="cyan" 
                />
                <TimelinePoint 
                    year="2022" 
                    title="The Genesis" 
                    desc="Started the journey into the tech world during first year of college." 
                    color="rose" 
                />
              </div>
            </section>
          </div>

          {/* Side Profile Bar */}
          <div className="lg:col-span-5 space-y-8 sticky top-32">
            <div className="bg-slate-900 border-2 border-slate-700 rounded-lg overflow-hidden">
                {/* Profile Placeholder */}
                <div className="w-full aspect-[4/5] bg-slate-800 relative flex items-center justify-center overflow-hidden group">
                    <img 
                      src="/images/arvin-profile.png" 
                      alt="Arvin Dela Rosa" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                    />
                </div>
                <div className="p-8 border-t border-slate-700">
                    <h3 className="text-2xl font-bold text-white mb-2">Arvin Dela Rosa</h3>
                    <p className="text-indigo-400 font-bold text-sm uppercase tracking-widest mb-2">Passionate Coder with Web Dev Vibes</p>
                    <p className="text-cyan-400 font-bold text-xs uppercase tracking-widest mb-6">JavaScript • Python • Laravel • MySQL • OBS</p>

                    <div className="space-y-4 mb-8">
                        <InfoRow icon={Map} label="Location" val="Philippines" />
                        <InfoRow icon={Mail} label="Email" val="arvindelarosa@gmail.com" />

                        <InfoRow icon={Crown} label="Role" val="Tech Team" />
                    </div>
                    <a href="#" className="btn btn-primary w-full group">
                        <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                        <span>Download Dossier</span>
                    </a>
                </div>
            </div>

            {/* Quick Connect */}
            <div className="bg-slate-900 border-2 border-slate-700 p-6 rounded-lg flex justify-between items-center">
                <span className="text-white font-bold opacity-60">SOCIAL</span>
                <div className="flex gap-4">
                    <SocialLite icon={Github} />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ValueItem = ({ icon: Icon, title, desc, color }) => (
    <div className="bg-slate-900 border-2 border-slate-700 rounded-lg p-6 transition-all hover:border-slate-600 hover:bg-slate-800">
        <div className={`w-12 h-12 bg-${color}-500 rounded-md flex items-center justify-center mb-6`}>
            <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-white font-bold mb-3">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
)

const TimelinePoint = ({ year, title, desc, color }) => (
    <div className="relative pl-14 group">
        <div className={`absolute left-0 top-0 w-12 h-12 bg-slate-800 border-2 border-slate-700 rounded-lg flex items-center justify-center z-10`}>
            <div className={`w-2 h-2 bg-${color}-500 rounded-full`}></div>
        </div>
        <div className="text-xs font-black tracking-widest text-slate-500 mb-2 uppercase">{year}</div>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 text-sm">{desc}</p>
    </div>
)

const InfoRow = ({ icon: Icon, label, val }) => (
    <div className="flex items-center gap-4 text-sm">
        <div className="w-8 h-8 bg-slate-800 border border-slate-700 rounded-md flex items-center justify-center text-slate-500">
            <Icon className="w-4 h-4" />
        </div>
        <div>
            <span className="text-slate-500 block text-[10px] uppercase font-bold tracking-tighter">{label}</span>
            <span className="text-slate-200 font-medium">{val}</span>
        </div>
    </div>
)

const SocialLite = ({ icon: Icon }) => (
    <button className="w-10 h-10 bg-slate-800 border border-slate-700 hover:bg-slate-700 rounded-md flex items-center justify-center text-slate-400 hover:text-white transition-all">
        <Icon className="w-5 h-5" />
    </button>
)

export default About
