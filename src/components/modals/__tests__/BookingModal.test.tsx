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
    expect(screen.getByText("Let's Build")).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    render(<BookingModal isOpen={false} onClose={mockClose} />);
    expect(screen.queryByText("Let's Build")).not.toBeInTheDocument();
  });

  it('switches to inquiry tab and validates empty form submission', async () => {
    render(<BookingModal isOpen={true} onClose={mockClose} />);

    // Switch to inquiry tab
    fireEvent.click(screen.getByText('Send Inquiry'));

    // Try to submit
    const submitBtn = screen.getByText('Draft in Mail App');
    fireEvent.click(submitBtn);

    // Check for validation errors
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
    fireEvent.click(screen.getByText('Send Inquiry'));

    fireEvent.change(screen.getByPlaceholderText('John Doe'), { target: { value: 'Valid Name' } });
    fireEvent.change(screen.getByPlaceholderText('john@company.com'), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Briefly describe what you want to build...'), {
      target: { value: 'Too short' },
    });

    fireEvent.click(screen.getByText('Draft in Mail App'));

    await waitFor(() => {
      expect(
        screen.getByText('Please provide more details (at least 10 characters)')
      ).toBeInTheDocument();
    });
  });
});
