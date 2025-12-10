import LegalLayout from '@/components/layout/LegalLayout';
import { Database, Eye, Lock, MessageSquare, Scale } from 'lucide-react';
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <LegalLayout title="Privacy Policy">
      <p className="lead text-xl text-blue-100 mb-12 border-l-4 border-blue-500 pl-6 italic">
        At MP DevFlow, we believe in <strong className="text-white">transparency</strong> and{' '}
        <strong className="text-white">honest direction</strong>. We treat your privacy with the
        same discipline we apply to our code: strict standards, no bloat, and no BS.
      </p>

      <div className="space-y-12">
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Database className="text-blue-400" size={28} />
            <h3 className="text-2xl font-bold text-white m-0">1. What We Collect</h3>
          </div>
          <p>We keep it minimal. We strictly collect only what is necessary to:</p>
          <ul className="list-disc pl-6 space-y-2 marker:text-blue-500">
            <li>Respond to your booking inquiries and project proposals.</li>
            <li>Communicate with you effectively during our partnership.</li>
            <li>Improve our internal workflows to ship products faster.</li>
          </ul>
          <p className="mt-4 p-4 bg-white/5 rounded-xl border border-white/10 text-sm text-slate-300">
            If you submit a form or schedule a call, we collect your name, email, and project
            details. We do <strong className="text-white">not</strong> sell, trade, or share your
            data with third parties for marketing purposes.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <Eye className="text-blue-400" size={28} />
            <h3 className="text-2xl font-bold text-white m-0">2. How We Use Information</h3>
          </div>
          <p>
            Your information is used solely to facilitate our vision: helping you ship real, working
            software.
          </p>
          <ul className="list-disc pl-6 space-y-2 marker:text-blue-500">
            <li>
              <strong className="text-white">Project Execution:</strong> To deliver the
              "Silicon-Valley-level capabilities" we promise.
            </li>
            <li>
              <strong className="text-white">Communication:</strong> To provide the "honest
              direction" and "clean communication" that sets us apart.
            </li>
          </ul>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <Lock className="text-blue-400" size={28} />
            <h3 className="text-2xl font-bold text-white m-0">3. Confidentiality & IP</h3>
          </div>
          <p>
            We operate with a <strong className="text-white">Partnership over Transactions</strong>{' '}
            mindset. Any project details, trade secrets, or proprietary information you share with
            us to scope or build your product is treated as strictly confidential. Your intellectual
            property remains yours. We build it; you own it.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <Scale className="text-blue-400" size={28} />
            <h3 className="text-2xl font-bold text-white m-0">4. Third-Party Tools</h3>
          </div>
          <p>
            We use industry-standard tools (like Calendly for scheduling, Forms for inquiries, and
            Analytics for performance) to power our "AI-augmented workflows." These platforms have
            their own privacy policies which govern how they handle data.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="text-blue-400" size={28} />
            <h3 className="text-2xl font-bold text-white m-0">5. Contact Us</h3>
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
