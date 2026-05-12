import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { LoreCard } from "@/components/LoreCard";
import lore from "@/data/lore.json";
import { Scale, Flame, CircleDashed, EyeOff } from "lucide-react";

export const Route = createFileRoute("/panteao")({
  head: () => ({
    meta: [
      { title: "O Panteão — ShadowDark Compendium" },
      { name: "description", content: "As divindades da Ordem, do Caos e da Neutralidade." },
    ],
  }),
  component: Page,
});

function getAlignmentConfig(alignment: string) {
  const norm = alignment.toLowerCase();
  if (norm.includes("ordeir")) {
    return { icon: <Scale className="h-3 w-3 inline mr-1" />, color: "text-amber-200/80" };
  }
  if (norm.includes("caótic")) {
    return { icon: <Flame className="h-3 w-3 inline mr-1" />, color: "text-flame" };
  }
  if (norm.includes("neutr")) {
    return { icon: <CircleDashed className="h-3 w-3 inline mr-1" />, color: "text-ash" };
  }
  return { icon: <EyeOff className="h-3 w-3 inline mr-1" />, color: "text-muted-foreground" };
}

function Page() {
  const introSentences = lore.divindades.texto.split(". ");

  return (
    <Container>
      <PageHeader 
        eyebrow="Capítulo II" 
        title="O Panteão" 
        subtitle={`${introSentences[0]}.`} 
      />

      <article className="max-w-2xl mx-auto text-[1.075rem] leading-[1.85] text-muted-foreground font-serif animate-fade-up delay-100 text-center mb-16">
        <p>
          {introSentences.slice(1).join(". ")}
        </p>
      </article>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up delay-300">
        {lore.divindades.lista.map((deus) => {
          const config = getAlignmentConfig(deus.alinhamento);
          return (
            <LoreCard key={deus.nome} title={deus.nome}>
              <p className={`text-[0.65rem] font-display tracking-widest uppercase mb-4 ${config.color}`}>
                {config.icon} Alinhamento: {deus.alinhamento}
              </p>
              <p className="leading-relaxed">{deus.descricao}</p>
            </LoreCard>
          );
        })}
      </div>
    </Container>
  );
}
