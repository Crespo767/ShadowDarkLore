import type { ReactNode } from "react";

interface Props {
  image: string;
  alt: string;
  title: string;
  reverse?: boolean;
  children: ReactNode;
  caption?: string;
}

export function SplitSection({ image, alt, title, reverse, children, caption }: Props) {
  return (
    <section className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center my-20 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
      <figure className="relative group">
        <div className="relative overflow-hidden rounded-sm border border-border vignette animate-breathe">
          <img
            src={image}
            alt={alt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/30 pointer-events-none" />
        </div>
        {/* corner ornament frames */}
        <span className="absolute -top-2 -left-2 w-6 h-6 border-t border-l border-flame/60" />
        <span className="absolute -top-2 -right-2 w-6 h-6 border-t border-r border-flame/60" />
        <span className="absolute -bottom-2 -left-2 w-6 h-6 border-b border-l border-flame/60" />
        <span className="absolute -bottom-2 -right-2 w-6 h-6 border-b border-r border-flame/60" />
        {caption && (
          <figcaption className="text-center mt-4 text-xs uppercase tracking-[0.4em] text-flame/70 font-display">
            {caption}
          </figcaption>
        )}
      </figure>
      <div>
        <h2 className="font-display text-3xl md:text-4xl text-ivory text-glow-soft mb-4 leading-tight">
          {title}
        </h2>
        <div className="h-px w-20 bg-gradient-to-r from-flame to-transparent mb-6" />
        <div className="text-muted-foreground leading-relaxed space-y-5 text-[1.05rem] font-serif">
          {children}
        </div>
      </div>
    </section>
  );
}
