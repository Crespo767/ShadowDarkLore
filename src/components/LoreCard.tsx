import { memo, type ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
  number?: string;
}

export const LoreCard = memo(function LoreCard({ title, children, icon, number }: Props) {
  return (
    <article className="parchment card-ember corner-ornaments p-7 rounded-sm group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {icon && (
            <span className="text-flame transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-4deg]">
              {icon}
            </span>
          )}
          <h3 className="font-display text-xl tracking-wide text-ivory group-hover:text-flame transition-colors duration-500">
            {title}
          </h3>
        </div>
        {number && (
          <span className="font-display text-[0.65rem] tracking-[0.3em] text-flame/60">
            {number}
          </span>
        )}
      </div>
      <div className="h-px w-12 bg-gradient-to-r from-flame/70 to-transparent mb-4 group-hover:w-20 transition-all duration-500" />
      <div className="text-muted-foreground leading-relaxed text-[0.97rem] font-serif">
        {children}
      </div>
    </article>
  );
});
