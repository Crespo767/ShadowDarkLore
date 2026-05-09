import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SplitSection } from "@/components/SplitSection";
import { LoreCard } from "@/components/LoreCard";
import img from "@/assets/world-above.jpg";

export const Route = createFileRoute("/mundo-acima")({
  head: () => ({
    meta: [
      { title: "O Mundo Acima — ShadowDark Compendium" },
      { name: "description", content: "Vilas de fronteira, tavernas, estradas e templos. A vida que existe sob o sol — e teme o que existe abaixo." },
      { property: "og:title", content: "O Mundo Acima" },
      { property: "og:description", content: "Onde se prepara a tocha antes de descer." },
      { property: "og:image", content: img },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Container>
      <PageHeader
        eyebrow="Capítulo II"
        title="O Mundo Acima"
        subtitle="Onde se afia a lâmina, paga-se o quarto e se escuta o último aviso."
      />

      <SplitSection image={img} alt="Vila de fronteira ao entardecer" title="Vilas de fronteira">
        <p>
          Casas de madeira encostadas umas nas outras, palha velha no telhado, lampião aceso muito
          cedo. As vilas do limite vivem dois dias por dia: o de antes do pôr do sol, e o de depois.
        </p>
        <p>
          As pessoas comuns aram, pescam, costuram e rezam. Trancam as portas. Não falam alto sobre
          o que acontece no bosque. E, ainda assim, alguém sempre vende o mapa.
        </p>
      </SplitSection>

      <div className="grid md:grid-cols-2 gap-6 my-12">
        <LoreCard title="Tavernas">
          Cerveja morna, ensopado teimoso, fogo no centro, conversa baixa. É aqui que rumores
          mudam de mão, contratos são selados com um aperto firme demais e mercenários medem uns
          aos outros pelo canto do olho.
        </LoreCard>
        <LoreCard title="Estradas">
          Pedra trincada, marcas de roda, postes de aviso desbotados. As estradas levam a algum
          lugar — quase sempre. Viajar de noite custa mais do que se imagina.
        </LoreCard>
        <LoreCard title="Templos">
          Sinos que ainda tocam por hábito. Velas acesas por mãos que tremem. Sacerdotes que
          escutam mais confissões do que gostariam. Onde há fé, há gente buscando coragem.
        </LoreCard>
        <LoreCard title="Mercados">
          Pano, sal, ferro, ervas amargas, mapas duvidosos, uma adaga que mudou de dono três vezes
          esta semana. Tudo está à venda. Quase tudo está marcado.
        </LoreCard>
        <LoreCard title="Nobres decadentes">
          Salões empoeirados, brasões manchados, criados poucos. Pagam bem por serviços discretos
          e nunca contam toda a verdade sobre o que perderam.
        </LoreCard>
        <LoreCard title="Caçadores de relíquias">
          Botas gastas, caderno cheio de marcas, olhar que mede portas antes de cumprimentar
          pessoas. Sabem nomes de lugares que ninguém mais lembra.
        </LoreCard>
      </div>
    </Container>
  );
}
