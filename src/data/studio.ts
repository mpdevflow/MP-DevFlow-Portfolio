import {
  BarChart3,
  BriefcaseBusiness,
  Building2,
  Code2,
  FileCode2,
  LifeBuoy,
  Rocket,
  Settings2,
  ShieldCheck,
  Store,
  Users,
  Workflow,
} from 'lucide-react';
import React from 'react';

export const NAV_ITEMS = [
  { label: 'Services', href: '#services', id: 'services', route: '/services' },
  { label: 'Work', href: '#work', id: 'work', route: '/' },
  { label: 'Contact', href: '#contact', id: 'contact', route: '/contact' },
];

export const TRUST_POINTS = [
  '10+ years frontend and product engineering',
  'React, Next.js, Supabase, Tailwind, WordPress',
  'Founder-led architecture, review, and delivery',
  'Flexible team size depending on scope',
];

export const AUDIENCES = [
  {
    title: 'Startup Founders',
    description:
      'Turn an idea, prototype, or rough spec into a working MVP, SaaS product, or launch-ready web app.',
    icon: React.createElement(Rocket, { size: 22 }),
  },
  {
    title: 'Agencies',
    description:
      'Get reliable frontend, full-stack, CMS, or maintenance support without hiring full-time.',
    icon: React.createElement(BriefcaseBusiness, { size: 22 }),
  },
  {
    title: 'Small Businesses',
    description:
      'Launch professional websites, landing pages, forms, booking flows, and business tools that help you operate better.',
    icon: React.createElement(Store, { size: 22 }),
  },
  {
    title: 'Product Teams',
    description:
      'Add senior-led execution for features, dashboards, UI systems, refactors, and product improvements.',
    icon: React.createElement(Users, { size: 22 }),
  },
];

export const SERVICES = [
  {
    title: 'Websites & Landing Pages',
    description:
      'Landing pages, business websites, launch pages, CMS websites, forms, responsive UI, and SEO basics.',
    icon: React.createElement(FileCode2, { size: 24 }),
  },
  {
    title: 'MVPs & SaaS Products',
    description:
      'Auth, dashboards, subscriptions, admin panels, user flows, payments, Supabase/Postgres, and APIs.',
    icon: React.createElement(Code2, { size: 24 }),
  },
  {
    title: 'Internal Tools & Dashboards',
    description:
      'Admin tools, reporting dashboards, workflow systems, CRM-lite tools, approval flows, and business automation.',
    icon: React.createElement(BarChart3, { size: 24 }),
  },
  {
    title: 'Dev Support & Maintenance',
    description:
      'Bug fixes, UI polish, CMS tweaks, monthly support, agency overflow, and focused feature sprints.',
    icon: React.createElement(LifeBuoy, { size: 24 }),
  },
  {
    title: 'Systems & Automation',
    description:
      'Workflow systems, process automation, integrations, and tooling designed around real user problems.',
    icon: React.createElement(Workflow, { size: 24 }),
  },
];

export const PROCESS_STEPS = [
  {
    title: 'Scope',
    description: 'We understand the goal, users, timeline, budget, and success criteria.',
    icon: React.createElement(Settings2, { size: 20 }),
  },
  {
    title: 'Plan',
    description: 'We break the work into clear phases, deliverables, and technical decisions.',
    icon: React.createElement(Building2, { size: 20 }),
  },
  {
    title: 'Build',
    description:
      'MP leads technical direction while trusted builders help execute based on project scope.',
    icon: React.createElement(Code2, { size: 20 }),
  },
  {
    title: 'Launch & Support',
    description: 'We ship, fix, document, and support after release.',
    icon: React.createElement(ShieldCheck, { size: 20 }),
  },
];

export const PROJECT_TYPE_OPTIONS = [
  'Website or landing page',
  'MVP or SaaS product',
  'Dashboard or internal tool',
  'CMS, WordPress, or maintenance',
  'Agency overflow or dev support',
  'Not sure yet',
] as const;

export const BUDGET_OPTIONS = [
  'I need guidance',
  'Under $1k',
  '$1k - $3k',
  '$3k - $7k',
  '$7k - $15k',
  '$15k+',
] as const;

export const TIMELINE_OPTIONS = [
  'I need guidance',
  'ASAP',
  '2-4 weeks',
  '1-2 months',
  '3+ months',
  'Flexible',
] as const;

export const STAGE_OPTIONS = [
  'Idea or rough notes',
  'Designs or wireframes ready',
  'Existing product needs work',
  'Already launched and needs support',
  'Agency/client project',
] as const;
