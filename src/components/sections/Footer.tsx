import { CONTACT_EMAIL } from '@/constants';
import { NAV_ITEMS } from '@/data/studio';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { Mail } from 'lucide-react';
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface FooterProps {
  onOpenBooking: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToSection = useSmoothScroll();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string, route = '/') => {
    if (location.pathname === '/') {
      scrollToSection(e, id);
      return;
    }

    e.preventDefault();
    navigate(route === '/' && id ? `/#${id}` : route);
  };

  return (
    <footer className="border-t border-[#DDDAD1] bg-[#F5F4F0] px-4 pt-16 pb-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 text-4xl font-bold tracking-tight text-[#191813] md:text-6xl">
              MPDevFlow<span className="text-[#D9481F]">.</span>
            </div>
            <p className="max-w-md leading-7 text-[#55524A]">
              Founder-led web and product development from the Philippines for teams that need
              practical work shipped properly.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="w-fit rounded-full bg-[#191813] px-6 py-3 text-sm font-semibold text-[#F5F4F0] transition-colors hover:bg-[#D9481F]"
          >
            Start a Project
          </button>
        </div>

        <div className="flex flex-col gap-8 border-t border-[#DDDAD1] pt-6 md:flex-row md:items-center md:justify-between">
          <nav className="flex flex-wrap gap-5 font-mono text-xs uppercase tracking-[0.1em] text-[#6E6B62]">
            <a href="#" onClick={(e) => handleNav(e, '')} className="hover:text-[#191813]">
              Home
            </a>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNav(e, item.id, item.route)}
                className="hover:text-[#191813]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-4 text-sm text-[#6E6B62] md:flex-row md:items-center md:gap-6">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 hover:text-[#191813]"
            >
              <Mail size={16} />
              {CONTACT_EMAIL}
            </a>
            <span>&copy; {new Date().getFullYear()} MPDevFlow</span>
            <div className="flex gap-4">
              <Link to="/privacy" className="hover:text-[#191813]">
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-[#191813]">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
