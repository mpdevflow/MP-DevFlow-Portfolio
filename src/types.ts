import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  colSpan?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  color: string;
  accentColor?: string;
  image?: string;
  isStudioProject?: boolean;
  link?: string;
  // detailed fields for modal
  context: string;
  challenge: string;
  solution: string;
  outcome: string;
}
