import React, { useState } from 'react';
import { FEATURED_MODELS } from '../constants';

const FeaturedModels: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="models" className="py-24 bg-neutral-950 px-4 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
          <div>
            <h3 className="text-ferrari-red font-bold uppercase tracking-widest text-sm mb-2">The Collection</h3>
            <h2 className="font-serif text-4xl md:text-5xl text-white">Masterpieces in Motion</h2>
          </div>
          <button className="hidden md:block text-white/60 hover:text-ferrari-red transition-colors text-sm uppercase tracking-widest mt-4 md:mt-0">
            View Full Inventory &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {FEATURED_MODELS.map((model) => (
            <div 
              key={model.id}
              className="group relative h-[500px] w-full overflow-hidden bg-neutral-900 cursor-pointer"
              onMouseEnter={() => setHoveredId(model.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={model.image} 
                  alt={model.name} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity duration-300" />
              </div>

              <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-10">
                <span className="text-ferrari-red text-xs font-bold uppercase tracking-widest mb-2 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {model.category}
                </span>
                <h3 className="font-serif text-3xl md:text-4xl text-white mb-2 italic">
                  {model.name}
                </h3>
                <p className="text-white/70 text-sm font-light tracking-wide mb-6">
                  {model.tagline}
                </p>

                {/* Specs Reveal on Hover */}
                <div className={`grid grid-cols-2 gap-4 border-t border-white/20 pt-4 transition-all duration-500 overflow-hidden ${hoveredId === model.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div>
                    <p className="text-xs text-white/50 uppercase">Power</p>
                    <p className="text-white font-medium">{model.specs.power}</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase">0-100 km/h</p>
                    <p className="text-white font-medium">{model.specs.acceleration}</p>
                  </div>
                  <div>
                     <p className="text-xs text-white/50 uppercase">Engine</p>
                     <p className="text-white font-medium truncate">{model.specs.engine}</p>
                  </div>
                  <div>
                     <p className="text-xs text-white/50 uppercase">Max Speed</p>
                     <p className="text-white font-medium">{model.specs.maxSpeed}</p>
                  </div>
                </div>
                
                <div className={`mt-6 transition-all duration-500 ${hoveredId === model.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                   <span className="inline-block text-white border-b border-ferrari-red pb-1 text-sm uppercase tracking-wider hover:text-ferrari-red">
                     Enquire Now
                   </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <button className="text-white/60 hover:text-ferrari-red transition-colors text-sm uppercase tracking-widest">
            View Full Inventory &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedModels;
