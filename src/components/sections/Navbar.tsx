import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Brand from '@/components/Brand';
export default function Navbar({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [location]);
  const links = (
    <>
      <Link to="/#work">Work</Link>
      <Link to="/services">Services</Link>
      <Link to="/#studio">Studio</Link>
    </>
  );
  return (
    <header className="site-header">
      <Brand />
      <nav aria-label="Main navigation" className="desktop-nav">
        {links}
        <button className="button" onClick={onOpenBooking}>
          Book a project call
        </button>
      </nav>
      <button
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setOpen(!open)}
      >
        <span>{open ? <X /> : <Menu />}</span>
      </button>
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="mobile-nav"
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setOpen(false);
              (e.currentTarget.previousElementSibling as HTMLButtonElement)?.focus();
            }
          }}
        >
          {links}
          <Link to="/contact">Contact</Link>
          <button
            className="button"
            onClick={() => {
              setOpen(false);
              onOpenBooking();
            }}
          >
            Book a project call
          </button>
        </nav>
      )}
    </header>
  );
}
