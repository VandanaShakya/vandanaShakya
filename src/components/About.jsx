import { motion } from 'framer-motion';

const About = () => (
  <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row items-center gap-12">
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex-1"
      >
        <h2 className="text-3xl font-serif font-bold text-[#A30234] mb-6">About Me</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          As a specialized <span className="font-bold text-gray-800">MERN Stack Developer</span>, I build scalable web applications using MongoDB, Express.js, React, and Node.js. 
        </p>
        <p className="text-gray-600 leading-relaxed">
        With a strong eye for design and a solid foundation in backend development, I aim to build cohesive, performance-driven applications. I am dedicated to continuous learning and delivering digital solutions that are both visually compelling and technically sound        </p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        whileInView={{ opacity: 1, scale: 1 }}
        className="flex-1 h-[400px] rounded-lg overflow-hidden shadow-2xl"
      >
        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Workspace" />
      </motion.div>
    </div>
  </section>
);
export default About;