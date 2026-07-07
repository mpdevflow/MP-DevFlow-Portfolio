/// <reference types="vitest/globals" />
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import BookingModal from '../BookingModal';

describe('BookingModal Validation', () => {
  const mockClose = vi.fn();

  beforeEach(() => {
    mockClose.mockClear();
  });

  it('renders correctly when open', () => {
    render(<BookingModal isOpen={true} onClose={mockClose} />);
    expect(screen.getByText('Free Project Call')).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    render(<BookingModal isOpen={false} onClose={mockClose} />);
    expect(screen.queryByText('Free Project Call')).not.toBeInTheDocument();
  });

  it('validates empty form submission', async () => {
    render(<BookingModal isOpen={true} onClose={mockClose} />);

    const submitBtn = screen.getByText('Draft in Mail App');
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument();
      expect(screen.getByText('Invalid email address')).toBeInTheDocument();
      expect(
        screen.getByText('Please provide more details (at least 10 characters)')
      ).toBeInTheDocument();
    });
  });

  it('validates short message', async () => {
    render(<BookingModal isOpen={true} onClose={mockClose} />);

    fireEvent.change(screen.getByPlaceholderText('John Doe'), { target: { value: 'Valid Name' } });
    fireEvent.change(screen.getByPlaceholderText('john@company.com'), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(
      screen.getByPlaceholderText(
        'Briefly describe what you want to build, improve, fix, or validate...'
      ),
      {
        target: { value: 'Too short' },
      }
    );

    fireEvent.click(screen.getByText('Draft in Mail App'));

    await waitFor(() => {
      expect(
        screen.getByText('Please provide more details (at least 10 characters)')
      ).toBeInTheDocument();
    });
  });
});
