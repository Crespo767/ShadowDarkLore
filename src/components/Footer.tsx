import { Link } from "@tanstack/react-router";
import { Flame } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-background/60">
      <div className="mx-auto max-w-5xl px-6 py-12 text-center">
        <Flame className="mx-auto h-6 w-6 text-flame animate-flicker mb-4" />
        <p className="font-display uppercase tracking-[0.3em] text-xs text-flame mb-4">
          Aviso de Material de Fã
        </p>
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Material de fã, <strong className="text-ivory">não oficial</strong>, criado apenas como
          introdução visual e sem spoilers para jogadores iniciantes.{" "}
          <span className="text-ivory">Shadowdark RPG</span> foi criado por Kelsey Dionne e
          publicado por{" "}
          <a href="https://www.thearcanelibrary.com/pages/shadowdark" target="_blank" rel="noopener noreferrer" className="text-flame hover:text-flame-glow underline-offset-4 hover:underline">
            The Arcane Library
          </a>
          . A edição em português brasileiro é publicada pela{" "}
          <a href="https://laserhead.com.br/produto-tag/shadowdark/" target="_blank" rel="noopener noreferrer" className="text-flame hover:text-flame-glow underline-offset-4 hover:underline">
            Laserhead Press
          </a>
          . Todos os direitos reservados aos seus respectivos detentores.
        </p>
        <div className="divider-ornament my-8 max-w-md mx-auto">
          <span>✦</span>
        </div>
        <Link
          to="/oficial"
          className="inline-block font-display uppercase tracking-widest text-xs text-flame hover:text-flame-glow border border-flame/40 hover:border-flame px-5 py-2 transition-colors"
        >
          Apoiar o material oficial
        </Link>
        <p className="mt-8 text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} ShadowDark Compendium · Projeto de fã sem fins lucrativos
        </p>
      </div>
    </footer>
  );
}
