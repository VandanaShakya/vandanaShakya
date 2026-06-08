import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Timeline Line Drawing Animation
      gsap.fromTo(lineRef.current, 
        { scaleY: 0 }, 
        { 
          scaleY: 1, 
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1,
          }
        }
      );

      // 2. Cards Entrance Animation
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(card,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
              toggleActions: "play none none reverse",
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-20 max-w-7xl mx-auto bg-white overflow-hidden">
      
      {/* --- EDUCATION SECTION --- */}
      <div id="education" className="mb-24">
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-4xl font-serif font-bold text-[#FC14B5] tracking-tight uppercase">
            Education
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-[#FC14B5] to-transparent opacity-20"></div>
        </div>

        <div className="relative ml-4">
          {/* Animated Vertical Line */}
          <div 
            ref={lineRef}
            className="absolute left-0 top-0 w-[2px] h-full bg-[#FC14B5] origin-top opacity-30"
          ></div>

          <div className="space-y-16">
            {/* BCA Entry */}
            <div 
              ref={el => cardsRef.current[0] = el}
              className="relative pl-12 group"
            >
              <div className="absolute left-[-6px] top-2 w-3 h-3 bg-[#FC14B5] rounded-full shadow-[0_0_10px_#FC14B5]"></div>
              <span className="text-[11px] font-bold tracking-[0.3em] text-[#FC14B5] uppercase">University Degree</span>
              <h3 className="text-3xl font-bold text-gray-900 mt-2 group-hover:translate-x-2 transition-transform duration-300">
                Bachelor of Computer Applications (BCA)
              </h3>
              <p className="text-gray-500 font-serif text-xl italic mt-1">Kurukshetra University</p>
            </div>

            {/* 12th Entry */}
            <div 
              ref={el => cardsRef.current[1] = el}
              className="relative pl-12 group"
            >
              <div className="absolute left-[-6px] top-2 w-3 h-3 bg-gray-200 group-hover:bg-[#FC14B5] rounded-full transition-colors duration-500"></div>
              <span className="text-[11px] font-bold tracking-[0.3em] text-gray-400 uppercase">Secondary Education</span>
              <h3 className="text-3xl font-bold text-gray-900 mt-2 group-hover:translate-x-2 transition-transform duration-300">
                12th Standard
              </h3>
              <p className="text-gray-500 font-serif text-xl italic mt-1">S.D. Ser. Sec. School, Jagadhri</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- PROFESSIONAL EXPERIENCE SECTION --- */}
      <div id="experience">
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-4xl font-serif font-bold text-[#FC14B5] tracking-tight uppercase">
            Professional <span className="text-gray-900">Experience</span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-[#FC14B5] to-transparent opacity-20"></div>
        </div>

        <div className="space-y-10">
          {/* FNA Marketing Solutions */}
          <div 
            ref={el => cardsRef.current[2] = el}
            className="group relative grid md:grid-cols-4 gap-6 p-10 border border-gray-100 bg-white hover:border-[#FC14B5]/20 transition-all duration-500 shadow-sm hover:shadow-2xl"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#FC14B5] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>
            
            <div className="md:col-span-1">
              <span className="text-[#FC14B5] font-bold tracking-widest text-sm uppercase">Oct 2025 — Present</span>
            </div>
            
            <div className="md:col-span-3">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#FC14B5] transition-colors uppercase tracking-tight">
                    MERN Stack Developer
                  </h3>
                  <p className="text-lg font-serif italic text-gray-400 mt-1">FNA Marketing Solutions</p>
                </div>
                <span className="px-4 py-1.5 border border-[#FC14B5] text-[#FC14B5] text-[10px] font-bold uppercase tracking-widest rounded-full">Active Role</span>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Driving high-impact marketing tech solutions through the MERN stack. Responsible for architecting scalable 
                frontend components and optimizing backend performance to meet complex marketing automation needs.
              </p>
            </div>
          </div>

          {/* ZIION TECHNOLOGY */}
          <div 
            ref={el => cardsRef.current[3] = el}
            className="group relative grid md:grid-cols-4 gap-6 p-10 border border-gray-100 bg-gray-50/30 hover:bg-white hover:border-[#FC14B5]/20 transition-all duration-500 shadow-sm"
          >
            <div className="md:col-span-1 text-gray-400 font-bold tracking-widest text-sm uppercase">
              March — Aug 2025
            </div>
            
            <div className="md:col-span-3">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-700 group-hover:text-[#FC14B5] transition-colors uppercase tracking-tight">
                  Frontend Developer
                </h3>
                <p className="text-lg font-serif italic text-gray-400 mt-1">ZIION TECHNOLOGY</p>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Focused on delivering pixel-perfect user interfaces and responsive web designs. Collaborated 
                with cross-functional teams to implement modern UI/UX principles using React and advanced CSS methodologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;