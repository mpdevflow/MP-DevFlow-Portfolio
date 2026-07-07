import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    window.requestAnimationFrame(() => {
      const element = document.getElementById(hash.slice(1));
      if (!element) return;

      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    });
  }, [hash, pathname]);

  return null;
};

export default ScrollToTop;
