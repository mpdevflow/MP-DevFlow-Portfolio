import { Project } from '@/types';

export const PROJECTS: Project[] = [
  {
    title: 'GameLobbyPH',
    category: 'Product Build',
    isStudioProject: false,
    description:
      'Revenue optimization and real-time infrastructure for a high-growth gaming startup. Built a full bracket-style tournament system with automated prize distribution, dispute resolution, and real-time match lifecycle management.',
    tech: ['React', 'Vite', 'Supabase', 'PostgreSQL'],
    color: 'bg-indigo-600',
    accentColor: 'from-blue-900 to-indigo-900',
    image: '/images/gamelobbyph-preview.png',
    hasPreviewImage: true,
    caseStudyPath: '/case-studies/gamelobbyph',
    liveUrl: 'https://gamelobbyph.com',
    context:
      'GameLobbyPH is a 6-month-old startup rapidly gaining traction in the competitive gaming space. To sustain their growth, they needed to move from an MVP infrastructure to a robust, revenue-ready platform.',
    challenge:
      'The company faced two critical hurdles impacting revenue: 1) Financial data on the admin dashboard had discrepancies, making it hard to track true earnings. 2) Players were experiencing connection drops during high-stakes matches, leading to user churn.',
    solution:
      'MPDevFlow acted as their technical acceleration partner. We implemented a high-performance, real-time battle synchronization engine (proprietary implementation) that ensures seamless connectivity. We also re-architected the database transaction layer using Supabase, guaranteeing 100% accuracy for all financial reporting.',
    outcome:
      'Since deployment, GameLobbyPH has seen a significant increase in daily active users due to the stabilized match experience. The new dashboard now provides the founders with real-time, trusted financial data, allowing them to make confident investment decisions.',
  },
  {
    title: 'Supra Data',
    category: 'Realtime Data Platform',
    isStudioProject: false,
    description:
      'A realtime crypto price-feed experience focused on keeping token market data accurate, visible, and easy to scan while prices update continuously in the background.',
    tech: ['React', 'Realtime Data', 'Crypto Feeds', 'UX Performance'],
    color: 'bg-pink-600',
    accentColor: 'from-slate-950 to-pink-950',
    image: '/images/supra-data-preview.png',
    hasPreviewImage: true,
    caseStudyPath: '/case-studies/supra-data',
    liveUrl: 'https://www.supra.com/data',
    context:
      'Supra Data gives users a live view of crypto token prices, market caps, and short-term movements. The experience needs to feel current at a glance without making the interface jump, flicker, or distract users as data changes.',
    challenge:
      'Realtime token data changes constantly, but raw updates can create a noisy experience. The product needed to preserve confidence in data accuracy while keeping search, scanning, and comparison smooth across many active price cards.',
    solution:
      'We focused the experience around stable card layouts, clear live indicators, readable deltas, and update-friendly visual hierarchy so price changes can refresh without disrupting the user journey.',
    outcome:
      'The result is a cleaner realtime data surface where users can track crypto token movement with less friction, stronger trust in the displayed values, and a smoother browsing experience during active market changes.',
  },
  {
    title: 'Diwata AI',
    category: 'Mobile & Web App',
    isStudioProject: false,
    description:
      'An offline-first AI teacher assistant for educators who need to prepare lessons, generate quizzes, support students, and keep teaching even when internet access is limited or unavailable.',
    tech: ['Mobile & Web', 'AI Assistant', 'Offline-First', 'Education Tech'],
    color: 'bg-purple-600',
    accentColor: 'from-purple-950 to-amber-900',
    image: '/images/diwata-ai-logo.png',
    hasPreviewImage: true,
    previewImageFit: 'contain',
    caseStudyPath: '/case-studies/diwata-ai',
    liveUrl: 'https://diwata-ai-web.vercel.app/',
    context:
      'Diwata AI is built for educators working in real classrooms where connectivity can be unreliable. The product brings AI-assisted lesson planning, quiz creation, student support, and teaching workflows into a mobile and web experience that can continue to be useful offline.',
    challenge:
      'Teachers often need support while moving between classrooms, preparing materials quickly, or teaching in areas with unstable internet. A purely online AI tool would fail at the moment it is needed most, so the experience had to prioritize access, continuity, and practical classroom use.',
    solution:
      'We shaped Diwata AI around offline-first workflows, mobile-friendly interaction, and clear teaching tasks: create lesson materials, generate quizzes, assist students, and keep core educator tools available even without a live connection.',
    outcome:
      'The result is a more resilient AI teaching assistant that helps educators save preparation time, keep classroom momentum, and rely on the product across both connected and low-connectivity environments.',
  },
];
