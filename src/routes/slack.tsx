import { createFileRoute } from "@tanstack/react-router";
import { MessageSquare, Plug } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/slack")({
  head: () => ({
    meta: [
      { title: "Slack feed — Cursor Academy" },
      {
        name: "description",
        content: "Live feed from pinned Slack channels: #cursor-help, #cursor-wins, #ai-tools.",
      },
      { property: "og:title", content: "Cursor Academy — Slack feed" },
    ],
  }),
  component: SlackPage,
});

function SlackPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-14 md:py-20">
      <PageHeader
        eyebrow="Slack feed"
        title="Live conversations from the team."
        subtitle="See the latest messages from pinned Cursor channels without leaving this dashboard."
      />

      <div className="border border-dashed border-border bg-[var(--cream)] p-10 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--navy)] text-[var(--navy-foreground)]">
          <Plug className="h-5 w-5" />
        </div>
        <h2 className="font-serif text-2xl text-foreground">Slack not connected yet</h2>
        <div className="mx-auto mt-3 h-[2px] w-10 bg-[var(--gold)]" />
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
          Once your workspace admin connects the Lovable Slack app, this page
          will show live messages from your pinned channels with one-click links
          to open the thread in Slack.
        </p>

        <div className="mx-auto mt-8 grid max-w-md gap-3 text-left">
          {[
            { name: "#cursor-help", desc: "Ask questions, get unstuck" },
            { name: "#cursor-wins", desc: "Share decks and models you've built" },
            { name: "#ai-tools", desc: "Broader AI tooling chatter" },
          ].map((c) => (
            <div key={c.name} className="flex items-start gap-3 border border-border bg-card p-4">
              <MessageSquare className="mt-0.5 h-4 w-4 text-[var(--navy)]" />
              <div>
                <p className="font-mono text-sm font-semibold text-foreground">{c.name}</p>
                <p className="text-xs text-muted-foreground">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-md text-xs text-muted-foreground">
          Ready to connect? Ask in chat: <em>"Connect Slack to the dashboard."</em>
        </p>
      </div>
    </div>
  );
}
