import { Link } from 'react-router-dom';
import { CONTACT_EMAIL } from '@/constants';
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link to="/" className="wordmark">
          MPDevFlow
        </Link>
        <span className="eyebrow">Independent thinking. Working products.</span>
        <a className="text-link" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL} <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} MPDevFlow · Philippines</span>
        <nav aria-label="Footer navigation">
          <Link to="/#work">Work</Link>
          <Link to="/services">Services</Link>
          <Link to="/#studio">Studio</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </nav>
      </div>
    </footer>
  );
}
