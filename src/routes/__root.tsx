import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-display uppercase tracking-[0.4em] text-xs text-flame mb-4">Perdido na escuridão</p>
        <h1 className="font-display text-7xl text-ivory text-glow">404</h1>
        <p className="mt-4 text-muted-foreground italic">
          A tocha se apagou. Esta página não existe nestes planos.
        </p>
        <Link to="/" className="mt-6 inline-block font-display uppercase tracking-widest text-xs text-flame border border-flame/50 hover:border-flame px-5 py-2">
          Voltar à luz
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 text-center">
      <div className="max-w-md">
        <h1 className="font-display text-2xl text-ivory">A página não pôde ser invocada</h1>
        <p className="mt-2 text-sm text-muted-foreground italic">Algo nas sombras interrompeu o ritual.</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 font-display uppercase tracking-widest text-xs text-flame border border-flame/50 hover:border-flame px-5 py-2"
        >
          Reacender a tocha
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ShadowDark Compendium · Uma introdução visual e sem spoilers" },
      { name: "description", content: "Compendium atmosférico e sem spoilers para jogadores iniciantes de ShadowDark RPG. Lore, lugares, aventureiros e o imaginário da escuridão." },
      { name: "author", content: "ShadowDark Compendium · Material de fã" },
      { property: "og:title", content: "ShadowDark Compendium" },
      { property: "og:description", content: "A tocha está acesa. O mundo abaixo está esperando." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </QueryClientProvider>
  );
}
