import { motion } from 'framer-motion';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };


  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      
      {/* --- Education Section (Stacked Top) --- */}
      <motion.div 
        id="education"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mb-20"
      >
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-3xl font-serif font-bold text-[#A30234] tracking-tight uppercase">
            Education
          </h2>
          <div className="h-px flex-1 bg-gray-100"></div>
        </div>

        <div className="space-y-10 relative border-l-2 border-gray-100 ml-3">
          {/* BCA Entry */}
          <motion.div variants={itemVariants} className="relative pl-10">
            <div className="absolute -left-[9px] top-1 w-4 h-4 bg-[#A30234] rounded-full border-4 border-white shadow-sm"></div>
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#A30234] uppercase">University Degree</span>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">
                Bachelor of Computer Applications (BCA)
              </h3>
              <p className="text-gray-600 font-medium text-lg italic">Kurukshetra University</p>
            </div>
          </motion.div>

          {/* 12th Entry */}
          <motion.div variants={itemVariants} className="relative pl-10">
            <div className="absolute -left-[9px] top-1 w-4 h-4 bg-gray-300 rounded-full border-4 border-white shadow-sm"></div>
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">Secondary Education</span>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">
                12th Standard
              </h3>
              <p className="text-gray-600 font-medium">S.D. Ser. Sec. School, Jagadhri</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* --- Experience Section (Stacked Bottom) --- */}
      <section id="experience" className="w-full py-24 bg-white">
      <div className="w-full px-8 md:px-20">
        
        {/* Section Header */}
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-4xl font-serif font-bold text-[#A30234] tracking-tight uppercase">
            Professional <span className="text-gray-900">Experience</span>
          </h2>
          <div className="h-[1px] flex-1 bg-gray-200"></div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Current Role: FNA Marketing Solutions */}
          <motion.div 
            variants={itemVariants}
            className="group relative grid md:grid-cols-4 gap-4 p-8 border border-gray-100 bg-white hover:border-[#A30234]/30 transition-all duration-500 shadow-sm hover:shadow-xl"
          >
            {/* Animated Accent Bar */}
            <div className="absolute top-0 left-0 w-1 h-full bg-[#A30234] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
            
            <div className="md:col-span-1">
              <span className="text-[#A30234] font-bold tracking-widest text-sm uppercase">Oct 2025 — Present</span>
            </div>
            
            <div className="md:col-span-3">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#A30234] transition-colors uppercase tracking-tight">
                    MERN Stack Developer
                  </h3>
                  <p className="text-lg font-serif italic text-gray-500 mt-1">FNA Marketing Solutions</p>
                </div>
                <span className="px-3 py-1 bg-[#A30234] text-white text-[10px] font-bold uppercase tracking-widest">Active</span>
              </div>
              <p className="text-gray-600 leading-relaxed max-w-4xl text-lg">
                Driving high-impact marketing tech solutions through the MERN stack. Responsible for architecting scalable 
                frontend components and optimizing backend performance to meet complex marketing automation needs.
              </p>
            </div>
          </motion.div>

          {/* Previous Role: ZIION TECHNOLOGY */}
          <motion.div 
            variants={itemVariants}
            className="group relative grid md:grid-cols-4 gap-4 p-8 border border-gray-100 bg-gray-50/50 hover:bg-white transition-all duration-500 shadow-sm"
          >
            <div className="md:col-span-1 text-gray-400 font-bold tracking-widest text-sm uppercase">
              March — Aug 2025
            </div>
            
            <div className="md:col-span-3">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-700 group-hover:text-[#A30234] transition-colors uppercase tracking-tight">
                  Frontend Developer
                </h3>
                <p className="text-lg font-serif italic text-gray-500 mt-1">ZIION TECHNOLOGY</p>
              </div>
              <p className="text-gray-600 leading-relaxed max-w-4xl">
                Focused on delivering pixel-perfect user interfaces and responsive web designs. Collaborated 
                with cross-functional teams to implement modern UI/UX principles using React and advanced CSS methodologies.
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>

    </section>
  );
};

export default Experience;








