import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Capabilities', path: '/#capabilities' },
    { name: 'Impact', path: '/#impact' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (e, path) => {
    if (path.startsWith('/#')) {
      e.preventDefault();
      const element = document.getElementById(path.substring(2));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#020507]/95 backdrop-blur-md shadow-lg shadow-[#033051]/20 border-b border-[#033051]/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Strato<span className="gradient-text">sport</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className={`text-sm font-medium transition-colors hover:text-[#A5C7E0] ${
                  location.pathname === item.path || (item.path.startsWith('/#') && location.pathname === '/')
                    ? 'text-[#539AC1]'
                    : 'text-[#D9EAF6]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <Button
                className="bg-gradient-to-r from-[#539AC1] to-[#235D94] hover:from-[#A5C7E0] hover:to-[#539AC1] text-white transition-all duration-300 shadow-[0_0_20px_rgba(83,154,193,0.4)] hover:shadow-[0_0_30px_rgba(83,154,193,0.6)] border-0"
              >
                Engage Stratosport
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#020507]/98 border-t border-[#033051]/30 backdrop-blur-md"
        >
          <nav className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={(e) => {
                  handleNavClick(e, item.path);
                  setIsMobileMenuOpen(false);
                }}
                className="block text-base font-medium text-[#D9EAF6] hover:text-[#539AC1] transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full bg-gradient-to-r from-[#539AC1] to-[#235D94] hover:from-[#A5C7E0] hover:to-[#539AC1] text-white border-0">
                Engage Stratosport
              </Button>
            </Link>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};