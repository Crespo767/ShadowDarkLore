import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { ExternalLink, Flame, BookOpen, Feather } from "lucide-react";

export const Route = createFileRoute("/oficial")({
  head: () => ({
    meta: [
      { title: "Material Oficial — ShadowDark Compendium" },
      { name: "description", content: "Conheça os criadores de Shadowdark RPG (The Arcane Library) e a edição em português pela Laserhead Press." },
      { property: "og:title", content: "Material Oficial" },
      { property: "og:description", content: "Este compendium é uma introdução de fã. Apoie o jogo oficial." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Container>
      <PageHeader
        eyebrow="Capítulo X"
        title="Material Oficial"
        subtitle="Este compendium é uma porta. O jogo de verdade está do outro lado."
      />

      <div className="parchment max-w-3xl mx-auto p-8 rounded-md text-center">
        <Flame className="mx-auto h-8 w-8 text-flame animate-flicker mb-4" />
        <h2 className="font-display text-2xl text-ivory mb-4">Aviso</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Este é um <strong className="text-ivory">material de fã, não oficial</strong>, criado apenas
          como introdução visual e sem spoilers para jogadores iniciantes.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <span className="text-ivory">Shadowdark RPG</span> foi criado por{" "}
          <span className="text-ivory">Kelsey Dionne</span> e publicado por{" "}
          <span className="text-ivory">The Arcane Library, LLC</span>. Lançado em 2023 após uma
          campanha histórica no Kickstarter, o jogo venceu cinco prêmios ENNIE em 2023 — incluindo
          Melhor Jogo, Melhor Regras e Produto do Ano.
        </p>

        <div className="divider-ornament my-8 max-w-md mx-auto"><span>✦</span></div>

        <div className="grid md:grid-cols-2 gap-4 text-left">
          <div className="border border-border/60 bg-background/40 p-5 rounded-sm">
            <Feather className="h-5 w-5 text-flame mb-3" />
            <p className="font-display uppercase tracking-widest text-xs text-flame mb-2">
              Edição original
            </p>
            <h3 className="font-display text-lg text-ivory mb-2">The Arcane Library</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Criado por Kelsey Dionne. Todos os direitos do sistema, regras, ilustrações e
              materiais oficiais reservados a The Arcane Library, LLC.
            </p>
            <a
              href="https://www.thearcanelibrary.com/pages/shadowdark"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-display uppercase tracking-widest text-xs text-flame hover:text-flame-glow border border-flame/40 hover:border-flame px-4 py-2 transition-colors"
            >
              thearcanelibrary.com <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <div className="border border-border/60 bg-background/40 p-5 rounded-sm">
            <BookOpen className="h-5 w-5 text-flame mb-3" />
            <p className="font-display uppercase tracking-widest text-xs text-flame mb-2">
              Edição em português
            </p>
            <h3 className="font-display text-lg text-ivory mb-2">Laserhead Press</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              A versão oficial em português brasileiro de Shadowdark RPG é publicada no Brasil pela
              Laserhead Press, com livro básico e suplementos disponíveis em PDF e impresso.
            </p>
            <a
              href="https://laserhead.com.br/produto-tag/shadowdark/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-display uppercase tracking-widest text-xs text-flame hover:text-flame-glow border border-flame/40 hover:border-flame px-4 py-2 transition-colors"
            >
              laserhead.com.br <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        <div className="divider-ornament my-8 max-w-md mx-auto"><span>✦</span></div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          <strong className="text-ivory">Todos os direitos reservados</strong> a Kelsey Dionne /
          The Arcane Library, LLC e, na edição brasileira, à Laserhead Press. Nenhuma arte, texto
          ou logotipo oficial é reproduzido neste compendium.
        </p>

        <a
          href="https://laserhead.com.br/produto/shadowdark-rpg-livro-basico-pdf/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-display uppercase tracking-widest text-sm bg-flame text-primary-foreground px-7 py-3 hover:bg-flame-glow transition-colors animate-ember"
        >
          Comprar o livro básico (PT-BR) <ExternalLink className="h-4 w-4" />
        </a>

        <p className="mt-6 text-xs text-muted-foreground/70">
          Ao comprar o material oficial você apoia diretamente os autores, a editora brasileira e
          mantém o jogo vivo.
        </p>
      </div>
    </Container>
  );
}
