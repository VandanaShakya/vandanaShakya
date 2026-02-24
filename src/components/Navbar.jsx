import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = ['Home', 'About', 'Skills', 'Education', 'Experience', 'Contact'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="w-full px-8 md:px-20 py-5 flex justify-between items-center">
        <span className="text-2xl font-serif font-bold text-[#A30234]">VS.</span>
        
        <div className="hidden md:flex space-x-10">
          {navItems.map((item) => (
            <button 
              key={item} 
              onClick={() => scrollTo(item)} 
              className="text-[10px] font-bold hover:text-[#A30234] transition-colors uppercase tracking-[0.3em] text-gray-500 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#A30234] transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} color="#A30234" /> : <Menu size={28} color="#A30234" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-gray-100 flex flex-col p-8 space-y-4 md:hidden"
          >
            {navItems.map((item) => (
              <button key={item} onClick={() => scrollTo(item)} className="text-left text-lg font-serif font-bold text-gray-800 uppercase italic">
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;