import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface NavbarProps {
  onOpenBooking: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scroll = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    setMobileMenuOpen(false);
    scroll(e, id);
  };

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out
        ${
          scrolled
            ? 'w-[90%] md:w-auto py-3 px-6 rounded-full bg-[#0B0E14]/70 border-white/10 shadow-lg shadow-blue-500/10 backdrop-blur-lg border'
            : 'w-full md:w-auto py-6 px-4 md:px-0 rounded-none bg-transparent border-transparent backdrop-blur-none border'
        }
        ${scrolled ? 'delay-0' : 'delay-0'}
        `}
    >
      <div className="flex items-center justify-between md:gap-12">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => scrollToSection(e, '')}
          className="flex items-center gap-2 font-bold text-xl tracking-tight"
        >
          <span className="text-blue-500">MP</span>
          <span className="text-white">DevFlow</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a
            href="#services"
            onClick={(e) => scrollToSection(e, 'services')}
            className="hover:text-white transition-colors"
          >
            Services
          </a>
          <a
            href="#philosophy"
            onClick={(e) => scrollToSection(e, 'philosophy')}
            className="hover:text-white transition-colors"
          >
            Philosophy
          </a>
          <a
            href="#work"
            onClick={(e) => scrollToSection(e, 'work')}
            className="hover:text-white transition-colors"
          >
            Work
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={onOpenBooking}
            className="inline-block bg-white/10 hover:bg-white/20 border border-white/10 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all backdrop-blur-md cursor-pointer"
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full mt-4 p-4 bg-[#0B0E14]/95 backdrop-blur-xl border border-white/10 rounded-2xl md:hidden flex flex-col gap-4 text-center shadow-2xl">
          <a
            href="#services"
            onClick={(e) => scrollToSection(e, 'services')}
            className="text-slate-300 hover:text-white py-2"
          >
            Services
          </a>
          <a
            href="#philosophy"
            onClick={(e) => scrollToSection(e, 'philosophy')}
            className="text-slate-300 hover:text-white py-2"
          >
            Philosophy
          </a>
          <a
            href="#work"
            onClick={(e) => scrollToSection(e, 'work')}
            className="text-slate-300 hover:text-white py-2"
          >
            Work
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="bg-blue-600 text-white font-semibold py-3 rounded-xl w-full block mt-2"
          >
            Book a Discovery Call
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
