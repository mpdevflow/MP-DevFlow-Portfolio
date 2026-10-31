import LegalLayout from '@/components/layout/LegalLayout';
import SEO from '@/components/SEO';
import { AlertTriangle, Files, Handshake, MessageCircle, Shield, Zap } from 'lucide-react';
import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <LegalLayout title="Terms of Service">
      <SEO path="/terms" />
      <p className="mb-12 border-l-4 border-[var(--accent)] pl-6 text-xl leading-8 text-[var(--secondary)] italic">
        MPDevFlow is not a typical code factory. We are a{' '}
        <strong className="text-[var(--ink)]">product-building partner</strong>. Our terms reflect
        our core promise: Clear direction. Honest communication. Fast, high-quality execution.
      </p>

      <div className="space-y-12">
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Handshake className="text-[var(--accent)]" size={28} />
            <h2 className="text-2xl font-semibold text-[var(--ink)] m-0">
              1. The Partnership Model
            </h2>
          </div>
          <p>
            When you engage with MPDevFlow, you agree to a partnership mindset, not just a
            transactional one.
          </p>
          <ul className="list-disc pl-6 space-y-2 marker:text-[var(--accent)]">
            <li>
              <strong className="text-[var(--ink)]">We are not order-takers:</strong> We will
              challenge assumptions if we believe it leads to a better product outcome.
            </li>
            <li>
              <strong className="text-[var(--ink)]">Product Ownership:</strong> We treat your
              project as our own, raising risks early and proposing better solutions proactively.
            </li>
          </ul>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <Zap className="text-[var(--accent)]" size={28} />
            <h2 className="text-2xl font-semibold text-[var(--ink)] m-0">2. Speed and Quality</h2>
          </div>
          <p>
            Our daily mission is to "ship real products quickly." However, we adhere to the
            principle of <strong className="text-[var(--ink)]">Speed with Sense</strong>. We commit
            to rapid iteration but will "say no to what does not move the product forward" or
            compromises core stability. We build fast, but not trash.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <MessageCircle className="text-[var(--accent)]" size={28} />
            <h2 className="text-2xl font-semibold text-[var(--ink)] m-0">3. Communication</h2>
          </div>
          <p>
            We promise <strong className="text-[var(--ink)]">clean communication</strong> and{' '}
            <strong className="text-[var(--ink)]">honest direction</strong>. We expect clients to
            respond in kind. Delays in feedback or assets will naturally impact the speed of
            execution.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <Files className="text-[var(--accent)]" size={28} />
            <h2 className="text-2xl font-semibold text-[var(--ink)] m-0">
              4. Intellectual Property
            </h2>
          </div>
          <p>
            Unless explicitly stated otherwise in a separate contract, the code we write for you is
            yours upon full payment. We help you "turn ideas into real, working software," and that
            software belongs to you.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <Shield className="text-[var(--accent)]" size={28} />
            <h2 className="text-2xl font-semibold text-[var(--ink)] m-0">
              5. Limitation of Liability
            </h2>
          </div>
          <p>
            We use advanced workflows and "AI-powered execution" to accelerate development. While we
            strive for perfection, software development carries inherent risks. MPDevFlow provides
            its services "as is" and is not liable for indirect damages or business losses.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="text-[var(--accent)]" size={28} />
            <h2 className="text-2xl font-semibold text-[var(--ink)] m-0">6. Modifications</h2>
          </div>
          <p>
            We reserve the right to modify these terms. Continued engagement with our agency
            constitutes acceptance of these terms.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
};

export default TermsOfService;
