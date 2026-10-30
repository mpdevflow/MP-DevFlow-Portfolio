import { useDialog } from '@/hooks/useDialog';
import { CALENDAR_LINK, CONTACT_EMAIL } from '@/constants';
import {
  BUDGET_OPTIONS,
  PROJECT_TYPE_OPTIONS,
  STAGE_OPTIONS,
  TIMELINE_OPTIONS,
} from '@/data/studio';
import { zodResolver } from '@hookform/resolvers/zod';
import { Calendar, Check, Copy, Mail, MessageSquare, Send, X } from 'lucide-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const bookingSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  projectType: z.enum(PROJECT_TYPE_OPTIONS),
  budgetRange: z.enum(BUDGET_OPTIONS),
  timeline: z.enum(TIMELINE_OPTIONS),
  currentStage: z.enum(STAGE_OPTIONS),
  message: z.string().min(10, 'Please provide more details (at least 10 characters)'),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'inquiry' | 'calendar'>('inquiry');
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const dialogRef = useDialog(isOpen, onClose);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      projectType: 'Not sure yet',
      budgetRange: 'I need guidance',
      timeline: 'I need guidance',
      currentStage: 'Idea or rough notes',
      message: '',
    },
  });

  if (!isOpen) return null;

  const getEmailContent = (data: BookingFormValues) => {
    const subject = `Project Inquiry: ${data.projectType} (${data.name})`;
    const body = `Name: ${data.name}
Email: ${data.email}
Company: ${data.company || 'Not provided'}
Project Type: ${data.projectType}
Budget Range: ${data.budgetRange}
Timeline: ${data.timeline}
Current Stage: ${data.currentStage}

Project Details:
${data.message}`;
    return { subject, body };
  };

  const handleDefaultMail = (data: BookingFormValues) => {
    const { subject, body } = getEmailContent(data);
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, '_self');
  };

  const handleGmail = () => {
    handleSubmit((data) => {
      const { subject, body } = getEmailContent(data);
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(gmailUrl, '_blank');
    })();
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setCopyError(false);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopyError(true);
    }
  };

  const selectClass =
    'w-full appearance-none rounded-lg border border-[var(--hairline)] bg-[var(--surface)] px-4 py-3 text-[var(--ink)] transition-colors focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]';
  const inputClass =
    'w-full rounded-lg border border-[var(--hairline)] bg-[var(--surface)] px-4 py-3 text-[var(--ink)] transition-colors placeholder:text-[var(--secondary)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]';
  const labelClass = 'text-xs font-semibold uppercase tracking-[0.12em] text-[var(--secondary)]';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="dialog-backdrop absolute inset-0" aria-hidden="true" onClick={onClose} />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        tabIndex={-1}
        className="booking-dialog relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-[var(--hairline)] bg-[var(--canvas)] shadow-2xl"
      >
        <div className="h-1 w-full bg-[var(--accent)]" />

        <div className="border-b border-[var(--hairline)] p-6">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <h2
                id="booking-title"
                className="text-2xl font-semibold tracking-tight text-[var(--ink)]"
              >
                Free Project Call
              </h2>
              <p className="mt-1 text-sm leading-6 text-[var(--secondary)]">
                Share rough notes or book a quick virtual coffee. It is fine if budget, timing, or
                scope still need shaping.
              </p>
            </div>
            <button
              onClick={onClose}
              className="dialog-close"
              aria-label="Close project inquiry modal"
            >
              <X size={20} />
            </button>
          </div>

          <div className="dialog-tabs grid rounded-xl border border-[var(--hairline)] bg-[var(--surface-tint)] p-1 sm:grid-cols-2">
            <button
              onClick={() => setActiveTab('inquiry')}
              aria-pressed={activeTab === 'inquiry'}
              className={`flex items-center justify-center gap-2 rounded-lg py-2 text-sm font-semibold transition-colors ${
                activeTab === 'inquiry'
                  ? 'bg-[var(--ink)] text-[var(--canvas)]'
                  : 'text-[var(--secondary)] hover:text-[var(--ink)]'
              }`}
            >
              <MessageSquare size={16} />
              Send Brief
            </button>
            <button
              onClick={() => setActiveTab('calendar')}
              aria-pressed={activeTab === 'calendar'}
              className={`flex items-center justify-center gap-2 rounded-lg py-2 text-sm font-semibold transition-colors ${
                activeTab === 'calendar'
                  ? 'bg-[var(--ink)] text-[var(--canvas)]'
                  : 'text-[var(--secondary)] hover:text-[var(--ink)]'
              }`}
            >
              <Calendar size={16} />
              Free Call
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'calendar' ? (
            <div className="flex min-h-[420px] flex-col items-center justify-center gap-4 text-center">
              <div className="h-[520px] w-full overflow-hidden rounded-xl border border-[var(--hairline)] bg-white">
                <iframe
                  src={CALENDAR_LINK}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Select a Date & Time"
                />
              </div>
              <a
                className="text-link"
                href={CALENDAR_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open calendar in a new tab ↗
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit(handleDefaultMail)} className="space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="booking-name" className={labelClass}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="booking-name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'error-name' : undefined}
                    {...register('name')}
                    className={inputClass}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p id="error-name" role="alert" className="form-error">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="booking-email" className={labelClass}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="booking-email"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'error-email' : undefined}
                    {...register('email')}
                    className={inputClass}
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p id="error-email" role="alert" className="form-error">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="booking-company" className={labelClass}>
                  Company or project name
                </label>
                <input
                  type="text"
                  id="booking-company"
                  aria-invalid={Boolean(errors.company)}
                  aria-describedby={errors.company ? 'error-company' : undefined}
                  {...register('company')}
                  className={inputClass}
                  placeholder="Optional"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="booking-projectType" className={labelClass}>
                    Project type
                  </label>
                  <select
                    id="booking-projectType"
                    aria-invalid={Boolean(errors.projectType)}
                    aria-describedby={errors.projectType ? 'error-projectType' : undefined}
                    {...register('projectType')}
                    className={selectClass}
                  >
                    {PROJECT_TYPE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="booking-budgetRange" className={labelClass}>
                    Budget range
                  </label>
                  <select
                    id="booking-budgetRange"
                    aria-invalid={Boolean(errors.budgetRange)}
                    aria-describedby={errors.budgetRange ? 'error-budgetRange' : undefined}
                    {...register('budgetRange')}
                    className={selectClass}
                  >
                    {BUDGET_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="booking-timeline" className={labelClass}>
                    Timeline
                  </label>
                  <select
                    id="booking-timeline"
                    aria-invalid={Boolean(errors.timeline)}
                    aria-describedby={errors.timeline ? 'error-timeline' : undefined}
                    {...register('timeline')}
                    className={selectClass}
                  >
                    {TIMELINE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="booking-currentStage" className={labelClass}>
                    Current stage
                  </label>
                  <select
                    id="booking-currentStage"
                    aria-invalid={Boolean(errors.currentStage)}
                    aria-describedby={errors.currentStage ? 'error-currentStage' : undefined}
                    {...register('currentStage')}
                    className={selectClass}
                  >
                    {STAGE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="booking-message" className={labelClass}>
                  Project details
                </label>
                <textarea
                  id="booking-message"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'error-message' : undefined}
                  {...register('message')}
                  rows={5}
                  className={`${inputClass} resize-none`}
                  placeholder="Briefly describe what you want to build, improve, fix, or validate..."
                />
                {errors.message && (
                  <p id="error-message" role="alert" className="form-error">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={handleGmail}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--ink)] px-4 py-3 font-semibold text-[var(--canvas)] transition-colors hover:bg-[var(--accent)]"
                >
                  <Mail size={18} />
                  Draft in Gmail
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--control-border)] bg-[var(--surface)] px-4 py-3 font-semibold text-[var(--ink)] transition-colors hover:border-[var(--ink)]"
                >
                  <Send size={18} />
                  Draft in Mail App
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 border-t border-[var(--hairline)] pt-4 text-sm text-[var(--secondary)]">
                <span>Prefer to copy?</span>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 font-semibold text-[var(--accent)] hover:text-[var(--ink)]"
                >
                  {CONTACT_EMAIL}
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span className="sr-only" role="status">
                    {copied
                      ? 'Email copied'
                      : copyError
                        ? 'Copy failed. Please select the email address to copy it.'
                        : ''}
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
