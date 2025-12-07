import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen text-brand-text">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Work />
        <Experience />
        <Skills />
      </main>
      <Contact />
      
      {/* Disclaimer Modal / Toast - Optional but good for context */}
      <div className="fixed bottom-4 right-4 z-40 max-w-xs">
         <div className="bg-brand-gray/90 backdrop-blur border border-white/10 p-4 rounded-xl shadow-2xl">
           <p className="text-xs text-brand-muted">
             <strong>Note:</strong> This site uses Gemini API to power the "Ask about Jay" feature. All content is based on the real resume of Jay Meena Pagare.
           </p>
         </div>
      </div>
    </div>
  );
};

export default App;