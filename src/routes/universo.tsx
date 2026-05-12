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

      <article className="max-w-3xl mx-auto space-y-16 text-[1.075rem] leading-[1.85] text-muted-foreground font-serif animate-fade-up">
        {/* A Escuridão Profunda */}
        <section>
          <h2 className="text-2xl font-display text-ivory tracking-widest uppercase mb-8 text-center text-glow">
            {lore.introducao.titulo}
          </h2>
          <p className="dropcap text-bone text-xl text-justify">
            {lore.introducao.texto.substring(0, 1)}
            <span className="text-[1.075rem]">{lore.introducao.texto.substring(1)}</span>
          </p>
        </section>

        <div className="divider-ornament my-12 max-w-sm mx-auto opacity-70">
          <span>✦</span>
        </div>

        {/* O que é Shadowdark? */}
        <section>
          <h2 className="text-2xl font-display text-ivory tracking-widest uppercase mb-8 text-center text-glow">
            {lore.oQueE.titulo}
          </h2>
          <p className="text-justify">{lore.oQueE.texto}</p>
        </section>

        <div className="divider-ornament my-12 max-w-sm mx-auto opacity-70">
          <span>✦</span>
        </div>

        {/* A Queda da Era Primordial */}
        <section>
          <h2 className="text-2xl font-display text-ivory tracking-widest uppercase mb-8 text-center text-glow">
            {lore.eraPrimordial.titulo}
          </h2>
          <p className="text-center italic text-bone/90 text-lg leading-relaxed max-w-xl mx-auto">
            "{lore.eraPrimordial.texto}"
          </p>
        </section>

        <p className="text-flame text-center font-display tracking-[0.3em] uppercase text-sm pt-12 pb-8">
          Você está prestes a entrar.
        </p>
      </article>
    </Container>
  );
}
