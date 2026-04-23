import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Check, Copy, Search } from "lucide-react";
import { prompts, type PromptCategory } from "@/content/prompts";
import { PageHeader } from "@/components/PageHeader";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/prompts")({
  head: () => ({
    meta: [
      { title: "Prompt library — Cursor Academy" },
      {
        name: "description",
        content: "Copy-paste prompts for Cursor: generate McKinsey decks, build Excel models, clean data, and debug errors.",
      },
      { property: "og:title", content: "Cursor Academy — Prompt library" },
    ],
  }),
  component: PromptsPage,
});

const cats: ("All" | PromptCategory)[] = ["All", "Slides", "Excel", "Charts", "Data", "Debugging"];

function PromptsPage() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<(typeof cats)[number]>("All");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return prompts.filter((p) => {
      if (active !== "All" && p.category !== active) return false;
      if (!query) return true;
      const q = query.toLowerCase();
      return (
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.body.toLowerCase().includes(q)
      );
    });
  }, [query, active]);

  const copy = async (id: string, body: string) => {
    try {
      await navigator.clipboard.writeText(body);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1800);
    } catch {
      // ignore
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-14 md:py-20">
      <PageHeader
        eyebrow="Prompt library"
        title="Steal these prompts. Edit the bracketed parts."
        subtitle="Tested, McKinsey-relevant prompts for slides, Excel models, charts, data cleaning, and debugging. One-click copy."
      />

      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search prompts…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="rounded-none border-border bg-card pl-9"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={
                "border px-3.5 py-2 text-xs font-semibold uppercase tracking-widest transition-colors " +
                (active === c
                  ? "border-[var(--navy)] bg-[var(--navy)] text-[var(--navy-foreground)]"
                  : "border-border bg-card text-muted-foreground hover:border-[var(--navy)] hover:text-foreground")
              }
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <ul className="space-y-5">
        {filtered.map((p) => {
          const copied = copiedId === p.id;
          return (
            <li key={p.id} className="border border-border bg-card">
              <div className="flex items-start justify-between gap-4 border-b border-border p-5">
                <div>
                  <Badge
                    variant="outline"
                    className="mb-2 rounded-none border-[var(--gold)] text-[10px] uppercase tracking-widest text-[var(--navy)]"
                  >
                    {p.category}
                  </Badge>
                  <h3 className="font-serif text-xl text-foreground">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
                </div>
                <button
                  onClick={() => copy(p.id, p.body)}
                  className="inline-flex shrink-0 items-center gap-2 bg-[var(--navy)] px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-[var(--navy-foreground)] transition-colors hover:bg-[var(--navy)]/90"
                >
                  {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
              <pre className="overflow-x-auto bg-[var(--cream)] p-5 text-[13px] leading-relaxed text-foreground whitespace-pre-wrap font-mono">
                {p.body}
              </pre>
            </li>
          );
        })}
      </ul>

      {filtered.length === 0 && (
        <p className="border border-dashed border-border py-16 text-center text-sm text-muted-foreground">
          No prompts match. Try a different search.
        </p>
      )}

      <p className="mt-10 text-center text-xs text-muted-foreground">
        Edit or add prompts in <code className="font-mono">src/content/prompts.ts</code>
      </p>
    </div>
  );
}
