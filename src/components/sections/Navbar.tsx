import { NAV_ITEMS } from '@/data/studio';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
  onOpenBooking: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scroll = useSmoothScroll();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string, route = '/') => {
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      scroll(e, id);
      return;
    }

    e.preventDefault();
    navigate(route === '/' && id ? `/#${id}` : route);
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out
        ${
          scrolled
            ? 'w-[92%] md:w-auto py-3 px-5 rounded-full bg-[#F5F4F0]/90 border-[#DDDAD1] shadow-lg shadow-black/5 backdrop-blur-lg border'
            : 'w-full md:w-auto py-5 px-4 md:px-0 rounded-none bg-transparent border-transparent backdrop-blur-none border'
        }
        `}
    >
      <div className="flex items-center justify-between md:gap-12">
        <a
          href="#"
          onClick={(e) => scrollToSection(e, '')}
          className="flex items-center gap-1 font-bold text-xl tracking-tight text-[#191813]"
        >
          <span>MPDevFlow</span>
        </a>

        <div className="hidden md:flex items-center gap-7 text-xs font-semibold text-[#6E6B62] uppercase tracking-[0.12em]">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.id, item.route)}
              className="hover:text-[#191813] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <button
            onClick={onOpenBooking}
            className="inline-block bg-[#191813] hover:bg-[#D9481F] text-[#F5F4F0] text-xs font-semibold px-5 py-2.5 rounded-full transition-colors cursor-pointer"
          >
            Start a Project
          </button>
        </div>

        <button
          className="md:hidden text-[#191813]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-full left-4 right-4 mt-4 p-4 bg-[#F5F4F0]/95 backdrop-blur-xl border border-[#DDDAD1] rounded-2xl md:hidden flex flex-col gap-3 text-center shadow-2xl">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.id, item.route)}
              className="text-[#55524A] hover:text-[#191813] py-2"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="bg-[#191813] text-[#F5F4F0] font-semibold py-3 rounded-xl w-full block mt-2"
          >
            Start a Project
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
