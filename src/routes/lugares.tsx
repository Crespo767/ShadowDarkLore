import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/lugares")({
  head: () => ({
    meta: [
      { title: "Lugares de Perigo — ShadowDark Compendium" },
      { name: "description", content: "Tavernas, ruínas, tumbas, cavernas, florestas sombrias e outros lugares que pedem cautela." },
      { property: "og:title", content: "Lugares de Perigo" },
      { property: "og:description", content: "Lugares para entrar com cuidado — e talvez não sair." },
    ],
  }),
  component: Page,
});

const places = [
  { name: "Tavernas", text: "Onde tudo começa — uma mesa ao canto, um copo, um nome sussurrado, um trabalho que ninguém mais aceitou." },
  { name: "Ruínas", text: "Pedras que se lembram demais. Salões abertos ao céu por dentro, e fechados ao mundo por fora." },
  { name: "Tumbas", text: "Não foram feitas para serem reabertas. Quem dorme aqui foi enterrado com motivo." },
  { name: "Cavernas", text: "A boca pode ser pequena. O estômago, não. A escuridão lá dentro tem temperatura própria." },
  { name: "Florestas Sombrias", text: "Galhos que se cruzam alto demais. Caminhos que se reorganizam quando você dorme." },
  { name: "Montanhas", text: "Vento, frio, e silêncio entre dois passos. As trilhas mais antigas levam a portas." },
  { name: "Pântanos", text: "Solo que mente sob as botas. Luzes flutuando onde não há ninguém para acendê-las." },
  { name: "Costas e Mares Escuros", text: "Falésias afiadas, naufrágios encalhados, marés que sobem com mais do que água." },
  { name: "Cidades Perdidas", text: "Ruas sob a terra. Praças com fontes secas. O eco aqui demora demais para responder." },
  { name: "Túneis Profundos", text: "Quando se desce por tempo suficiente, deixa-se de medir distância e começa-se a medir esquecimento." },
];

function Page() {
  return (
    <Container>
      <PageHeader
        numeral="Capítulo VII"
        eyebrow="Atlas do que pede cautela"
        title="Lugares de Perigo"
        subtitle="Cada lugar tem o seu silêncio. Cada silêncio tem o seu preço."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {places.map((p, i) => (
          <article
            key={p.name}
            className="parchment card-ember corner-ornaments p-7 rounded-sm group"
          >
            <div className="flex items-start justify-between mb-3">
              <p className="font-display uppercase tracking-[0.35em] text-[0.62rem] text-flame">
                Lugar
              </p>
              <span className="font-display text-[0.62rem] tracking-[0.3em] text-flame/50">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="font-display text-xl text-ivory mb-3 group-hover:text-flame transition-colors duration-500">
              {p.name}
            </h3>
            <div className="h-px w-12 bg-gradient-to-r from-flame/70 to-transparent mb-4 group-hover:w-20 transition-all duration-500" />
            <p className="text-sm text-muted-foreground leading-relaxed italic">{p.text}</p>
          </article>
        ))}
      </div>
    </Container>
  );
}
