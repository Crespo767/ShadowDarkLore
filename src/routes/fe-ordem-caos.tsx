import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SplitSection } from "@/components/SplitSection";
import img from "@/assets/order-chaos.jpg";

export const Route = createFileRoute("/fe-ordem-caos")({
  head: () => ({
    meta: [
      { title: "Fé, Ordem e Caos — ShadowDark Compendium" },
      { name: "description", content: "Algumas pessoas seguem a Ordem, outras o Caos, outras só a sobrevivência." },
      { property: "og:title", content: "Fé, Ordem e Caos" },
      { property: "og:description", content: "A balança está sempre em movimento." },
      { property: "og:image", content: img },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Container>
      <PageHeader
        eyebrow="Capítulo VI"
        title="Fé, Ordem e Caos"
        subtitle="Há mais de uma forma de acreditar — e nenhuma é segura."
      />

      <SplitSection image={img} alt="Balança antiga entre o sol e o caos" title="Três correntes, muitas escolhas" reverse>
        <p>
          Algumas pessoas seguem a <span className="text-ivory">Ordem</span>: lei, juramento,
          estrutura. Acreditam que a chama deve ser passada de mão em mão sem ser esquecida.
        </p>
        <p>
          Outras seguem o <span className="text-ivory">Caos</span>: ruptura, instinto, hambre.
          Para elas, toda parede existe para ser derrubada e toda regra esconde uma mentira.
        </p>
        <p>
          E há os que ficam no meio — buscando equilíbrio, sobrevivência, ou apenas tempo
          suficiente para descobrir do que lado realmente estão.
        </p>
        <p className="italic text-flame/90 pt-2">
          Lá embaixo, ninguém te pergunta o seu alinhamento antes da primeira porta.
        </p>
      </SplitSection>
    </Container>
  );
}
