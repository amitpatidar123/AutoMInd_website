import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Menu, X, Code, Download } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Screenshots', href: '#screenshots' },
    { name: 'Docs', href: '#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-panel py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-tr from-primary-500 to-accent-500 p-2 rounded-lg">
              <BrainCircuit className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">AutoMind</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-4 border-l border-white/10 pl-6">
              <a href="https://github.com/automind/automind" target="_blank" rel="noreferrer" aria-label="GitHub Repository" className="text-gray-400 hover:text-white transition-colors">
                <Code className="w-5 h-5" />
              </a>
              <a href="#installation" className="btn-primary flex items-center space-x-2 text-sm py-2">
                <Download className="w-4 h-4" />
                <span>Download</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 w-full glass-panel border-t border-white/10"
        >
          <div className="px-4 py-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-gray-300 hover:text-white block px-2 py-1"
              >
                {link.name}
              </a>
            ))}
            <div className="h-px w-full bg-white/10 my-2" />
            <a href="https://github.com/automind/automind" target="_blank" rel="noreferrer" className="flex items-center space-x-3 text-gray-300 px-2 py-2">
              <Code className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a href="#installation" onClick={() => setMobileMenuOpen(false)} className="btn-primary flex items-center justify-center space-x-2 w-full mt-4">
              <Download className="w-5 h-5" />
              <span>Download for Windows</span>
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
