import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Search } from "lucide-react";
import { resources, type ResourceCategory } from "@/content/resources";
import { PageHeader } from "@/components/PageHeader";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Cursor Academy" },
      {
        name: "description",
        content: "Searchable library of docs, videos, templates, and pinned Slack threads for Cursor users.",
      },
      { property: "og:title", content: "Cursor Academy — Resources" },
    ],
  }),
  component: ResourcesPage,
});

const categories: ("All" | ResourceCategory)[] = ["All", "Docs", "Video", "Template", "Slack"];

function ResourcesPage() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    return resources.filter((r) => {
      if (active !== "All" && r.category !== active) return false;
      if (!query) return true;
      const q = query.toLowerCase();
      return (
        r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [query, active]);

  return (
    <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
      <PageHeader
        eyebrow="Resource library"
        title="Everything we've collected, in one place."
        subtitle="Docs, videos, templates, and pinned Slack threads. Filter by type or search by keyword."
      />

      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search resources…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="rounded-none border-border bg-card pl-9"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
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

      {filtered.length === 0 ? (
        <p className="border border-dashed border-border py-16 text-center text-sm text-muted-foreground">
          No resources match. Try a different search.
        </p>
      ) : (
        <ul className="grid gap-4 md:grid-cols-2">
          {filtered.map((r) => (
            <li key={r.id}>
              <a
                href={r.url}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col border border-border bg-card p-6 transition-all hover:border-[var(--gold)]"
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <Badge
                    variant="outline"
                    className="rounded-none border-[var(--navy)] text-[10px] uppercase tracking-widest text-[var(--navy)]"
                  >
                    {r.category}
                  </Badge>
                  <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-[var(--navy)]" />
                </div>
                <h3 className="font-serif text-lg text-foreground">{r.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {r.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {r.tags.map((t) => (
                    <span
                      key={t}
                      className="bg-[var(--cream)] px-2 py-0.5 text-[10px] uppercase tracking-widest text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}

      <p className="mt-10 text-center text-xs text-muted-foreground">
        Edit or add entries in <code className="font-mono">src/content/resources.ts</code>
      </p>
    </div>
  );
}
