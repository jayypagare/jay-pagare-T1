import React from 'react';
import { RESUME_DATA } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 bg-brand-gray relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-display font-bold mb-16">
          Technical <span className="text-brand-accent">Arsenal</span>.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Software & Tools - Large Block */}
          <div className="md:col-span-7 bg-brand-card border border-white/5 p-8 rounded-3xl hover:border-brand-accent/30 transition-all duration-300 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-32 bg-brand-accent/5 rounded-full blur-3xl group-hover:bg-brand-accent/10 transition-colors"></div>
             <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                  <span className="p-2 bg-white/10 rounded-lg">
                    <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  Software Proficiency
                </h3>
                <div className="flex flex-wrap gap-3">
                  {RESUME_DATA.skills.tools.map((tool) => (
                    <span key={tool} className="px-5 py-2.5 bg-brand-dark rounded-xl text-sm text-gray-300 font-medium border border-white/10 hover:border-brand-accent/50 hover:text-white transition-colors cursor-default">
                      {tool}
                    </span>
                  ))}
                </div>
             </div>
          </div>

          {/* Design Core - Vertical Block */}
          <div className="md:col-span-5 bg-brand-card border border-white/5 p-8 rounded-3xl hover:border-brand-accent/30 transition-all duration-300">
             <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
               <span className="p-2 bg-white/10 rounded-lg">
                 <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                 </svg>
               </span>
               Core Competencies
             </h3>
             <div className="space-y-4">
                {RESUME_DATA.skills.graphicDesign.map((skill, i) => (
                   <div key={i} className="flex items-center justify-between group">
                      <span className="text-gray-400 group-hover:text-white transition-colors">{skill}</span>
                      <div className="w-24 h-1 bg-white/5 rounded-full overflow-hidden">
                         <div className="h-full bg-brand-accent w-[90%]"></div>
                      </div>
                   </div>
                ))}
             </div>
          </div>

          {/* Motion & 3D */}
          <div className="md:col-span-5 bg-brand-card border border-white/5 p-8 rounded-3xl hover:border-brand-accent/30 transition-all duration-300">
             <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
               <span className="p-2 bg-white/10 rounded-lg">
                 <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                 </svg>
               </span>
               Motion & 3D
             </h3>
             <ul className="grid grid-cols-2 gap-4">
                {RESUME_DATA.skills.videoEditing.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                    {skill}
                  </li>
                ))}
             </ul>
          </div>
          
           {/* Education */}
           <div className="md:col-span-7 bg-gradient-to-br from-brand-card to-brand-dark border border-white/5 p-8 rounded-3xl hover:border-brand-accent/30 transition-all duration-300">
             <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
               <span className="p-2 bg-white/10 rounded-lg">
                 <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                 </svg>
               </span>
               Education
             </h3>
             <div className="space-y-6">
                {RESUME_DATA.education.map((edu, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-white/5 last:border-0 pb-4 last:pb-0">
                    <div>
                        <h4 className="font-bold text-white text-lg">{edu.degree}</h4>
                        <p className="text-sm text-gray-500 mt-1">{edu.institution}</p>
                    </div>
                    <span className="text-brand-accent font-mono text-sm">{edu.year}</span>
                  </div>
                ))}
             </div>
           </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;