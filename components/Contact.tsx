import React from 'react';
import { RESUME_DATA } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="py-24 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">
          Let's Create <span className="text-gray-600 italic">Something</span> <br />
          <span className="text-brand-accent">Viral</span> Together.
        </h2>
        
        <p className="text-xl text-brand-muted mb-12 max-w-2xl mx-auto">
          Currently open for senior design roles and freelance collaborations involving 3D, Motion, and Brand Identity.
        </p>

        <a 
          href={`mailto:${RESUME_DATA.contact.email}`} 
          className="inline-block px-10 py-5 bg-white text-black font-bold text-xl rounded-full hover:bg-brand-accent hover:text-white transition-all duration-300 transform hover:-translate-y-1"
        >
          Say Hello
        </a>

        <div className="mt-20 flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-10">
          <div className="mb-4 md:mb-0">
             <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Jay Meena Pagare. All Rights Reserved.</p>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
            <a href={`mailto:${RESUME_DATA.contact.email}`} className="text-gray-400 hover:text-white transition-colors">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;