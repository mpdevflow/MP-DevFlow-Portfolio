import { CALENDAR_LINK, CONTACT_EMAIL } from '@/constants';
import { zodResolver } from '@hookform/resolvers/zod';
import { Calendar, Check, Copy, Mail, MessageSquare, Send, X } from 'lucide-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const bookingSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  type: z.enum(['Web Application', 'Mobile App', 'AI Integration', 'Design System', 'Other']),
  message: z.string().min(10, 'Please provide more details (at least 10 characters)'),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'inquiry' | 'calendar'>('calendar');
  const [copied, setCopied] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      type: 'Web Application',
      name: '',
      email: '',
      message: '',
    },
  });

  if (!isOpen) return null;

  const getEmailContent = (data: BookingFormValues) => {
    const subject = `Project Inquiry: ${data.type} (${data.name})`;
    const body = `Name: ${data.name}
Email: ${data.email}
Project Type: ${data.type}

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
    // We use getValues() here because specific button click doesn't trigger form submit automatically unless type='submit'
    // But for "Draft in Gmail" which is a secondary action, we might want validation first?
    // Let's assume user wants to validate first. So we wrap this in handleSubmit too if we want validation.
    // However, the original code allowed it without validation. Let's enforce validation for better quality.
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

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-[#0B0E14] border border-white/10 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        {/* Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)] z-20" />

        {/* Header Section */}
        <div className="p-6 pb-4 border-b border-white/5 bg-[#0B0E14]/50 backdrop-blur-sm z-10 flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold text-white">Let's Build</h3>
              <p className="text-slate-400 text-sm mt-1">Choose how you want to connect.</p>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-full"
            >
              <X size={20} />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex p-1 bg-white/5 rounded-xl border border-white/5">
            <button
              onClick={() => setActiveTab('calendar')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                activeTab === 'calendar'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Calendar size={16} />
              Book a Call
            </button>
            <button
              onClick={() => setActiveTab('inquiry')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                activeTab === 'inquiry'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <MessageSquare size={16} />
              Send Inquiry
            </button>
          </div>
        </div>

        {/* Body Section - Scrollable */}
        <div className="overflow-y-auto flex-1 p-6">
          {activeTab === 'calendar' ? (
            <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center">
              <div className="w-full h-[500px] bg-white rounded-xl overflow-hidden">
                <iframe
                  src={CALENDAR_LINK}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Select a Date & Time"
                ></iframe>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(handleDefaultMail)}
              className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300"
            >
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    {...register('name')}
                    className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 transition-all placeholder:text-slate-600 ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-blue-500 focus:ring-blue-500'}`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-400 text-xs">{errors.name.message}</p>}
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register('email')}
                    className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 transition-all placeholder:text-slate-600 ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-blue-500 focus:ring-blue-500'}`}
                    placeholder="john@company.com"
                  />
                  {errors.email && <p className="text-red-400 text-xs">{errors.email.message}</p>}
                </div>
              </div>

              {/* Type - Full Width */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">
                  Project Type
                </label>
                <div className="relative">
                  <select
                    {...register('type')}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none cursor-pointer"
                  >
                    <option className="bg-[#0B0E14]" value="Web Application">
                      Web Application
                    </option>
                    <option className="bg-[#0B0E14]" value="Mobile App">
                      Mobile App
                    </option>
                    <option className="bg-[#0B0E14]" value="AI Integration">
                      AI Integration
                    </option>
                    <option className="bg-[#0B0E14]" value="Design System">
                      Design System
                    </option>
                    <option className="bg-[#0B0E14]" value="Other">
                      Other
                    </option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">
                  Project Details
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 transition-all placeholder:text-slate-600 resize-none ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-blue-500 focus:ring-blue-500'}`}
                  placeholder="Briefly describe what you want to build..."
                />
                {errors.message && <p className="text-red-400 text-xs">{errors.message.message}</p>}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={handleGmail}
                    className="py-3 px-4 bg-white text-black hover:bg-slate-200 font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Mail size={18} />
                    <span>Draft in Gmail</span>
                  </button>
                  <button
                    type="submit"
                    className="py-3 px-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all border border-white/10 flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    <span>Draft in Mail App</span>
                  </button>
                </div>
              </div>

              {/* Fallback Copy Section */}
              <div className="flex items-center justify-center gap-2 mt-4 pt-4 border-t border-white/5">
                <span className="text-slate-500 text-sm">Prefer to copy?</span>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
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
