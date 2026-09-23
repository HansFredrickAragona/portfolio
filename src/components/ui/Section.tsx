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
      id={id}
      aria-labelledby={`${id}-title`}
      className={`section-shell ${className}`}
    >
      <div className="container-shell">
        <h2
          id={`${id}-title`}
          className="text-primary mb-6 text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
