import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { tutorials } from "@/content/tutorials";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/learn/")({
  head: () => ({
    meta: [
      { title: "Tutorials — Cursor Academy" },
      {
        name: "description",
        content: "Four step-by-step tracks: install Cursor, learn the basics, build PowerPoint decks, and create Excel models.",
      },
      { property: "og:title", content: "Cursor Academy — Tutorials" },
    ],
  }),
  component: LearnPage,
});

function LearnPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-14 md:py-20">
      <PageHeader
        eyebrow="Tutorials"
        title="Four tracks. Total beginner to productive."
        subtitle="Each track is a numbered checklist. Mark steps complete as you go — your progress is saved on this device."
      />

      <ol className="space-y-4">
        {tutorials.map((t) => (
          <li key={t.slug}>
            <Link
              to="/learn/$slug"
              params={{ slug: t.slug }}
              className="group flex items-start gap-6 border border-border bg-card p-6 transition-all hover:border-[var(--gold)] md:p-8"
            >
              <span className="font-serif text-4xl text-[var(--gold)] md:text-5xl">
                {t.number}
              </span>
              <div className="flex-1">
                <h3 className="font-serif text-2xl text-foreground">{t.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground md:text-base">
                  {t.subtitle}
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
                  {t.steps.length} steps · {t.duration}
                </p>
              </div>
              <ArrowRight className="mt-2 h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-[var(--navy)]" />
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
