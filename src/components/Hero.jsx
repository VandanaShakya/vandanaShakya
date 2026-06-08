import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for the image transition
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=100%", // Scroll distance
          scrub: 1, // Smooth transition
          pin: true, // Pins the section while scrolling
        }
      });

      tl.to(img1Ref.current, { yPercent: -100, ease: "none" })
        .from(img2Ref.current, { yPercent: 100, ease: "none" }, 0);
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="home" className="relative h-screen w-full overflow-hidden bg-black/80">
      
      {/* Background Layer - Image Slider */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* First Image (Starts visible) */}
        <div ref={img1Ref} className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover opacity-60" 
            alt="Background 1" 
          />
        </div>
        
        {/* Second Image (Slides up from bottom) */}
        <div ref={img2Ref} className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover opacity-20" 
            alt="Background 2" 
          />
        </div>
      </div>

      {/* Content Layer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full h-full flex items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-white text-4xl md:text-6xl font-serif font-bold text-gray-900 leading-tight">
            Vandana <span className="text-[#FC14B5]">Shakya</span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-white mt-6 text-lg md:text-xl font-light tracking-[0.3em] uppercase text-gray-600 border-l-4 border-[#FC14B5] pl-6"
          >
            MERN Stack Developer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-8"
          >
            <h3 className="text-white text-lg font-semibold text-gray-800 mb-4">
              You Can Also Find Me On
            </h3>

            <div className="text-white flex items-center gap-6 text-2xl">
              <a 
                href="https://www.linkedin.com/in/vandna-shakya-358187312/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-[#FC14B5] transition-colors"
              >
                <FaLinkedin />
              </a>

              <a 
                href="https://github.com/VandanaShakya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-[#FC14B5] transition-colors"
              >
                <FaGithub />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;