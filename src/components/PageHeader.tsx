import { memo } from "react";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  numeral?: string;
}

export const PageHeader = memo(function PageHeader({ eyebrow, title, subtitle, numeral }: Props) {
  return (
    <header className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
      {numeral && (
        <p className="font-display text-[0.7rem] tracking-[0.5em] text-flame/70 mb-2">
          ◆ {numeral} ◆
        </p>
      )}
      {eyebrow && (
        <p className="font-display uppercase tracking-[0.45em] text-xs text-flame mb-5">
          {eyebrow}
        </p>
      )}
      <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-ivory text-glow leading-[1.05]">
        {title}
      </h1>
      <div className="divider-ornament my-8 max-w-sm mx-auto">
        <span>✦</span>
      </div>
      {subtitle && (
        <p className="text-lg md:text-xl text-bone/80 italic leading-relaxed font-serif">
          {subtitle}
        </p>
      )}
    </header>
  );
});
