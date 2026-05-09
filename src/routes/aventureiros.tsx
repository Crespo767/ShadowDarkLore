import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SplitSection } from "@/components/SplitSection";
import { LoreCard } from "@/components/LoreCard";
import img from "@/assets/adventurers.jpg";

export const Route = createFileRoute("/aventureiros")({
  head: () => ({
    meta: [
      { title: "Aventureiros — ShadowDark Compendium" },
      { name: "description", content: "Quem são os aventureiros: pessoas que entram onde outros não ousam." },
      { property: "og:title", content: "Aventureiros" },
      { property: "og:description", content: "Quem entra onde os outros não ousam." },
      { property: "og:image", content: img },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Container>
      <PageHeader
        eyebrow="Capítulo V"
        title="Aventureiros"
        subtitle="Pessoas como qualquer outra — que escolheram a porta errada, ou a única que ainda restava."
      />

      <SplitSection image={img} alt="Grupo de aventureiros silhuetas em volta de uma fogueira" title="Por que descer?">
        <p>
          Alguns vão pelo ouro. Outros, pelo nome. Há quem desça atrás de algo que perdeu, ou de
          alguém. Há quem desça porque acima não havia mais lugar para ficar.
        </p>
        <p>
          Não importa o motivo: lá embaixo, todos viram a mesma coisa. Gente carregando luz,
          esperando que ela dure.
        </p>
      </SplitSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        <LoreCard title="Guerreiros">
          Quem aprendeu a confiar no aço antes de confiar nos outros. Cicatrizes que contam
          histórias mais honestas do que palavras.
        </LoreCard>
        <LoreCard title="Ladrões">
          Mãos rápidas, ouvidos atentos, paciência de quem já esperou trancado num armário.
          Sabem que toda fechadura tem um humor.
        </LoreCard>
        <LoreCard title="Magos">
          Estudaram o que não devia ser estudado e mesmo assim voltaram para a mesa. Carregam
          livros como quem carrega faca.
        </LoreCard>
        <LoreCard title="Sacerdotes">
          Acreditam o suficiente para entrar em lugares onde a fé deveria ter ficado do lado de
          fora. Levam consigo um sinal e uma promessa.
        </LoreCard>
        <LoreCard title="Exploradores">
          Lêem o vento, contam passos, marcam paredes com giz. Não se perdem — só descobrem novas
          formas de saber onde estão.
        </LoreCard>
        <LoreCard title="Mercenários">
          Cobram pelo serviço, pagam o próprio funeral adiantado, dormem com uma bota calçada.
        </LoreCard>
        <LoreCard title="Desesperados">
          Não têm para onde voltar. Isso os torna mais perigosos do que parecem.
        </LoreCard>
        <LoreCard title="Estudiosos">
          Buscam um nome, uma data, uma página. Para eles, a verdade vale mais do que a saída.
        </LoreCard>
        <LoreCard title="Saqueadores de tumbas">
          Sabem que toda relíquia teve dono. Sabem também que alguns donos nunca soltam.
        </LoreCard>
      </div>
    </Container>
  );
}
