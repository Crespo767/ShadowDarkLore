import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import lore from "@/data/lore.json";

export const Route = createFileRoute("/universo")({
  head: () => ({
    meta: [
      { title: "O Universo — ShadowDark Compendium" },
      { name: "description", content: "O que é o ShadowDark e o fim da Era Primordial." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Container>
      <PageHeader
        eyebrow="Capítulo I"
        title="O Universo"
        subtitle="A Escuridão Profunda e a Queda da Era Primordial."
      />

      <article className="max-w-2xl mx-auto space-y-7 text-[1.075rem] leading-[1.85] text-muted-foreground font-serif animate-fade-up">
        <h2 className="text-2xl font-display text-ivory tracking-widest uppercase mt-12 mb-6 text-center text-glow">
          {lore.oQueE.titulo}
        </h2>
        <p className="dropcap text-bone text-xl">
          {lore.oQueE.texto.substring(0, 1)}
          <span className="text-[1.075rem]">{lore.oQueE.texto.substring(1)}</span>
        </p>

        <h2 className="text-2xl font-display text-ivory tracking-widest uppercase mt-16 mb-6 text-center text-glow">
          {lore.eraPrimordial.titulo}
        </h2>
        <p>{lore.eraPrimordial.texto}</p>

        <div className="divider-ornament my-20 max-w-md mx-auto">
          <span>✦</span>
        </div>

        <h2 className="text-2xl font-display text-ivory tracking-widest uppercase mt-16 mb-6 text-center text-glow">
          {lore.introducao.titulo}
        </h2>
        <p className="italic text-flame/90 text-center leading-relaxed">{lore.introducao.texto}</p>

        <p className="text-flame text-center font-display tracking-[0.3em] uppercase text-sm pt-12">
          Você está prestes a entrar.
        </p>
      </article>
    </Container>
  );
}
