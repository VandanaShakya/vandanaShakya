import React from 'react';
import { motion } from 'framer-motion';
import { Waves } from 'lucide-react';

const About = () => (
  <section id="about" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
    
    {/* Decorative Wavy Icon Background */}
    <div className="absolute top-10 left-0 -z-10 opacity-5 text-[#FC14B5]">
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <Waves size={300} strokeWidth={1} />
      </motion.div>
    </div>

    <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
      
      {/* Left Block: Text Content */}
      <motion.div 
        initial={{ opacity: 0, x: -80 }} 
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 order-2 md:order-1"
      >
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#FC14B5] mb-8 relative inline-block">
          About Me
          <span className="absolute bottom-[-8px] left-0 w-16 h-1 bg-[#FC14B5]"></span>
        </h2>
        
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          As a specialized <span className="font-bold text-gray-900 border-b-2 border-[#FC14B5]/30">MERN Stack Developer</span>, 
          I build scalable web applications using MongoDB, Express.js, React, and Node.js. 
        </p>
        
        <p className="text-gray-600 text-lg leading-relaxed italic border-l-4 border-gray-200 pl-6">
          With a strong eye for design and a solid foundation in backend development, I aim to build cohesive, performance-driven applications. I am dedicated to continuous learning and delivering digital solutions that are both visually compelling and technically sound.
        </p>
      </motion.div>

      {/* Right Block: Image with Pink Border */}
      <motion.div 
        initial={{ opacity: 0, x: 80 }} 
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="flex-1 order-1 md:order-2 w-full"
      >
        <div className="relative group">
          {/* Pink Animated Border Frame */}
          <div className="absolute -inset-4 border-2 border-[#FC14B5] rounded-xl translate-x-2 translate-y-2 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
          
          <div className="h-[350px] md:h-[450px] rounded-lg overflow-hidden shadow-2xl bg-white p-2 border border-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80" 
              className="w-full h-full object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-700" 
              alt="Workspace" 
            />
          </div>
        </div>
      </motion.div>
      
    </div>
  </section>
);

export default About;