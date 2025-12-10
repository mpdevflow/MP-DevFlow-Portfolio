/// <reference types="vitest/globals" />
import { fireEvent, render, screen } from '@testing-library/react';
import { Project } from '../../../types';
import WorkModal from '../WorkModal';

const mockProject: Project = {
  title: 'Test Project',
  category: 'Test Category',
  description: 'Test Description',
  tech: ['React', 'TypeScript'],
  color: 'bg-blue-500',
  link: 'https://example.com',
  context: 'Test Context',
  challenge: 'Test Challenge',
  solution: 'Test Solution',
  outcome: 'Test Outcome',
};

describe('WorkModal', () => {
  const mockClose = vi.fn();

  beforeEach(() => {
    mockClose.mockClear();
  });

  it('renders nothing when closed', () => {
    render(<WorkModal isOpen={false} onClose={mockClose} project={mockProject} />);
    expect(screen.queryByText('Test Project')).not.toBeInTheDocument();
  });

  it('renders nothing when project is null', () => {
    render(<WorkModal isOpen={true} onClose={mockClose} project={null} />);
    expect(screen.queryByText('Test Project')).not.toBeInTheDocument();
  });

  it('renders correctly when open with project', () => {
    render(<WorkModal isOpen={true} onClose={mockClose} project={mockProject} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('Test Category')).toBeInTheDocument();
    expect(screen.getByText('Test Context')).toBeInTheDocument();
    expect(screen.getByText('Test Challenge')).toBeInTheDocument();
    expect(screen.getByText('Test Solution')).toBeInTheDocument();
    expect(screen.getByText('Test Outcome')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('renders "Visit Live Site" link when link is provided', () => {
    render(<WorkModal isOpen={true} onClose={mockClose} project={mockProject} />);
    const link = screen.getByText('Visit Live Site').closest('a');
    expect(link).toHaveAttribute('href', 'https://example.com');
  });

  it('does not render "Visit Live Site" link when link is undefined', () => {
    const projectNoLink = { ...mockProject, link: undefined };
    render(<WorkModal isOpen={true} onClose={mockClose} project={projectNoLink} />);
    expect(screen.queryByText('Visit Live Site')).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    render(<WorkModal isOpen={true} onClose={mockClose} project={mockProject} />);
    // Finds the button containing X or the "Close Case Study" button
    fireEvent.click(screen.getByText('Close Case Study'));
    expect(mockClose).toHaveBeenCalledTimes(1);
  });
});
