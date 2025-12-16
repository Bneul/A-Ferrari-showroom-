import React from 'react';

const VirtualTour: React.FC = () => {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden bg-neutral-900">
       <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop" 
            alt="Interior" 
            className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
          />
          <div className="absolute inset-0 bg-black/60" />
       </div>

       <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-block border border-white/20 rounded-full px-4 py-1 mb-8 backdrop-blur-md">
            <span className="text-xs font-bold text-white uppercase tracking-widest">Digital Experience</span>
          </div>
          
          <h2 className="font-serif text-5xl md:text-7xl text-white mb-6">
            Step Inside The Legend
          </h2>
          <p className="text-lg text-white/70 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            Explore our Dubai showroom from the comfort of your home. Experience 360-degree views of our bespoke configurations and exclusive atelier.
          </p>
          
          <button className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-bold text-white transition-all duration-300 bg-ferrari-red rounded-none hover:bg-white hover:text-black">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-80 group-hover:h-80 opacity-10"></span>
              <span className="relative uppercase tracking-widest text-sm flex items-center gap-3">
                 Start Virtual Tour
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </span>
          </button>
       </div>
    </section>
  );
};

export default VirtualTour;
