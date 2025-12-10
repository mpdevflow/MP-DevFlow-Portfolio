import { CONTACT_EMAIL } from '@/constants';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { Mail } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  onOpenBooking: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToSection = useSmoothScroll();

  return (
    <footer className="bg-[#05070a] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 font-bold text-2xl tracking-tight mb-4">
              <span className="text-blue-500">MP</span>
              <span className="text-white">DevFlow</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Building the future of digital products from the Philippines to the world. Quality
              code, transparent process.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Sitemap</h4>
            <ul className="space-y-4 text-slate-400">
              <li>
                <a
                  href="#"
                  onClick={(e) => scrollToSection(e, '')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => scrollToSection(e, 'services')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#philosophy"
                  onClick={(e) => scrollToSection(e, 'philosophy')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Philosophy
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  onClick={(e) => scrollToSection(e, 'work')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Work
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>Quezon City, Philippines</li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="text-sm text-blue-400 hover:text-blue-300 font-medium cursor-pointer"
                >
                  Schedule a Call &rarr;
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} MP DevFlow. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
