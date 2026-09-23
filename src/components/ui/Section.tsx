import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section
      data-motion-section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`section-shell ${className}`}
    >
      <div className="container-shell">
        <div data-reveal className="editorial-section-heading">
          <span aria-hidden="true" className="section-ghost">
            {title}
          </span>
          <h2 id={`${id}-title`} className="section-title">
            {title}
          </h2>
          <span aria-hidden="true" className="section-heading-mark">
            ↙
          </span>
        </div>
        {children}
      </div>
    </section>
  );
}
