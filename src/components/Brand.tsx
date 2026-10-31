import { Link } from 'react-router-dom';
import { SITE } from '@/data/seo';

export default function Brand() {
  return (
    <Link to="/" className="wordmark brand-lockup" aria-label={`${SITE.name} home`}>
      <img
        className="brand-mark"
        src={SITE.mark}
        width="32"
        height="32"
        alt=""
        aria-hidden="true"
      />
      <span>DevFlow</span>
    </Link>
  );
}
