import { motion } from 'framer-motion';

const skillData = [
  { 
    name: 'React.js', 
    img: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
    desc: 'Expertise in building component-based SPAs with hooks and state management.' 
  },
  { 
    name: 'JavaScript', 
    img: 'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg',
    desc: 'Deep understanding of ES6+, asynchronous programming, and DOM manipulation.' 
  },
  { 
    name: 'Node.js', 
    img: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
    desc: 'Building scalable server-side applications and RESTful APIs.' 
  },
  { 
    name: 'Express.js', 
    img: 'https://cdn.worldvectorlogo.com/logos/express-109.svg',
    desc: 'Designing robust backend frameworks and middleware integration.' 
  },
  { 
    name: 'SQL', 
    img: 'https://cdn.worldvectorlogo.com/logos/mysql-6.svg',
    desc: 'Proficient in relational database design, complex queries, and indexing.' 
  },
  { 
    name: 'MongoDB', 
    img: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg',
    desc: 'NoSQL database modeling with focus on performance and flexibility.' 
  },
  { 
    name: 'GitHub', 
    img: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg',
    desc: 'Version control, collaborative workflows, and CI/CD pipelines.' 
  }
];

const Skills = () => {
  return (
    <section id="skills" className="w-full py-24 bg-white border-t border-gray-100">
      <div className="w-full px-8 md:px-20">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-4xl font-serif font-bold text-[#A30234] uppercase tracking-tighter">
            Technical <span className="text-gray-900">Expertise</span>
          </h2>
          <div className="h-px flex-1 bg-gray-200"></div>
        </div>

        {/* Responsive Grid: 4 items on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-12">
          {skillData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              {/* Circular Image Container */}
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-32 h-32 rounded-full bg-gray-50 flex items-center justify-center p-6 mb-6 border border-gray-100 shadow-sm group-hover:border-[#A30234] group-hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <img 
                  src={skill.img} 
                  alt={skill.name} 
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500" 
                />
              </motion.div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-widest group-hover:text-[#A30234] transition-colors">
                {skill.name}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[250px]">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;