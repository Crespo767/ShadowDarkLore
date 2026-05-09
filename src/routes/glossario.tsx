import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/glossario")({
  head: () => ({
    meta: [
      { title: "Glossário sem Spoilers — ShadowDark Compendium" },
      { name: "description", content: "Termos curtos e atmosféricos do universo de ShadowDark, sem revelar segredos." },
      { property: "og:title", content: "Glossário sem Spoilers" },
      { property: "og:description", content: "Pequenas definições para o jogador entrar à vontade na primeira sessão." },
    ],
  }),
  component: Page,
});

const terms: { term: string; def: string }[] = [
  { term: "ShadowDark", def: "Qualquer lugar onde a luz não chega, ou não fica. Tumba, ruína, caverna, floresta antiga — todos cabem na palavra." },
  { term: "Aventureiro", def: "Quem entra onde os outros não ousam. Por ouro, por fé, por necessidade, ou porque já não há outro caminho." },
  { term: "Ruína", def: "O que sobrou de algo construído por mãos que ninguém mais conhece. Sempre maior do que parece de fora." },
  { term: "Tumba", def: "Lugar fechado por motivo. Reabri-lo é uma decisão, nunca um acidente." },
  { term: "Tocha", def: "Pequena chama carregada na mão. Companhia obrigatória de quem desce. Frágil." },
  { term: "Ordem", def: "Corrente que valoriza lei, juramento e a passagem segura da chama de uma geração à outra." },
  { term: "Caos", def: "Corrente que valoriza ruptura, instinto e a queda das estruturas que não pediram para existir." },
  { term: "Neutralidade", def: "Caminho de quem busca equilíbrio, sobrevivência, ou apenas tempo para escolher." },
  { term: "Relíquia", def: "Objeto que carrega história — e, às vezes, quem o quis antes." },
  { term: "Rumor", def: "Pedaço de história contado por alguém que ouviu de alguém. Nem sempre verdade. Nunca completo." },
  { term: "Covil", def: "Lugar onde algo decidiu ficar. Geralmente fundo, geralmente quente, geralmente cheio de ossos antigos." },
  { term: "Cidade Perdida", def: "Assentamento que o mundo esqueceu — ou preferiu esquecer. Suas pedras ainda lembram." },
];

function Page() {
  return (
    <Container>
      <PageHeader
        numeral="Capítulo IX"
        eyebrow="Pequeno léxico da margem"
        title="Glossário sem Spoilers"
        subtitle="Apenas o suficiente para conversar à mesa sem se perder."
      />

      <div className="grid sm:grid-cols-2 gap-5">
        {terms.map((t) => (
          <div key={t.term} className="parchment card-ember corner-ornaments p-6 rounded-sm group">
            <h3 className="font-display text-lg text-flame mb-1 tracking-[0.1em] group-hover:text-flame-glow transition-colors">
              {t.term}
            </h3>
            <div className="h-px w-10 bg-gradient-to-r from-flame to-transparent mb-3 group-hover:w-16 transition-all duration-500" />
            <p className="text-sm text-muted-foreground leading-relaxed">{t.def}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
