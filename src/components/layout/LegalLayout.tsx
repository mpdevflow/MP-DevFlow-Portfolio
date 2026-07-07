import React, { ReactNode } from 'react';

interface LegalLayoutProps {
  children: ReactNode;
  title: string;
}

const LegalLayout: React.FC<LegalLayoutProps> = ({ children, title }) => {
  return (
    <>
      <section className="border-b border-[#DDDAD1] px-4 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.16em] text-[#D9481F]">Legal</p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-none tracking-tight text-[#191813] md:text-7xl">
            {title}
          </h1>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-4xl text-[#55524A] [&_li]:leading-7 [&_p]:leading-7">
          {children}
        </div>
      </section>
    </>
  );
};

export default LegalLayout;
