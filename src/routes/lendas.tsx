import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/lendas")({
  head: () => ({
    meta: [
      { title: "Lendas & Lugares — ShadowDark Compendium" },
      { name: "description", content: "O que dizem as bocas nas tavernas." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Container>
      <PageHeader
        eyebrow="Capítulo IV"
        title="Lendas & Lugares"
        subtitle="Rumores, lendas e locais que talvez nem existam."
      />

      <article className="max-w-2xl mx-auto space-y-7 text-[1.075rem] leading-[1.85] text-muted-foreground font-serif animate-fade-up text-center my-20 italic">
        <p>
          "Há histórias, quase sempre incompletas, quase sempre contadas por quem ouviu de outra
          pessoa, que ouviu de outra pessoa, que jurou ter voltado."
        </p>
        <p className="text-flame">As lendas aguardam para serem escritas.</p>
      </article>
    </Container>
  );
}
