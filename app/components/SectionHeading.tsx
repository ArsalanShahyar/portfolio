import type { ReactNode } from "react";

export function SectionHeading({
  children,
  subtitle,
}: {
  children: ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-extrabold gradient-text mb-3">
        {children}
      </h1>
      {subtitle && (
        <p className="text-(--text-secondary) text-lg max-w-2xl mx-auto font-light">
          {subtitle}
        </p>
      )}
      <div className="mt-4 mx-auto w-24 h-1 rounded-full bg-linear-to-r from-(--color-primary) via-(--color-accent) to-(--color-emerald)" />
    </div>
  );
}
