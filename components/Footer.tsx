import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/5 text-center text-white/30 text-xs tracking-widest uppercase">
       <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Scuderia Dubai. All Rights Reserved.</p>
          <div className="flex gap-6">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Legal</a>
             <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
       </div>
    </footer>
  );
};

export default Footer;
