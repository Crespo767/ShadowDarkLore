import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { LoreCard } from "@/components/LoreCard";
import lore from "@/data/lore.json";
import { Map, ScrollText, Skull } from "lucide-react";

export const Route = createFileRoute("/lendas")({
  head: () => ({
    meta: [
      { title: "Lendas & Lugares — ShadowDark Compendium" },
      { name: "description", content: "O que dizem as bocas nas tavernas." },
    ],
  }),
  component: Page,
});

const legendIcons = [
  <Map className="h-5 w-5" />,
  <ScrollText className="h-5 w-5" />,
  <Skull className="h-5 w-5" />,
];

function Page() {
  return (
    <Container>
      <PageHeader
        eyebrow="Capítulo IV"
        title={lore.lendas.titulo}
        subtitle="Rumores, lendas e locais que talvez nem existam."
      />

      <article className="max-w-2xl mx-auto space-y-7 text-[1.075rem] leading-[1.85] text-muted-foreground font-serif animate-fade-up text-center my-20 italic delay-100">
        <p>"{lore.lendas.texto}"</p>
      </article>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up delay-300 my-16">
        {lore.lendas.lista.map((lenda, idx) => (
          <LoreCard
            key={lenda.nome}
            title={lenda.nome}
            icon={legendIcons[idx % legendIcons.length]}
          >
            <p className="leading-relaxed text-sm md:text-base">{lenda.descricao}</p>
          </LoreCard>
        ))}
      </div>
      
      <div className="divider-ornament my-24 max-w-md mx-auto opacity-70 animate-fade-up delay-500">
        <span>✦</span>
      </div>
      
      <p className="text-flame text-center font-display tracking-[0.3em] uppercase text-sm pt-8 pb-12 animate-fade-up delay-700">
        O Compêndio se encerra aqui. Aventure-se se tiver coragem.
      </p>
    </Container>
  );
}
