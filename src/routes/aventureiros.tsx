import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { LoreCard } from "@/components/LoreCard";
import lore from "@/data/lore.json";
import { Swords, VenetianMask, Wand2, Sun } from "lucide-react";

export const Route = createFileRoute("/aventureiros")({
  head: () => ({
    meta: [
      { title: "Aventureiros — ShadowDark Compendium" },
      { name: "description", content: "Os povos do mundo e as classes de aventureiros." },
    ],
  }),
  component: Page,
});

const classIcons: Record<string, React.ReactNode> = {
  Guerreiro: <Swords className="h-5 w-5" />,
  Ladrão: <VenetianMask className="h-5 w-5" />,
  Mago: <Wand2 className="h-5 w-5" />,
  Sacerdote: <Sun className="h-5 w-5" />,
};

function Page() {
  return (
    <Container>
      <PageHeader
        eyebrow="Capítulo III"
        title="Aventureiros"
        subtitle={lore.ancestralidades.texto}
      />

      <div className="my-16 animate-fade-up delay-100">
        <h2 className="text-2xl font-display text-ivory tracking-widest uppercase mb-12 text-center text-glow-soft">
          {lore.ancestralidades.titulo}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lore.ancestralidades.lista.map((povo) => (
            <LoreCard key={povo.nome} title={povo.nome}>
              {povo.descricao}
            </LoreCard>
          ))}
        </div>
      </div>

      <div className="divider-ornament my-24 max-w-md mx-auto opacity-70 animate-fade-up delay-300">
        <span>✦</span>
      </div>

      <div className="my-16 animate-fade-up delay-500">
        <h2 className="text-2xl font-display text-ivory tracking-widest uppercase mb-12 text-center text-glow-soft">
          {lore.classes.titulo}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {lore.classes.lista.map((classe) => (
            <LoreCard
              key={classe.nome}
              title={classe.nome}
              icon={classIcons[classe.nome]}
            >
              {classe.descricao}
            </LoreCard>
          ))}
        </div>
      </div>
    </Container>
  );
}
