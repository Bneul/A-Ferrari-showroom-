import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Overlay for text contrast */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
         <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover scale-105"
            poster="https://images.unsplash.com/photo-1583121274602-3e2820c698d9?q=80&w=2070&auto=format&fit=crop"
         >
           {/* Fallback stock video of a red sports car */}
           <source src="https://videos.pexels.com/video-files/5803099/5803099-hd_1920_1080_25fps.mp4" type="video/mp4" />
         </video>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <h2 className="text-ferrari-red font-bold tracking-[0.2em] text-sm md:text-base uppercase mb-6 animate-slide-up">
          Official Showroom Dubai
        </h2>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl font-medium text-white mb-8 leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Unleash the <br /> 
          <span className="italic">Prancing Horse</span>
        </h1>
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light tracking-wide animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Experience the pinnacle of Italian engineering and automotive artistry in the heart of Dubai.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <button onClick={() => document.getElementById('models')?.scrollIntoView({behavior: 'smooth'})} className="group relative px-8 py-3 bg-ferrari-red text-white overflow-hidden transition-all duration-300 hover:bg-red-700">
            <span className="relative z-10 font-bold tracking-wider text-sm uppercase">Discover Models</span>
          </button>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="group px-8 py-3 border border-white/30 backdrop-blur-sm text-white hover:bg-white hover:text-black transition-all duration-300">
             <span className="font-bold tracking-wider text-sm uppercase">Book Consultation</span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
