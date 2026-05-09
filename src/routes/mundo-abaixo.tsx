import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SplitSection } from "@/components/SplitSection";
import { LoreCard } from "@/components/LoreCard";
import img from "@/assets/world-below.jpg";

export const Route = createFileRoute("/mundo-abaixo")({
  head: () => ({
    meta: [
      { title: "O Mundo Abaixo — ShadowDark Compendium" },
      { name: "description", content: "Ruínas soterradas, escadarias antigas, criptas e cidades perdidas sob a terra." },
      { property: "og:title", content: "O Mundo Abaixo" },
      { property: "og:description", content: "Algo segurou estas pedras antes de você." },
      { property: "og:image", content: img },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Container>
      <PageHeader
        eyebrow="Capítulo III"
        title="O Mundo Abaixo"
        subtitle="A pedra se lembra. A escuridão também."
      />

      <SplitSection image={img} alt="Escadaria antiga descendo para a escuridão" title="O que dorme sob o solo" reverse>
        <p>
          Em algum momento, alguém empilhou estas pedras. Esculpiu este arco. Colocou este símbolo
          na soleira. Em algum momento — muito antes de qualquer pessoa viva — havia luz aqui.
        </p>
        <p>
          Hoje, a escadaria desce mais do que deveria. O ar muda no terceiro lance. O quarto não é
          contado por ninguém duas vezes da mesma forma.
        </p>
      </SplitSection>

      <div className="grid md:grid-cols-2 gap-6 my-12">
        <LoreCard title="Ruínas soterradas">
          Torres caídas de lado, salões enterrados pela poeira de séculos, portas grandes demais
          para mãos humanas. Algo viveu aqui. Algo construiu.
        </LoreCard>
        <LoreCard title="Templos esquecidos">
          Altares de nomes que ninguém mais sabe pronunciar. Velas que duraram tempo demais.
          Pegadas no pó que não combinam com pés.
        </LoreCard>
        <LoreCard title="Criptas">
          Lápides sem inscrição. Tampas de pedra trincadas por dentro. O silêncio aqui é de outro
          tipo — aquele que parece estar prestando atenção.
        </LoreCard>
        <LoreCard title="Túneis profundos">
          Curvas que não obedecem mapa, correntes de ar vindas de baixo, marcas de garra no teto.
          Algumas passagens só existem em uma direção.
        </LoreCard>
        <LoreCard title="Fortalezas abandonadas">
          Portões abertos pela última vez de dentro para fora. Mesas postas. Espadas no chão. Quem
          fugiu não voltou para arrumar.
        </LoreCard>
        <LoreCard title="Cidades perdidas">
          Telhados sob a terra. Praças tomadas por raízes. Estátuas com o rosto virado para uma
          parede que não está mais lá.
        </LoreCard>
      </div>
    </Container>
  );
}
