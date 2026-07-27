import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { 
    name: 'Solutions', 
    path: '/services',
    dropdown: [
      { name: 'HVAC Solutions', path: '/services/hvac' },
      { name: 'Electrical Solutions', path: '/services/electrical' },
      { name: 'Fire Fighting Solutions', path: '/services/fire' }
    ]
  },
  { name: 'Why Vericon', path: '/why-vericon' },
  { name: 'Contact Us', path: '/contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);


  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white ${
        scrolled ? 'shadow-md py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center h-10 md:h-12 ml-4 md:ml-8">
          <img src="/LOGO.png" alt="Vericon Engineering Services" className="h-full object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = link.path === '/' 
              ? location.pathname === '/' 
              : location.pathname.startsWith(link.path);

            return (
              <div key={link.name} className="relative group">
                <Link 
                  to={link.path}
                  className={`flex items-center gap-1 font-semibold text-sm transition-colors py-2 relative ${
                    isActive 
                      ? 'text-brand-red' 
                      : 'text-brand-dark hover:text-brand-red'
                  }`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={14} className="mt-0.5 group-hover:rotate-180 transition-transform" />}
                  {isActive && (
                    <motion.div 
                      layoutId="navbar-active"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-red"
                    />
                  )}
                </Link>
              
              {/* Dropdown */}
              {link.dropdown && (
                <div className="absolute top-full left-0 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300">
                  <div className="bg-white shadow-xl rounded-xl overflow-hidden min-w-[200px] border border-brand-border">
                    {link.dropdown.map((drop) => {
                      const isDropActive = location.pathname === drop.path;
                      return (
                        <Link 
                          key={drop.name} 
                          to={drop.path}
                          className={`block px-5 py-3 text-sm transition-colors ${
                            isDropActive 
                              ? 'bg-red-50 text-brand-red font-medium' 
                              : 'text-brand-dark hover:bg-brand-light hover:text-brand-blue'
                          }`}
                        >
                          {drop.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <Link 
            to="/contact" 
            className="bg-brand-red text-white px-6 py-2 rounded-md font-medium transition-colors hover:opacity-90 text-sm"
          >
            Get a Quote
          </Link>
        </div>  
        
        {/* Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button 
            className={`lg:hidden p-2 rounded-md ${scrolled ? 'text-brand-dark' : 'text-brand-dark'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-brand-border overflow-hidden shadow-xl"
          >
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => {
                const isActive = link.path === '/' 
                  ? location.pathname === '/' 
                  : location.pathname.startsWith(link.path);

                return (
                  <div key={link.name}>
                    <Link 
                      to={link.path}
                      className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
                        isActive 
                          ? 'bg-red-50 text-brand-red'
                          : 'text-brand-dark hover:bg-brand-light'
                      }`}
                      onClick={() => !link.dropdown && setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                    {link.dropdown && (
                      <div className="pl-8 pb-2 flex flex-col gap-1">
                        {link.dropdown.map((drop) => {
                          const isDropActive = location.pathname === drop.path;
                          return (
                            <Link 
                              key={drop.name} 
                              to={drop.path}
                              className={`py-2 text-sm transition-colors ${
                                isDropActive 
                                  ? 'text-brand-red font-medium' 
                                  : 'text-gray-600 hover:text-brand-blue'
                              }`}
                              onClick={() => setIsOpen(false)}
                            >
                              {drop.name}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
              <Link 
                to="/contact" 
                className="mt-4 flex items-center justify-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-xl font-medium w-full"
                onClick={() => setIsOpen(false)}
              >
                <PhoneCall size={18} />
                <span>Get a Quote</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
