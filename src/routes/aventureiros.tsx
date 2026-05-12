import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { LoreCard } from "@/components/LoreCard";
import lore from "@/data/lore.json";

export const Route = createFileRoute("/aventureiros")({
  head: () => ({
    meta: [
      { title: "Aventureiros — ShadowDark Compendium" },
      { name: "description", content: "Os povos do mundo e as classes de aventureiros." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Container>
      <PageHeader
        eyebrow="Capítulo III"
        title="Aventureiros"
        subtitle="Aqueles que trilham os caminhos da luz e se aventuram nas sombras."
      />

      <div className="my-16">
        <h2 className="text-2xl font-display text-ivory tracking-widest uppercase mb-8 text-center text-glow">
          {lore.ancestralidades.titulo}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto font-serif text-lg italic">
          {lore.ancestralidades.texto}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lore.ancestralidades.lista.map((povo) => (
            <LoreCard key={povo.nome} title={povo.nome}>
              {povo.descricao}
            </LoreCard>
          ))}
        </div>
      </div>

      <div className="divider-ornament my-20 max-w-md mx-auto">
        <span>✦</span>
      </div>

      <div className="my-16">
        <h2 className="text-2xl font-display text-ivory tracking-widest uppercase mb-12 text-center text-glow">
          {lore.classes.titulo}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {lore.classes.lista.map((classe) => (
            <LoreCard key={classe.nome} title={classe.nome}>
              {classe.descricao}
            </LoreCard>
          ))}
        </div>
      </div>
    </Container>
  );
}
