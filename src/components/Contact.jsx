import { motion } from 'framer-motion';

const Contact = () => (
  <section id="contact" className="py-24 bg-white text-gray-900 overflow-hidden border-t border-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* Left Side: Image with Decorative Frame */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <div className="relative max-w-md mx-auto lg:mx-0">
            {/* Decorative Crimson Frame */}
            <div className="absolute -inset-4 border-2 border-[#A30234]/20 translate-x-4 translate-y-4 hidden md:block"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80" 
              alt="Contact Me" 
              className="relative z-10 w-full h-[400px] lg:h-[550px] object-cover rounded-sm shadow-xl"
            />
          </div>
        </motion.div>

        {/* Right Side: Form on White BG */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <div className="inline-block mb-4 px-4 py-1 border-l-4 border-[#A30234] bg-gray-50">
            <span className="text-[#A30234] font-bold uppercase tracking-widest text-sm">Contact</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
            Let’s build something <span className="text-[#A30234]">extraordinary.</span>
          </h2>
          
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full p-4 bg-gray-50 border border-gray-200 focus:border-[#A30234] focus:bg-white outline-none transition-all placeholder:text-gray-400 rounded-none" 
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full p-4 bg-gray-50 border border-gray-200 focus:border-[#A30234] focus:bg-white outline-none transition-all placeholder:text-gray-400 rounded-none" 
              />
            </div>
            
            <textarea 
              placeholder="Your Message" 
              rows={5} 
              className="w-full p-4 bg-gray-50 border border-gray-200 focus:border-[#A30234] focus:bg-white outline-none transition-all placeholder:text-gray-400 rounded-none"
            ></textarea>
            
            <motion.button 
              whileHover={{ backgroundColor: '#82022a', scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 bg-[#A30234] text-white font-bold uppercase tracking-[0.2em] shadow-lg transition-all"
            >
              Send Message
            </motion.button>
          </form>
          
          {/* Subtle Social Info */}
          <div className="mt-12 flex gap-8 text-sm font-medium text-gray-400 uppercase tracking-widest">
            <a href="#" className="hover:text-[#A30234] transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-[#A30234] transition-colors">GitHub</a>
            <a href="#" className="hover:text-[#A30234] transition-colors">Twitter</a>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

export default Contact;