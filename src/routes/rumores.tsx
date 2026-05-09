import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Quote } from "lucide-react";

export const Route = createFileRoute("/rumores")({
  head: () => ({
    meta: [
      { title: "Rumores de Taverna — ShadowDark Compendium" },
      { name: "description", content: "Rumores curtos e evocativos ouvidos em tavernas: ganchos de ambientação sem respostas." },
      { property: "og:title", content: "Rumores de Taverna" },
      { property: "og:description", content: "Coisas que se ouvem no canto da taverna, sem garantia nenhuma." },
    ],
  }),
  component: Page,
});

const rumors = [
  "Dizem que há uma escada sob o velho poço, mas ninguém concorda sobre quantos degraus ela tem.",
  "Um sino toca sob a colina quando não há vento.",
  "O mapa comprado por três moedas mostra uma cidade que não existe em nenhum reino.",
  "Há uma porta na floresta que só aparece para quem está com fome.",
  "O ferreiro da vila nunca dorme. Ninguém sabe quando começou a forjar.",
  "Crianças desenharam o mesmo símbolo em três vilas diferentes esta semana — nenhuma se conhece.",
  "Uma carroça apareceu na estrada principal sem cocheiro, sem cavalo, e com lugar marcado.",
  "Dizem que, na cripta do morro, alguém deixou um lampião aceso há trinta anos.",
  "Os peixes do lago do norte vêm com letras em escamas. Sempre as mesmas.",
  "Há um homem que paga em moedas pretas. Elas pesam mais do que prata.",
  "Na noite de lua minguante, a torre desabada lança sombra de torre inteira.",
  "Um cego do mercado descreve sonhos de quem ainda não chegou na cidade.",
];

function Page() {
  return (
    <Container>
      <PageHeader
        numeral="Capítulo VIII"
        eyebrow="Coisas ouvidas no canto"
        title="Rumores de Taverna"
        subtitle="Cada uma com a verdade de quem conta — que é quase nenhuma."
      />

      <div className="max-w-2xl mx-auto space-y-5">
        {rumors.map((r, i) => (
          <blockquote
            key={i}
            className="parchment card-ember p-6 pl-14 rounded-sm relative italic text-bone/90 leading-relaxed text-[1.02rem]"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <Quote className="absolute left-5 top-6 h-5 w-5 text-flame/60" />
            <span className="text-flame/60 font-display text-xs tracking-[0.3em] block mb-1">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>“{r}”</span>
          </blockquote>
        ))}
      </div>

      <p className="text-center mt-16 text-muted-foreground/70 italic text-sm max-w-md mx-auto">
        Nenhum desses rumores tem resposta neste compendium. Algumas têm resposta na sua mesa.
      </p>
    </Container>
  );
}
