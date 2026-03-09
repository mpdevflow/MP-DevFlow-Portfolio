import { Project } from '@/types';

export const PROJECTS: Project[] = [
  {
    title: 'GameLobbyPH',
    category: 'Gaming Startup',
    isStudioProject: false,
    description:
      'Revenue optimization and real-time infrastructure for a high-growth gaming startup. Built a full bracket-style tournament system with automated prize distribution, dispute resolution, and real-time match lifecycle management.',
    tech: ['React', 'Vite', 'Supabase', 'PostgreSQL'],
    color: 'bg-indigo-600',
    accentColor: 'from-blue-900 to-indigo-900',
    image: '/images/gamelobbyph-preview.png',
    link: '/case-studies/gamelobbyph',
    context:
      'GameLobbyPH is a 6-month-old startup rapidly gaining traction in the competitive gaming space. To sustain their growth, they needed to move from an MVP infrastructure to a robust, revenue-ready platform.',
    challenge:
      'The company faced two critical hurdles impacting revenue: 1) Financial data on the admin dashboard had discrepancies, making it hard to track true earnings. 2) Players were experiencing connection drops during high-stakes matches, leading to user churn.',
    solution:
      'MP DevFlow acted as their technical acceleration partner. We implemented a high-performance, real-time battle synchronization engine (proprietary implementation) that ensures seamless connectivity. We also re-architected the database transaction layer using Supabase, guaranteeing 100% accuracy for all financial reporting.',
    outcome:
      'Since deployment, GameLobbyPH has seen a significant increase in daily active users due to the stabilized match experience. The new dashboard now provides the founders with real-time, trusted financial data, allowing them to make confident investment decisions.',
  },
  {
    title: 'ClientEcho',
    category: 'AI SaaS Product',
    isStudioProject: true,
    description:
      'An in-house AI-powered testimonial generator for e-commerce and professionals. Built from concept to deployment using AI-augmented workflows.',
    tech: ['React', 'Vite', 'OpenAI', 'Supabase'],
    color: 'bg-teal-500',
    accentColor: 'from-teal-900 to-emerald-900',
    image: '/images/clientecho-preview.png',
    link: 'https://useclientecho.com/',
    context:
      "Like BreakBuddy, ClientEcho began as a rapid 'vibe coding' experiment to solve a specific pain point (writer's block). But unlike a prototype, we pushed it all the way to production to prove that AI-generated software is commercially viable.",
    challenge:
      "We needed to see if a product built in 48 hours could look and feel legitimate enough to earn user trust. The goal was to bridge the gap between a 'cool demo' and a 'real SaaS' with a custom domain and auth.",
    solution:
      'We used our rapid-stack (Vite + Supabase) to build the core engine, then applied a layer of professional polish—custom domain, SEO, and tiered access. It demonstrates that you can ship revenue-ready assets in the time it takes most teams to set up a repo.',
    outcome:
      "ClientEcho now runs as a standalone tool with organic traffic. It stands as a case study: we don't just prototype with AI; we ship real, usable, domain-backed products.",
  },
  {
    title: 'BreakBuddy',
    category: 'Internal R&D',
    isStudioProject: true,
    description:
      'A rapid-prototype focus timer demonstrating our AI-augmented build workflow. Concept to deployment in under a week.',
    tech: ['React', 'Vite', 'Tailwind', 'TypeScript'],
    color: 'bg-rose-500',
    accentColor: 'from-rose-900 to-pink-900',
    image: '/images/breakbuddy-preview.png',
    link: 'https://breakbuddy-ten.vercel.app/',
    context:
      "We preach speed, so we practice it. BreakBuddy was built internally to solve our own team's burnout issues, but primarily to stress-test our 'Vibe Coding' methodology.",
    challenge:
      'We needed to validate how fast we could ship a fully interactive, state-heavy React application with data visualization, without sacrificing code quality or accessibility.',
    solution:
      'Leveraging our AI-augmented stack, we compressed a typical 1-week development cycle into 48 hours. We focused on pure utility: distraction-free UI and local-first state management.',
    outcome:
      "It's now the default focus tool for our team. More importantly, it serves as a live case study: we don't just talk about fast execution; we demonstrate it with live, usable software.",
  },
];
