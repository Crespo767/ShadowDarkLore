import { createFileRoute, Link } from "@tanstack/react-router";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "O que é o ShadowDark — ShadowDark Compendium" },
      { name: "description", content: "Uma introdução atmosférica ao conceito de ShadowDark: lugares onde a luz falha, ruínas e histórias esquecidas." },
      { property: "og:title", content: "O que é o ShadowDark" },
      { property: "og:description", content: "Onde a luz falha, o ShadowDark começa." },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <Container>
      <PageHeader
        numeral="Capítulo I"
        eyebrow="Da definição da palavra"
        title="O que é o ShadowDark"
        subtitle="Onde a luz falha, outra coisa acorda."
      />

      <article className="max-w-2xl mx-auto space-y-7 text-[1.075rem] leading-[1.85] text-muted-foreground font-serif animate-fade-up">
        <p className="dropcap text-bone text-xl">
          ShadowDark é o nome dado aos lugares onde a luz não chega — ou onde, se chega, não fica
          por muito tempo. Tumbas seladas há séculos. Ruínas tomadas pelo musgo. Cavernas que
          afundam mais do que qualquer mapa registra. Cidades engolidas pelo tempo. Florestas
          tão antigas que parecem se lembrar de você antes de você entrar.
        </p>

        <p>
          Há tesouros nesses lugares. Há perigo. E há histórias — quase sempre incompletas,
          quase sempre contadas por quem ouviu de outra pessoa, que ouviu de outra pessoa, que
          jurou ter voltado.
        </p>

        <p className="pullquote">
          Não é um único lugar. É todo lugar onde a tocha precisa ser reacesa.
        </p>

        <p>
          O ShadowDark é a fronteira entre o que se conhece e o que se prefere esquecer. Para
          alguns, é onde a vida finalmente faz sentido. Para outros, é onde ela termina. E para
          a maioria — para a quase totalidade dos que nasceram nas vilas da margem — é apenas
          onde nunca, nunca se vai.
        </p>

        <p>
          Mas você vai.
        </p>

        <p className="text-flame text-center font-display tracking-[0.3em] uppercase text-sm pt-4">
          Você está prestes a entrar.
        </p>
      </article>

      <div className="divider-ornament my-20 max-w-md mx-auto"><span>✦</span></div>

      <div className="text-center">
        <Link
          to="/mundo-acima"
          className="font-display uppercase tracking-[0.3em] text-xs border border-flame/60 text-flame px-7 py-3 hover:bg-flame/10 hover:border-flame transition-all"
        >
          Continuar — O Mundo Acima →
        </Link>
      </div>
    </Container>
  );
}
