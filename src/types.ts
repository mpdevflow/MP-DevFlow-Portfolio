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
  hasPreviewImage?: boolean;
  previewImageFit?: 'cover' | 'contain';
  isStudioProject?: boolean;
  link?: string;
  liveUrl?: string;
  caseStudyPath?: string;
  // detailed fields for modal
  context: string;
  challenge: string;
  solution: string;
  outcome: string;
}
