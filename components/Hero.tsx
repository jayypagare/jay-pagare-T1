import React from 'react';
import { RESUME_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-dark">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-brand-accent/20 blur-[120px] rounded-full pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          
          <div className="flex-1 space-y-10 animate-slide-up">
            <div>
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-accent/30 bg-brand-accent/5 text-brand-accent text-sm font-medium mb-6">
                 <span className="relative flex h-2 w-2">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
                 </span>
                 Available for Freelance & Full-time
               </div>
               
               <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.95] tracking-tight text-white">
                 VISUAL <br />
                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-accent via-purple-400 to-white">
                   INNOVATOR.
                 </span>
               </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-brand-muted max-w-xl font-light leading-relaxed">
              I'm <span className="text-white font-medium">{RESUME_DATA.name}</span>. 
              Turning complex briefs into viral-ready, emotionally resonant designs through 3D motion and brand identity.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#work" 
                className="px-8 py-4 bg-white text-brand-dark font-bold rounded-full hover:bg-brand-accent hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(99,102,241,0.4)]"
              >
                View Selected Work
              </a>
              <a 
                href={`mailto:${RESUME_DATA.contact.email}`}
                className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all duration-300 flex items-center gap-2 group"
              >
                Contact Me
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Visual Element */}
          <div className="flex-1 w-full max-w-lg aspect-[4/5] relative hidden md:block animate-fade-in [animation-delay:200ms]">
             <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-purple-900/20 rounded-[2rem] transform rotate-6 scale-95 blur-xl"></div>
             <div className="absolute inset-0 border border-white/10 bg-brand-card/50 backdrop-blur-md rounded-[2rem] overflow-hidden group shadow-2xl">
                {/* Simulated 3D Environment or Work Preview */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-dark/90 z-10"></div>
                <img 
                  src="https://picsum.photos/800/1000?grayscale" 
                  alt="Creative Visual" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                   <p className="text-brand-accent font-mono text-xs tracking-wider mb-2">FEATURED SKILL</p>
                   <h3 className="text-3xl font-display font-bold text-white mb-2">3D Motion & VFX</h3>
                   <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                     Blending Blender 3D with After Effects to create surreal, trend-based visual content.
                   </p>
                </div>
             </div>
          </div>

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest text-white">Scroll</span>
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;