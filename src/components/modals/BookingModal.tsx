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

  const copyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const selectClass =
    'w-full appearance-none rounded-lg border border-[#DDDAD1] bg-[#FAF9F5] px-4 py-3 text-[#191813] outline-none transition-colors focus:border-[#D9481F] focus:ring-1 focus:ring-[#D9481F]';
  const inputClass =
    'w-full rounded-lg border border-[#DDDAD1] bg-[#FAF9F5] px-4 py-3 text-[#191813] outline-none transition-colors placeholder:text-[#9A968B] focus:border-[#D9481F] focus:ring-1 focus:ring-[#D9481F]';
  const labelClass = 'text-xs font-semibold uppercase tracking-[0.12em] text-[#6E6B62]';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/55 backdrop-blur-md" onClick={onClose} />

      <div className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-[#DDDAD1] bg-[#F5F4F0] shadow-2xl">
        <div className="h-1 w-full bg-[#D9481F]" />

        <div className="border-b border-[#DDDAD1] p-6">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-[#191813]">
                Free Project Call
              </h3>
              <p className="mt-1 text-sm leading-6 text-[#55524A]">
                Share rough notes or book a quick virtual coffee. It is fine if budget, timing, or
                scope still need shaping.
              </p>
            </div>
            <button
              onClick={onClose}
              className="rounded-full bg-[#EFEEE8] p-2 text-[#6E6B62] transition-colors hover:text-[#191813]"
              aria-label="Close project inquiry modal"
            >
              <X size={20} />
            </button>
          </div>

          <div className="grid rounded-xl border border-[#DDDAD1] bg-[#EFEEE8] p-1 sm:grid-cols-2">
            <button
              onClick={() => setActiveTab('inquiry')}
              className={`flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold transition-colors ${
                activeTab === 'inquiry'
                  ? 'bg-[#191813] text-[#F5F4F0]'
                  : 'text-[#55524A] hover:text-[#191813]'
              }`}
            >
              <MessageSquare size={16} />
              Send Brief
            </button>
            <button
              onClick={() => setActiveTab('calendar')}
              className={`flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold transition-colors ${
                activeTab === 'calendar'
                  ? 'bg-[#191813] text-[#F5F4F0]'
                  : 'text-[#55524A] hover:text-[#191813]'
              }`}
            >
              <Calendar size={16} />
              Free Call
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'calendar' ? (
            <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
              <div className="h-[520px] w-full overflow-hidden rounded-xl border border-[#DDDAD1] bg-white">
                <iframe
                  src={CALENDAR_LINK}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Select a Date & Time"
                />
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit(handleDefaultMail)} className="space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label className={labelClass}>Name</label>
                  <input
                    type="text"
                    {...register('name')}
                    className={inputClass}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-xs text-red-600">{errors.name.message}</p>}
                </div>
                <div className="space-y-1.5">
                  <label className={labelClass}>Email</label>
                  <input
                    type="email"
                    {...register('email')}
                    className={inputClass}
                    placeholder="john@company.com"
                  />
                  {errors.email && <p className="text-xs text-red-600">{errors.email.message}</p>}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className={labelClass}>Company or project name</label>
                <input
                  type="text"
                  {...register('company')}
                  className={inputClass}
                  placeholder="Optional"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label className={labelClass}>Project type</label>
                  <select {...register('projectType')} className={selectClass}>
                    {PROJECT_TYPE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className={labelClass}>Budget range</label>
                  <select {...register('budgetRange')} className={selectClass}>
                    {BUDGET_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label className={labelClass}>Timeline</label>
                  <select {...register('timeline')} className={selectClass}>
                    {TIMELINE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className={labelClass}>Current stage</label>
                  <select {...register('currentStage')} className={selectClass}>
                    {STAGE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className={labelClass}>Project details</label>
                <textarea
                  {...register('message')}
                  rows={5}
                  className={`${inputClass} resize-none`}
                  placeholder="Briefly describe what you want to build, improve, fix, or validate..."
                />
                {errors.message && <p className="text-xs text-red-600">{errors.message.message}</p>}
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={handleGmail}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#191813] px-4 py-3 font-semibold text-[#F5F4F0] transition-colors hover:bg-[#D9481F]"
                >
                  <Mail size={18} />
                  Draft in Gmail
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#CFCBC0] bg-[#FAF9F5] px-4 py-3 font-semibold text-[#191813] transition-colors hover:border-[#191813]"
                >
                  <Send size={18} />
                  Draft in Mail App
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 border-t border-[#DDDAD1] pt-4 text-sm text-[#6E6B62]">
                <span>Prefer to copy?</span>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 font-semibold text-[#D9481F] hover:text-[#191813]"
                >
                  {CONTACT_EMAIL}
                  {copied ? <Check size={14} /> : <Copy size={14} />}
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
