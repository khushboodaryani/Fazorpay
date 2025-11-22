import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Products', 'Solutions', 'Developers', 'Pricing', 'Resources'];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer relative z-20">
          <div className="w-8 h-8 bg-brand-600 rounded-br-xl rounded-tl-xl flex items-center justify-center shadow-lg shadow-brand-500/20">
             <span className="text-white font-bold text-lg">R</span>
          </div>
          <span className="font-display font-bold text-xl tracking-tight">RazorX</span>
        </div>

        {/* Desktop Links with Hover Effect */}
        <div className="hidden md:flex items-center gap-2 relative z-10">
          {navLinks.map((link, index) => (
            <a
              key={link}
              href="#"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 transition-colors"
            >
              {hoveredIndex === index && (
                <motion.span
                  layoutId="nav-hover"
                  className="absolute inset-0 bg-slate-100 dark:bg-slate-800 rounded-full -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className={`relative z-10 ${hoveredIndex === index ? 'text-brand-600 dark:text-brand-400' : ''}`}>
                {link}
              </span>
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4 relative z-20">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <Button variant="outline" size="sm">Login</Button>
          <Button variant="primary" size="sm" className="flex items-center gap-1">
            Sign Up <ArrowRight size={14} />
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
           <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 dark:text-slate-200">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#0a0a0a] border-b border-slate-200 dark:border-slate-800 p-4 shadow-xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-base font-medium text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400"
              >
                {link}
              </a>
            ))}
            <div className="h-px w-full bg-slate-200 dark:bg-slate-800 my-2"></div>
            <Button variant="outline" className="w-full justify-center">Login</Button>
            <Button variant="primary" className="w-full justify-center">Sign Up</Button>
          </div>
        </div>
      )}
    </nav>
  );
};