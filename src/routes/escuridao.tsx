import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Embers } from "@/components/Embers";
import img from "@/assets/darkness.jpg";

export const Route = createFileRoute("/escuridao")({
  head: () => ({
    meta: [
      { title: "A Escuridão — ShadowDark Compendium" },
      { name: "description", content: "A escuridão como força temática: medo, isolamento, presença e o desconhecido." },
      { property: "og:title", content: "A Escuridão" },
      { property: "og:description", content: "Não é ausência. É presença." },
      { property: "og:image", content: img },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Container>
      <PageHeader
        numeral="Capítulo IV"
        eyebrow="Sobre o que se move quando você não olha"
        title="A Escuridão"
        subtitle="Não é ausência. É presença."
      />

      <figure className="relative max-w-3xl mx-auto rounded-sm overflow-hidden border border-border vignette mb-16 animate-breathe">
        <img src={img} alt="Uma única vela ardendo no vazio" loading="lazy" className="w-full h-[460px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <Embers count={6} />
        <span className="absolute -top-2 -left-2 w-6 h-6 border-t border-l border-flame/60" />
        <span className="absolute -top-2 -right-2 w-6 h-6 border-t border-r border-flame/60" />
        <span className="absolute -bottom-2 -left-2 w-6 h-6 border-b border-l border-flame/60" />
        <span className="absolute -bottom-2 -right-2 w-6 h-6 border-b border-r border-flame/60" />
      </figure>

      <article className="max-w-2xl mx-auto space-y-7 text-[1.075rem] leading-[1.85] text-muted-foreground font-serif animate-fade-up">
        <p className="dropcap text-bone text-xl">
          A escuridão neste mundo não é o que está entre os candelabros. É o que está entre as
          pessoas. No fundo dos poços. Atrás das portas que ninguém abriu há muito tempo.
        </p>

        <p>
          Ela tem peso. Tem paciência. Não corre atrás de ninguém — espera. Espera a tocha cair.
          Espera a chama vacilar. Espera você esquecer onde estava o último ponto de luz.
        </p>

        <p>
          Aventureiros aprendem cedo: quem entra no escuro carregando luz precisa também aprender
          a carregar silêncio, atenção e companhia. Sozinho, ninguém volta.
        </p>

        <p className="pullquote">
          A chama não ilumina o caminho. Ela apenas atrasa o momento em que ele desaparece.
        </p>

        <p>
          Há quem diga que a escuridão escuta. Que aprende as vozes. Que prefere algumas a outras.
          Não há prova. Só relatos. Só o costume, em todas as vilas da margem, de não pronunciar
          o próprio nome alto demais quando se está sob a terra.
        </p>
      </article>
    </Container>
  );
}
