import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ sending: false, message: '', error: false });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ sending: true, message: 'Sending...', error: false });

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID; 
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY =  import.meta.env.VITE_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setStatus({ sending: false, message: 'Message sent successfully!', error: false });
        form.current.reset();
      }, (error) => {
        setStatus({ sending: false, message: 'Failed to send. Please try again.', error: true });
        console.error('EmailJS Error:', error.text);
      });
  };

  return (
    <section id="contact" className="py-24 bg-white text-gray-900 overflow-hidden border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Side: Image with Pink Frame */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Decorative Pink Frame */}
              <div className="absolute -inset-4 border-2 border-[#FC14B5]/20 translate-x-4 translate-y-4 hidden md:block"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80" 
                alt="Contact Me" 
                className="relative z-10 w-full h-[400px] lg:h-[550px] object-cover rounded-sm shadow-xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-block mb-4 px-4 py-1 border-l-4 border-[#FC14B5] bg-[#FC14B5]/5">
              <span className="text-[#FC14B5] font-bold uppercase tracking-widest text-sm">Get in Touch</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
              Let’s build something <span className="text-[#FC14B5]">extraordinary.</span>
            </h2>
            
            <form ref={form} className="space-y-5" onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input 
                  type="text" 
                  name="user_name" // Required by EmailJS
                  placeholder="Full Name" 
                  required
                  className="w-full p-4 bg-gray-50 border border-gray-300 focus:border-[#FC14B5] focus:bg-white outline-none transition-all placeholder:text-gray-400 rounded-none" 
                />
                <input 
                  type="email" 
                  name="user_email" // Required by EmailJS
                  placeholder="Email Address" 
                  required
                  className="w-full p-4 bg-gray-50 border border-gray-300 focus:border-[#FC14B5] focus:bg-white outline-none transition-all placeholder:text-gray-400 rounded-none" 
                />
              </div>
              
              <textarea 
                name="message" // Required by EmailJS
                placeholder="Your Message" 
                rows={5} 
                required
                className="w-full p-4 bg-gray-50 border border-gray-300 focus:border-[#FC14B5] focus:bg-white outline-none transition-all placeholder:text-gray-400 rounded-none"
              ></textarea>
              
              <motion.button 
                disabled={status.sending}
                whileHover={{ backgroundColor: '#e012a2', scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-5 font-bold uppercase tracking-[0.2em] shadow-lg transition-all ${
                  status.sending ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#FC14B5] text-white'
                }`}
              >
                {status.sending ? 'Sending...' : 'Send Message'}
              </motion.button>

              {/* Status Message */}
              {status.message && (
                <p className={`mt-4 font-bold text-center ${status.error ? 'text-red-500' : 'text-[#FC14B5]'}`}>
                  {status.message}
                </p>
              )}
            </form>
            
            {/* Social Links with Theme Hover */}
            <div className="mt-12 flex gap-8 text-sm font-medium text-gray-400 uppercase tracking-widest">
              <a href="https://linkedin.com/in/vandna-shakya-358187312/" target="_blank" rel="noreferrer" className="hover:text-[#FC14B5] transition-colors">LinkedIn</a>
              <a href="https://github.com/VandanaShakya" target="_blank" rel="noreferrer" className="hover:text-[#FC14B5] transition-colors">GitHub</a>
              <a href="#" className="hover:text-[#FC14B5] transition-colors">Twitter</a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;