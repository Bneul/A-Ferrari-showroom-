import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedModels from './components/FeaturedModels';
import VirtualTour from './components/VirtualTour';
import ContactForm from './components/ContactForm';
import AIConcierge from './components/AIConcierge';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black font-sans selection:bg-ferrari-red selection:text-white">
      <Navbar />
      <Hero />
      <FeaturedModels />
      <VirtualTour />
      <ContactForm />
      <Footer />
      <AIConcierge />
    </div>
  );
};

export default App;
