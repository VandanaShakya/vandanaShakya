import { motion } from 'framer-motion';

export const Hero = () => (
  <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80" 
        className="w-full h-full object-cover opacity-15" 
        alt="Background" 
      />
    </div>
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
      className="relative z-10 px-4"
    >
      <h1 className="text-5xl md:text-8xl font-serif font-bold text-gray-900 mb-4">
        Vandana <span className="text-[#A30234]">Shakya</span>
      </h1>
      <p className="text-lg md:text-xl font-light tracking-[0.4em] uppercase text-gray-500">
        MERN Stack Developer
      </p>
    </motion.div>
  </section>
);