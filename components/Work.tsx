import React, { useState } from 'react';
import { RESUME_DATA } from '../constants';
import { Project } from '../types';

const Work: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-32 bg-brand-gray relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-white">
              Selected <span className="text-brand-accent">Works</span>.
            </h2>
            <p className="text-brand-muted max-w-xl text-lg font-light leading-relaxed">
              A curation of high-impact campaigns, viral content, and strategic branding projects that drove real engagement.
            </p>
          </div>
          <div className="hidden md:block w-32 h-1 bg-white/10 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {RESUME_DATA.projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-brand-card border border-white/5 rounded-3xl overflow-hidden hover:border-brand-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-accent/10"
            >
              {/* Image Placeholder */}
              <div className="h-72 overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                <img 
                  src={`https://picsum.photos/seed/${index + 12}/800/600`} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-6 right-6 z-20 glass-panel px-4 py-1.5 rounded-full text-xs font-mono tracking-wide text-white border border-white/10">
                  {project.timeline}
                </div>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.slice(0, 3).map((t, i) => (
                    <span key={i} className="text-[10px] uppercase font-bold tracking-wider text-brand-accent bg-brand-accent/10 px-3 py-1.5 rounded-md border border-brand-accent/10">
                      {t}
                    </span>
                  ))}
                  {project.tools.length > 3 && (
                    <span className="text-[10px] uppercase font-bold tracking-wider text-brand-muted px-3 py-1.5 border border-white/5 rounded-md">
                      +{project.tools.length - 3}
                    </span>
                  )}
                </div>

                <h3 className="text-3xl font-display font-bold mb-2 text-white group-hover:text-brand-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 mb-8 font-medium tracking-wide">
                  {project.role}
                </p>

                <button 
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-4 border border-white/10 rounded-xl text-white font-medium hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  Read Case Study 
                  <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl transition-opacity" onClick={() => setSelectedProject(null)}></div>
          
          <div className="relative w-full max-w-4xl bg-brand-card border border-white/10 rounded-3xl overflow-hidden shadow-2xl animate-slide-up max-h-[90vh] overflow-y-auto">
             
             {/* Modal Header */}
             <div className="relative h-48 sm:h-64">
                <img 
                  src={`https://picsum.photos/seed/${RESUME_DATA.projects.indexOf(selectedProject) + 12}/1200/600`} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-brand-card/50 to-transparent"></div>
                
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white transition-colors border border-white/10"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="absolute bottom-6 left-6 sm:left-10">
                  <h3 className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">{selectedProject.title}</h3>
                  <p className="text-brand-accent font-medium">{selectedProject.role}</p>
                </div>
             </div>

             {/* Modal Content */}
             <div className="p-6 sm:p-10 space-y-8">
                
                <div className="grid md:grid-cols-3 gap-8">
                   <div className="md:col-span-2 space-y-8">
                      <div>
                        <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-muted mb-3">
                           <span className="w-2 h-2 rounded-full bg-red-500"></span>
                           The Challenge
                        </h4>
                        <ul className="space-y-2">
                          {selectedProject.problem.map((item, i) => (
                             <li key={i} className="text-gray-300 leading-relaxed text-sm sm:text-base">{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-muted mb-3">
                           <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                           Approach & Solution
                        </h4>
                        <ul className="space-y-2">
                          {selectedProject.approach.map((item, i) => (
                             <li key={i} className="text-gray-300 leading-relaxed text-sm sm:text-base">{item}</li>
                          ))}
                        </ul>
                      </div>
                   </div>

                   <div className="bg-white/5 rounded-2xl p-6 border border-white/5 h-fit">
                      <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-muted mb-4">
                         <span className="w-2 h-2 rounded-full bg-green-500"></span>
                         Key Results
                      </h4>
                      <ul className="space-y-4">
                        {selectedProject.result.map((item, i) => (
                           <li key={i} className="text-white font-medium text-sm leading-relaxed border-l-2 border-brand-accent pl-3">
                              {item}
                           </li>
                        ))}
                      </ul>
                      
                      <div className="mt-8 pt-6 border-t border-white/10">
                         <p className="text-xs text-brand-muted mb-2 uppercase tracking-wider">Tools Used</p>
                         <div className="flex flex-wrap gap-2">
                           {selectedProject.tools.map((t, i) => (
                             <span key={i} className="text-xs text-gray-400 bg-black/40 px-2 py-1 rounded border border-white/5">
                               {t}
                             </span>
                           ))}
                         </div>
                      </div>
                   </div>
                </div>

             </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Work;