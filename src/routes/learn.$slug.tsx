import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, Lightbulb, MessageSquare } from "lucide-react";
import { tutorialBySlug, tutorials } from "@/content/tutorials";
import { PageHeader } from "@/components/PageHeader";
import { CopyPrompt } from "@/components/CopyPrompt";
import { Checkbox } from "@/components/ui/checkbox";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { links } from "@/content/links";

export const Route = createFileRoute("/learn/$slug")({
  loader: ({ params }) => {
    const t = tutorialBySlug(params.slug);
    if (!t) throw notFound();
    return { tutorial: t };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.tutorial.title} — Cursor Academy` },
          { name: "description", content: loaderData.tutorial.subtitle },
          { property: "og:title", content: loaderData.tutorial.title },
          { property: "og:description", content: loaderData.tutorial.subtitle },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-20 text-center">
      <h1 className="font-serif text-3xl">Tutorial not found</h1>
      <Link to="/learn" className="mt-4 inline-block text-sm text-[var(--navy)] underline">
        Back to all tutorials
      </Link>
    </div>
  ),
  component: TutorialPage,
});

function TutorialPage() {
  const { tutorial } = Route.useLoaderData();
  const [done, setDone, hydrated] = useLocalStorage<Record<string, boolean>>(
    `tutorial-progress-${tutorial.slug}`,
    {},
  );

  const completedCount = Object.values(done).filter(Boolean).length;
  const total = tutorial.steps.length;
  const pct = hydrated ? Math.round((completedCount / total) * 100) : 0;

  const idx = tutorials.findIndex((t) => t.slug === tutorial.slug);
  const prev = idx > 0 ? tutorials[idx - 1] : null;
  const next = idx < tutorials.length - 1 ? tutorials[idx + 1] : null;

  return (
    <div className="mx-auto max-w-3xl px-6 py-14 md:py-20">
      <Link
        to="/learn"
        className="mb-8 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> All tutorials
      </Link>

      <PageHeader
        eyebrow={`Track ${tutorial.number} · ${tutorial.duration}`}
        title={tutorial.title}
        subtitle={tutorial.subtitle}
      />

      {/* Progress */}
      <div className="mb-12 border border-border bg-[var(--cream)] p-4">
        <div className="flex items-center justify-between text-xs font-medium uppercase tracking-widest text-muted-foreground">
          <span>Your progress</span>
          <span>
            {completedCount} / {total} {pct === 100 && "🎉"}
          </span>
        </div>
        <div className="mt-3 h-1.5 w-full bg-border">
          <div
            className="h-full bg-[var(--gold)] transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {/* Steps */}
      <ol className="space-y-10">
        {tutorial.steps.map((step, i) => {
          const checked = !!done[step.id];
          return (
            <li key={step.id} className="relative pl-14">
              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center bg-[var(--navy)] font-serif text-base text-[var(--navy-foreground)]">
                {i + 1}
              </div>
              <div className="border-b border-border pb-8">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <h3 className="font-serif text-xl leading-tight text-foreground">
                    {step.title}
                  </h3>
                  <label className="flex shrink-0 items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    <Checkbox
                      checked={checked}
                      onCheckedChange={(v) =>
                        setDone((d) => ({ ...d, [step.id]: !!v }))
                      }
                      className="data-[state=checked]:border-[var(--gold)] data-[state=checked]:bg-[var(--gold)] data-[state=checked]:text-[var(--gold-foreground)]"
                    />
                    Done
                  </label>
                </div>
                <p className="text-[15px] leading-relaxed text-foreground/85">
                  {step.body}
                </p>
                {step.prompt && <CopyPrompt text={step.prompt} />}
                {step.tip && (
                  <div className="mt-4 flex gap-3 border-l-2 border-[var(--gold)] bg-[var(--cream)] px-4 py-3 text-sm text-foreground/80">
                    <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
                    <p>
                      <span className="font-semibold">Tip · </span>
                      {step.tip}
                    </p>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      {/* Help footer */}
      <div className="mt-14 flex items-start gap-4 border border-border bg-card p-6">
        <MessageSquare className="mt-0.5 h-5 w-5 text-[var(--navy)]" />
        <div className="flex-1">
          <h4 className="font-serif text-lg text-foreground">Stuck on a step?</h4>
          <p className="mt-1 text-sm text-muted-foreground">
            Drop your question in <span className="font-semibold text-foreground">#cursor-help</span>.
            Someone will reply within an hour during work hours.
          </p>
        </div>
        {links.slackHelpChannel ? (
          <a
            href={links.slackHelpChannel}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 self-center bg-[var(--navy)] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[var(--navy-foreground)] hover:bg-[var(--navy)]/90"
          >
            Open Slack
          </a>
        ) : (
          <span className="shrink-0 self-center border border-border bg-[var(--cream)] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Slack link not set
          </span>
        )}
      </div>

      {/* Prev / Next */}
      <nav className="mt-10 flex items-stretch justify-between gap-3">
        {prev ? (
          <Link
            to="/learn/$slug"
            params={{ slug: prev.slug }}
            className="group flex flex-1 flex-col border border-border bg-card p-4 hover:border-[var(--gold)]"
          >
            <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              ← Previous · {prev.number}
            </span>
            <span className="mt-1 font-serif text-sm text-foreground">{prev.title}</span>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
        {next ? (
          <Link
            to="/learn/$slug"
            params={{ slug: next.slug }}
            className="group flex flex-1 flex-col items-end border border-border bg-card p-4 text-right hover:border-[var(--gold)]"
          >
            <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Next · {next.number} →
            </span>
            <span className="mt-1 inline-flex items-center gap-1 font-serif text-sm text-foreground">
              {next.title} <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </nav>
    </div>
  );
}
