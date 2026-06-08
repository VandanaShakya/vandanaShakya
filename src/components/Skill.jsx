import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillData = [
  { name: 'React.js', img: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', desc: 'Expertise in building component-based SPAs.' },
  { name: 'JavaScript', img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', desc: 'Deep understanding of ES6+ and DOM manipulation.' },
  { name: 'Node.js', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg', desc: 'Building scalable server-side applications.' },
  { name: 'Express.js', img: 'https://cdn.worldvectorlogo.com/logos/express-109.svg', desc: 'Designing robust backend frameworks.' },
  { name: 'SQL', img: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png', desc: 'Proficient in relational database design.' },
  { name: 'MongoDB', img: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg', desc: 'NoSQL database modeling and performance.' },
  { name: 'GitHub', img: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg', desc: 'Version control and collaborative workflows.' }
];

const Skills = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        // --- RANDOMIZATION LOGIC ---
        const randomY = -800 - Math.random() * 500; // Random start height (between -800 and -1300)
        const randomRotation = (Math.random() - 0.5) * 90; // Random tilt between -45deg and 45deg
        const randomDelay = Math.random() * 0.5; // Random start delay for "chaos"
        const randomDuration = 1.2 + Math.random() * 0.8; // Some fall faster than others

        gsap.fromTo(card, 
          { 
            opacity: 0, 
            y: randomY,
            rotation: randomRotation,
            scale: 0.4,
            zIndex: Math.floor(Math.random() * 10) // Randomly stack them
          }, 
          {
            opacity: 1,
            y: 0,
            rotation: 0,
            scale: 1,
            duration: randomDuration,
            delay: randomDelay,
            ease: "bounce.out",
            scrollTrigger: {
              trigger: sectionRef.current, // Start when the whole section enters
              start: "top center+=100", 
              toggleActions: "play none none reverse",
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="w-full py-24 bg-white border-t border-gray-100 overflow-hidden">
      <div className="w-full px-8 md:px-20">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-24">
          <h2 className="text-4xl font-serif font-bold text-[#FC14B5] uppercase tracking-tighter">
            Technical <span className="text-gray-900">Expertise</span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-[#FC14B5] to-transparent opacity-30"></div>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-12">
          {skillData.map((skill, index) => (
            <div
              key={skill.name}
              ref={(el) => (cardsRef.current[index] = el)}
              className="flex flex-col items-center text-center group cursor-default relative"
            >
              {/* Circular Container */}
              <div 
                className="relative w-36 h-36 rounded-full bg-white flex items-center justify-center p-8 mb-6 border border-gray-100 shadow-sm group-hover:border-[#FC14B5] group-hover:shadow-[0_0_25px_rgba(252,20,181,0.3)] transition-all duration-500 z-10"
              >
                <img 
                  src={skill.img} 
                  alt={skill.name} 
                  className="w-full h-full object-contain transition-all duration-500 scale-100 group-hover:scale-110" 
                />
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-[0.2em] group-hover:text-[#FC14B5] transition-colors duration-300">
                {skill.name}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[220px]">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;