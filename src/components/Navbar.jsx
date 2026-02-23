import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = ['Home', 'About', 'Skills', 'Education', 'Experience', 'Contact'];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-2xl font-serif font-bold text-[#A30234]">VS.</span>
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button key={item} onClick={() => scrollTo(item)} className="text-xs font-semibold hover:text-[#A30234] transition-colors uppercase tracking-widest">
              {item}
            </button>
          ))}
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X color="#A30234" /> : <Menu color="#A30234" />}
        </button>
      </div>
    </nav>
  );
};
