import LegalLayout from '@/components/layout/LegalLayout';
import { Database, Eye, Lock, MessageSquare, Scale } from 'lucide-react';
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <LegalLayout title="Privacy Policy">
      <p className="mb-12 border-l-4 border-[#D9481F] pl-6 text-xl leading-8 text-[#55524A] italic">
        At MPDevFlow, we believe in <strong className="text-[#191813]">transparency</strong> and{' '}
        <strong className="text-[#191813]">honest direction</strong>. We treat your privacy with the
        same discipline we apply to our code: strict standards, no bloat, and no BS.
      </p>

      <div className="space-y-12">
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Database className="text-[#D9481F]" size={28} />
            <h3 className="text-2xl font-semibold text-[#191813] m-0">1. What We Collect</h3>
          </div>
          <p>We keep it minimal. We strictly collect only what is necessary to:</p>
          <ul className="list-disc pl-6 space-y-2 marker:text-[#D9481F]">
            <li>Respond to your booking inquiries and project proposals.</li>
            <li>Communicate with you effectively during our partnership.</li>
            <li>Improve our internal workflows to ship products faster.</li>
          </ul>
          <p className="mt-4 rounded-lg border border-[#DDDAD1] bg-[#FAF9F5] p-4 text-sm text-[#55524A]">
            If you submit a form or schedule a call, we collect your name, email, and project
            details. We do <strong className="text-[#191813]">not</strong> sell, trade, or share
            your data with third parties for marketing purposes.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <Eye className="text-[#D9481F]" size={28} />
            <h3 className="text-2xl font-semibold text-[#191813] m-0">2. How We Use Information</h3>
          </div>
          <p>
            Your information is used solely to facilitate our vision: helping you ship real, working
            software.
          </p>
          <ul className="list-disc pl-6 space-y-2 marker:text-[#D9481F]">
            <li>
              <strong className="text-[#191813]">Project Execution:</strong> To deliver the
              "Silicon-Valley-level capabilities" we promise.
            </li>
            <li>
              <strong className="text-[#191813]">Communication:</strong> To provide the "honest
              direction" and "clean communication" that sets us apart.
            </li>
          </ul>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <Lock className="text-[#D9481F]" size={28} />
            <h3 className="text-2xl font-semibold text-[#191813] m-0">3. Confidentiality & IP</h3>
          </div>
          <p>
            We operate with a{' '}
            <strong className="text-[#191813]">Partnership over Transactions</strong> mindset. Any
            project details, trade secrets, or proprietary information you share with us to scope or
            build your product is treated as strictly confidential. Your intellectual property
            remains yours. We build it; you own it.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <Scale className="text-[#D9481F]" size={28} />
            <h3 className="text-2xl font-semibold text-[#191813] m-0">4. Third-Party Tools</h3>
          </div>
          <p>
            We use industry-standard tools (like Calendly for scheduling, Forms for inquiries, and
            Analytics for performance) to power our "AI-augmented workflows." These platforms have
            their own privacy policies which govern how they handle data.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="text-[#D9481F]" size={28} />
            <h3 className="text-2xl font-semibold text-[#191813] m-0">5. Contact Us</h3>
          </div>
          <p>
            If you have any questions about how we handle your data, contact us directly. We engage
            in "clean communication" and will provide a straightforward answer.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
};

export default PrivacyPolicy;
