import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'SF90 Stradale',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry. A concierge will contact you shortly.');
  };

  return (
    <section id="contact" className="py-24 bg-black text-white px-4 md:px-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* Info Column */}
        <div className="lg:w-1/3 space-y-12">
           <div>
             <h3 className="text-ferrari-red font-bold uppercase tracking-widest text-sm mb-4">Contact Us</h3>
             <h2 className="font-serif text-4xl mb-6">Begin Your Journey</h2>
             <p className="text-white/60 font-light leading-relaxed">
               Our dedicated team is ready to assist you with configuring your dream Ferrari, scheduling a test drive, or answering any inquiries about our fleet.
             </p>
           </div>

           <div className="space-y-6">
              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full shrink-0 text-ferrari-red">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                 </div>
                 <div>
                   <h4 className="font-bold uppercase tracking-wide text-sm mb-1">Showroom Location</h4>
                   <p className="text-white/60 text-sm">Sheikh Zayed Road, Al Manara<br/>Dubai, United Arab Emirates</p>
                 </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full shrink-0 text-ferrari-red">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                 </div>
                 <div>
                   <h4 className="font-bold uppercase tracking-wide text-sm mb-1">Phone</h4>
                   <p className="text-white/60 text-sm">+971 4 123 4567</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Form Column */}
        <div className="lg:w-2/3">
           <form onSubmit={handleSubmit} className="space-y-8 bg-neutral-900/50 p-8 md:p-12 border border-white/5 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/50">Full Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-ferrari-red transition-colors"
                      placeholder="John Doe"
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/50">Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-ferrari-red transition-colors"
                      placeholder="john@example.com"
                    />
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/50">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-ferrari-red transition-colors"
                      placeholder="+971 ..."
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/50">Model of Interest</label>
                    <select 
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-ferrari-red transition-colors [&>option]:bg-black"
                    >
                      <option value="SF90 Stradale">SF90 Stradale</option>
                      <option value="Purosangue">Purosangue</option>
                      <option value="Roma Spider">Roma Spider</option>
                      <option value="296 GTB">296 GTB</option>
                      <option value="Other">Other / General Inquiry</option>
                    </select>
                 </div>
              </div>

              <div className="space-y-2">
                 <label className="text-xs font-bold uppercase tracking-widest text-white/50">Message</label>
                 <textarea 
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-ferrari-red transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                 />
              </div>

              <div className="pt-4">
                 <button type="submit" className="w-full md:w-auto bg-ferrari-red text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-red-700 transition-colors">
                    Send Inquiry
                 </button>
              </div>
           </form>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
