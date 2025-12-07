import React from 'react';
import { RESUME_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-brand-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-full h-[500px] bg-gradient-to-b from-brand-accent/5 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-display font-bold mb-20 text-center text-white">
          Professional <span className="text-brand-accent">Journey</span>.
        </h2>

        <div className="relative">
          {/* Continuous Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-accent via-white/10 to-transparent md:-translate-x-1/2"></div>
          
          <div className="space-y-20">
            {RESUME_DATA.experience.map((job, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Node */}
                <div className="absolute left-[20px] md:left-1/2 w-4 h-4 bg-brand-dark border-4 border-brand-accent rounded-full -translate-x-[7px] md:-translate-x-[7px] mt-1.5 z-20 shadow-[0_0_15px_rgba(99,102,241,0.6)]"></div>

                {/* Date Side */}
                <div className={`pl-16 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'}`}>
                   <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-brand-accent font-mono text-sm font-medium mb-2 md:mb-0">
                     {job.period}
                   </span>
                </div>

                {/* Content Side */}
                <div className={`pl-16 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'}`}>
                   <div className="bg-brand-card/50 backdrop-blur-sm border border-white/5 p-6 rounded-2xl hover:border-brand-accent/30 transition-all duration-300">
                     <h3 className="text-xl font-bold text-white mb-1">{job.role}</h3>
                     <h4 className="text-lg text-brand-muted mb-6">{job.company}</h4>
                     
                     <ul className={`space-y-3 ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} flex flex-col`}>
                        {job.description.map((point, i) => (
                          <li key={i} className="text-sm text-gray-400 leading-relaxed text-left">
                             • {point}
                          </li>
                        ))}
                     </ul>
                   </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;