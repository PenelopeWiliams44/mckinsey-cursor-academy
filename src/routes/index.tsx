import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, Lightbulb, Presentation, Table, MessageSquare, Sparkles, Library } from "lucide-react";
import { tutorials } from "@/content/tutorials";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cursor Academy for McKinsey — Start here" },
      {
        name: "description",
        content:
          "A friendly, step-by-step dashboard for McKinsey consultants learning to use Cursor for Python, PowerPoint, and Excel.",
      },
      { property: "og:title", content: "Cursor Academy for McKinsey" },
      {
        property: "og:description",
        content: "Tutorials, prompts, and a live Slack feed to help you get productive with Cursor.",
      },
    ],
  }),
  component: HomePage,
});

const trackIcons = {
  install: Download,
  basics: Lightbulb,
  pptx: Presentation,
  excel: Table,
};

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--navy)] text-[var(--navy-foreground)]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">
            For McKinsey teams · v1
          </p>
          <h1 className="max-w-3xl font-serif text-4xl leading-[1.1] md:text-6xl">
            Learn Cursor.
            <br />
            Build slides and models{" "}
            <span className="text-[var(--gold)]">in minutes</span>.
          </h1>
          <div className="mt-6 h-[2px] w-12 bg-[var(--gold)]" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--navy-foreground)]/75 md:text-lg">
            A no-jargon dashboard built for total beginners. Walk through installing
            Cursor and Python, then use AI to generate McKinsey-style PowerPoint decks
            and Excel models — without writing a line of code yourself.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/learn/$slug"
              params={{ slug: "install" }}
              className="group inline-flex items-center gap-2 bg-[var(--gold)] px-6 py-3 text-sm font-semibold text-[var(--gold-foreground)] transition-all hover:bg-[var(--gold)]/90"
            >
              Start with Step 01: Install
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/prompts"
              className="inline-flex items-center gap-2 border border-[var(--navy-foreground)]/30 px-6 py-3 text-sm font-semibold text-[var(--navy-foreground)] hover:bg-white/5"
            >
              Browse prompts
            </Link>
          </div>
        </div>
      </section>

      {/* Quick start tracks */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">
              The four tracks
            </p>
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">
              Pick where to start
            </h2>
            <div className="mt-3 h-[2px] w-10 bg-[var(--gold)]" />
          </div>
          <Link
            to="/learn"
            className="hidden items-center gap-1 text-sm font-medium text-foreground hover:text-[var(--navy)] md:inline-flex"
          >
            See all tutorials <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {tutorials.map((t) => {
            const Icon = trackIcons[t.slug];
            return (
              <Link
                key={t.slug}
                to="/learn/$slug"
                params={{ slug: t.slug }}
                className="group flex flex-col border border-border bg-card p-7 transition-all hover:border-[var(--gold)] hover:shadow-[0_8px_24px_-12px_rgba(5,28,44,0.25)]"
              >
                <div className="flex items-start justify-between">
                  <span className="font-serif text-3xl text-[var(--gold)]">{t.number}</span>
                  <Icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <h3 className="mt-4 font-serif text-2xl text-foreground">{t.title}</h3>
                <div className="mt-2 h-[2px] w-8 bg-[var(--gold)]" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {t.subtitle}
                </p>
                <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground">
                  <span>{t.steps.length} steps · {t.duration}</span>
                  <span className="inline-flex items-center gap-1 text-foreground transition-colors group-hover:text-[var(--navy)]">
                    Begin <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Secondary nav cards */}
      <section className="border-t border-border bg-[var(--cream)]">
        <div className="mx-auto grid max-w-6xl gap-px bg-border md:grid-cols-3">
          <Link
            to="/resources"
            className="group flex flex-col gap-3 bg-[var(--cream)] p-8 transition-colors hover:bg-white"
          >
            <Library className="h-5 w-5 text-[var(--navy)]" />
            <h3 className="font-serif text-xl text-foreground">Resource library</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Curated docs, videos, templates, and helpful links.
            </p>
            <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-[var(--navy)]">
              Open <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>

          <Link
            to="/prompts"
            className="group flex flex-col gap-3 bg-[var(--cream)] p-8 transition-colors hover:bg-white"
          >
            <Sparkles className="h-5 w-5 text-[var(--navy)]" />
            <h3 className="font-serif text-xl text-foreground">Prompt library</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Copy-paste prompts for slides, models, and debugging.
            </p>
            <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-[var(--navy)]">
              Open <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>

          {links.slackHelpChannel ? (
            <a
              href={links.slackHelpChannel}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col gap-3 bg-[var(--cream)] p-8 transition-colors hover:bg-white"
            >
              <MessageSquare className="h-5 w-5 text-[var(--navy)]" />
              <h3 className="font-serif text-xl text-foreground">Ask in Slack</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Open #cursor-help to ask a question or browse recent threads.
              </p>
              <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-[var(--navy)]">
                Open in Slack <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          ) : (
            <div className="flex flex-col gap-3 bg-[var(--cream)] p-8 opacity-70">
              <MessageSquare className="h-5 w-5 text-[var(--navy)]" />
              <h3 className="font-serif text-xl text-foreground">Ask in Slack</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Slack channel link not configured yet.
              </p>
              <span className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Add it in src/content/links.ts
              </span>
            </div>
          )}
        </div>
      </section>

      <footer className="border-t border-border bg-background py-8 text-center text-xs text-muted-foreground">
        Built with care for McKinsey teams · Edit content in{" "}
        <code className="font-mono">src/content/</code>
      </footer>
    </div>
  );
}
