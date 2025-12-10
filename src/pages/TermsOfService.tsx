import LegalLayout from '@/components/layout/LegalLayout';
import { AlertTriangle, Files, Handshake, MessageCircle, Shield, Zap } from 'lucide-react';
import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <LegalLayout title="Terms of Service">
      <p className="lead text-xl text-blue-100 mb-12 border-l-4 border-blue-500 pl-6 italic">
        MP DevFlow is not a typical code factory. We are a{' '}
        <strong className="text-white">product-building partner</strong>. Our terms reflect our core
        promise: Clear direction. Honest communication. Fast, high-quality execution.
      </p>

      <div className="space-y-12">
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Handshake className="text-blue-400" size={28} />
            <h3 className="text-2xl font-bold text-white m-0">1. The Partnership Model</h3>
          </div>
          <p>
            When you engage with MP DevFlow, you agree to a partnership mindset, not just a
            transactional one.
          </p>
          <ul className="list-disc pl-6 space-y-2 marker:text-blue-500">
            <li>
              <strong className="text-white">We are not order-takers:</strong> We will challenge
              assumptions if we believe it leads to a better product outcome.
            </li>
            <li>
              <strong className="text-white">Product Ownership:</strong> We treat your project as
              our own, raising risks early and proposing better solutions proactively.
            </li>
          </ul>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <Zap className="text-blue-400" size={28} />
            <h3 className="text-2xl font-bold text-white m-0">2. Speed and Quality</h3>
          </div>
          <p>
            Our daily mission is to "ship real products quickly." However, we adhere to the
            principle of <strong className="text-white">Speed with Sense</strong>. We commit to
            rapid iteration but will "say no to what does not move the product forward" or
            compromises core stability. We build fast, but not trash.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <MessageCircle className="text-blue-400" size={28} />
            <h3 className="text-2xl font-bold text-white m-0">3. Communication</h3>
          </div>
          <p>
            We promise <strong className="text-white">clean communication</strong> and{' '}
            <strong className="text-white">honest direction</strong>. We expect clients to respond
            in kind. Delays in feedback or assets will naturally impact the speed of execution.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <Files className="text-blue-400" size={28} />
            <h3 className="text-2xl font-bold text-white m-0">4. Intellectual Property</h3>
          </div>
          <p>
            Unless explicitly stated otherwise in a separate contract, the code we write for you is
            yours upon full payment. We help you "turn ideas into real, working software," and that
            software belongs to you.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <Shield className="text-blue-400" size={28} />
            <h3 className="text-2xl font-bold text-white m-0">5. Limitation of Liability</h3>
          </div>
          <p>
            We use advanced workflows and "AI-powered execution" to accelerate development. While we
            strive for perfection, software development carries inherent risks. MP DevFlow provides
            its services "as is" and is not liable for indirect damages or business losses.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="text-blue-400" size={28} />
            <h3 className="text-2xl font-bold text-white m-0">6. Modifications</h3>
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
