import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Suites', href: '#suites' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Dining', href: '#dining' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className={`text-2xl font-serif font-bold tracking-widest uppercase ${isScrolled ? 'text-obsidian-900' : 'text-white'}`}>
          Obsidian<span className="text-gold-400">.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm tracking-wide font-medium transition-colors hover:text-gold-400 ${
                isScrolled ? 'text-obsidian-800' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button className={`px-5 py-2 text-sm border transition-all ${
             isScrolled 
             ? 'border-obsidian-900 text-obsidian-900 hover:bg-obsidian-900 hover:text-white' 
             : 'border-white text-white hover:bg-white hover:text-obsidian-900'
          }`}>
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-obsidian-900' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-obsidian-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-6 flex flex-col items-center space-y-4 md:hidden animate-fade-in-down">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-obsidian-800 text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="mt-4 px-8 py-3 bg-obsidian-900 text-white text-sm tracking-widest uppercase hover:bg-gold-600 transition-colors">
            Reserve Suite
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
