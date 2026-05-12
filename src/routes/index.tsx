import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-torch.jpg";
import { Container } from "@/components/Container";
import { LoreCard } from "@/components/LoreCard";
import { Embers } from "@/components/Embers";
import { Flame, Skull, BookOpen, ScrollText } from "lucide-react";
import lore from "@/data/lore.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ShadowDark Compendium — A tocha está acesa" },
      {
        name: "description",
        content:
          "Uma introdução visual e sem spoilers ao clima, aos lugares e às lendas de ShadowDark RPG.",
      },
      { property: "og:title", content: "ShadowDark Compendium" },
      { property: "og:description", content: "A tocha está acesa. O mundo abaixo está esperando." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-hidden flex items-center justify-center vignette">
        <img
          src={heroImg}
          alt="Aventureiro segurando uma tocha diante de um portal de masmorra antiga"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-55 animate-breathe"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.05_0.005_50/0.85)_100%)]" />
        <Embers count={5} />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="font-display uppercase tracking-[0.55em] text-[0.7rem] text-flame mb-6 animate-fade-up">
            <Flame className="inline h-3 w-3 mr-2 animate-flicker" />
            ShadowDark Compendium
            <Flame className="inline h-3 w-3 ml-2 animate-flicker" />
          </p>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-ivory text-glow leading-[1.02] animate-fade-up delay-100">
            A tocha está acesa.
          </h1>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-flame text-glow leading-[1.02] mt-2 animate-fade-up delay-300">
            O mundo abaixo
            <br className="sm:hidden" /> está esperando.
          </h1>
          <div className="divider-ornament my-10 max-w-md mx-auto animate-fade-up delay-500">
            <span>✦</span>
          </div>
          <p className="text-base md:text-lg text-bone/80 italic max-w-2xl mx-auto leading-relaxed animate-fade-up delay-500">
            {lore.introducao.texto.split(". ")[0]}. Uma introdução imersiva ao mundo, povos e
            entidades de Shadowdark RPG.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4 animate-fade-up delay-700">
            <Link
              to="/universo"
              className="font-display uppercase tracking-[0.25em] text-xs sm:text-sm bg-flame text-primary-foreground px-8 py-4 hover:bg-flame-glow transition-all duration-500 animate-ember hover:scale-[1.03]"
            >
              Começar a leitura
            </Link>
            <a
              href="#o-que-e"
              className="font-display uppercase tracking-[0.25em] text-xs sm:text-sm border border-flame/60 text-flame px-8 py-4 hover:bg-flame/10 hover:border-flame transition-all duration-500"
            >
              O que é o ShadowDark?
            </a>
          </div>
        </div>

        {/* Bottom fade & scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-flame/60 text-[0.65rem] tracking-[0.4em] uppercase font-display animate-fade-up delay-700">
          ↓ Desça
        </div>
      </section>

      {/* INTRO PULL-QUOTE */}
      <section className="relative py-24">
        <Container className="py-0">
          <p className="pullquote max-w-3xl mx-auto animate-reveal text-2xl">
            “Nestes corredores obscuros, a ruína e a glória
            <br />
            florescem eternamente.”
          </p>
        </Container>
      </section>

      {/* O QUE É SHADOWDARK? */}
      <section id="o-que-e" className="relative pb-24 scroll-mt-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl text-ivory text-glow-soft mb-8">
              {lore.oQueE.titulo}
            </h2>
            <p className="text-muted-foreground italic text-lg leading-relaxed font-serif">
              {lore.oQueE.texto}
            </p>
          </div>
        </Container>
      </section>

      {/* CHAPTERS */}
      <section className="relative">
        <Container>
          <div className="text-center mb-14">
            <p className="font-display uppercase tracking-[0.45em] text-xs text-flame mb-3">
              ◆ Capítulos ◆
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-ivory text-glow-soft">
              Por onde começar
            </h2>
            <div className="divider-ornament my-6 max-w-sm mx-auto">
              <span>✦</span>
            </div>
            <p className="text-muted-foreground italic max-w-xl mx-auto">
              Quatro portas. Nenhuma trancada. Escolha a que te chama primeiro.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {chapters.map((c) => (
              <Link key={c.to} to={c.to} className="block">
                <LoreCard title={c.title} icon={c.icon} number={c.num}>
                  {c.text} <span className="text-flame story-link">Entrar →</span>
                </LoreCard>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA STRIP */}
      <section className="relative py-20">
        <Container className="py-0">
          <div className="parchment corner-ornaments rounded-sm p-10 md:p-14 text-center relative overflow-hidden">
            <Embers count={5} />
            <Flame className="mx-auto h-8 w-8 text-flame animate-flicker mb-4" />
            <h3 className="font-display text-2xl md:text-3xl text-ivory mb-3">
              Pronto para descer?
            </h3>
            <p className="text-muted-foreground italic max-w-xl mx-auto mb-6">
              A magia enfraqueceu. O seu verdadeiro inimigo estava esse tempo todo ao redor, nunca
              descansando. Leia devagar. Não acenda mais que uma tocha por vez.
            </p>
            <Link
              to="/universo"
              className="inline-block font-display uppercase tracking-[0.25em] text-xs sm:text-sm bg-flame text-primary-foreground px-7 py-3 hover:bg-flame-glow transition-all"
            >
              Começar pelo Capítulo I
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

const chapters = [
  {
    to: "/universo" as const,
    num: "I",
    title: "O Universo",
    icon: <BookOpen className="h-5 w-5" />,
    text: "A Escuridão Profunda e a Queda da Era Primordial.",
  },
  {
    to: "/panteao" as const,
    num: "II",
    title: "O Panteão",
    icon: <Flame className="h-5 w-5" />,
    text: "As divindades da Ordem, do Caos e da Neutralidade.",
  },
  {
    to: "/aventureiros" as const,
    num: "III",
    title: "Aventureiros",
    icon: <Skull className="h-5 w-5" />,
    text: "Os povos do mundo e as classes de aventureiros.",
  },
  {
    to: "/lendas" as const,
    num: "IV",
    title: "Lendas & Lugares",
    icon: <ScrollText className="h-5 w-5" />,
    text: "Rumores, lendas e locais que talvez nem existam.",
  },
];
