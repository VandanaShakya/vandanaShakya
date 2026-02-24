import { motion } from 'framer-motion';

const Hero = () => (
  <section id="home" className="relative h-screen flex items-center overflow-hidden bg-white">
    {/* Background Image - Absolute Positioning */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80" 
        className="w-full h-full object-cover opacity-20" 
        alt="Background" 
      />
    </div>

    {/* Content Container - Left Aligned */}
    <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 leading-tight">
          Vandana <span className="text-[#A30234]">Shakya</span>
        </h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-lg md:text-xl font-light tracking-[0.3em] uppercase text-gray-600 border-l-4 border-[#A30234] pl-6"
        >
          MERN Stack Developer
        </motion.p>
      </motion.div>
    </div>
  </section>
);

export default Hero;