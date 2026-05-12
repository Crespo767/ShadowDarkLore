import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { LoreCard } from "@/components/LoreCard";
import lore from "@/data/lore.json";

export const Route = createFileRoute("/panteao")({
  head: () => ({
    meta: [
      { title: "O Panteão — ShadowDark Compendium" },
      { name: "description", content: "As divindades da Ordem, do Caos e da Neutralidade." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Container>
      <PageHeader eyebrow="Capítulo II" title="O Panteão" subtitle={lore.divindades.texto} />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
        {lore.divindades.lista.map((deus) => (
          <LoreCard key={deus.nome} title={deus.nome}>
            <p className="text-xs font-display text-flame tracking-widest uppercase mb-3">
              Alinhamento: {deus.alinhamento}
            </p>
            {deus.descricao}
          </LoreCard>
        ))}
      </div>
    </Container>
  );
}
