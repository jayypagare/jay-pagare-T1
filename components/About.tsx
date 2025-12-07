import React from 'react';
import { RESUME_DATA } from '../constants';
import AIChat from './AIChat';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              About <span className="text-brand-accent">Me</span>.
            </h2>
            <div className="space-y-6 text-lg text-gray-400 font-light leading-relaxed">
              <p>
                {RESUME_DATA.summary}
              </p>
              <p>
                My journey has taken me from leading campaigns at real estate giants to creating viral fan art that resonates with global audiences. I thrive at the intersection of <span className="text-white font-medium">technical precision</span> and <span className="text-white font-medium">creative chaos</span>.
              </p>
              
              <div className="pt-6">
                <h3 className="text-xl font-display font-bold text-white mb-4">Core Competencies</h3>
                <div className="flex flex-wrap gap-2">
                  {RESUME_DATA.skills.expertise.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm hover:border-brand-accent/50 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
             {/* Decorative background behind chat */}
             <div className="absolute -inset-4 bg-gradient-to-r from-brand-accent/20 to-purple-600/20 blur-2xl rounded-[30px] opacity-50"></div>
             <div className="relative z-10">
                <AIChat />
             </div>
             <p className="text-center text-xs text-brand-muted mt-4">
               Interact with my digital twin to learn more about my background.
             </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;