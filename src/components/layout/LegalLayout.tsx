import type { ReactNode } from 'react';
export default function LegalLayout({ children, title }: { children: ReactNode; title: string }) {
  return (
    <>
      <section className="page-intro legal-intro">
        <div className="chapter">
          <span>Legal</span>
          <i />
          <span>MPDevFlow</span>
        </div>
        <h1>
          {title}
          <span className="accent">.</span>
        </h1>
      </section>
      <div className="legal-content">{children}</div>
    </>
  );
}
