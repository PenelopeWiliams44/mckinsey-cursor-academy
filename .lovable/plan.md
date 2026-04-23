

## McKinsey × Cursor Learning Dashboard

A polished, beginner-friendly dashboard that walks McKinsey consultants through using Cursor to install Python and generate McKinsey-style PowerPoint decks and Excel models — with live Slack threads, curated resources, and copy-paste prompts.

### Site structure (separate routes for SEO + clean nav)

```text
/                  Home — hero, "Start here" CTA, 4 quick-start tiles, recent Slack activity
/learn             Tutorials hub — 4 guided tracks
/learn/install     1. Install Cursor + Python (step-by-step, screenshots, checkboxes)
/learn/basics      2. Cursor basics (chat, composer, ⌘K, accepting edits)
/learn/pptx        3. Generate McKinsey PPT slides with Cursor
/learn/excel       4. Build Excel models with Cursor
/resources         Searchable library (docs, videos, templates) with category filters
/prompts           Copy-paste prompt library (slide gen, Excel formulas, chart code, etc.)
/slack             Live Slack feed — pinned channels + recent threads
```

Shared layout: left sidebar (collapsible) with section nav, top bar with search + Slack status indicator.

### Visual design — McKinsey-inspired

- **Palette:** Deep navy `#051C2C` (primary), white, warm cream `#F5F2EA` (surfaces), accent gold `#B89D5E`, charcoal text `#1F1F1F`
- **Typography:** Serif headlines (Georgia / "Bower" feel), clean sans body (Inter)
- **Layout:** Generous whitespace, thin gold rule under section titles, square-cornered cards with subtle shadow, numbered step badges in navy circles
- **Motifs:** Numbered "01 / 02 / 03" track markers, progress dots, pill-shaped tags

### Key features

**1. Step-by-step tutorials (the heart of v1)**
Each tutorial page = vertical timeline of numbered steps. Every step has:
- Plain-English instruction (written for total beginners — "Open the Applications folder…")
- Screenshot/illustration placeholder
- Optional "Copy this prompt" block (one-click copy)
- Checkbox to mark complete (saved to `localStorage`)
- "Stuck? Ask in #cursor-help" link to Slack thread

Tracks:
1. **Install** — Download Cursor → install Python via Cursor terminal → verify
2. **Basics** — Open project, use chat, ⌘K inline edits, accept/reject changes
3. **PPT slides** — Install `python-pptx`, prompt Cursor to scaffold a McK deck, run script, open in PowerPoint
4. **Excel** — Install `openpyxl`, prompt Cursor to build a model with formulas, run, open in Excel

**2. Resource library** (`/resources`)
Filterable card grid: All / Docs / Videos / Templates / Slack threads. Each card: title, 1-line description, source badge, "Open" button. Search box filters live.

**3. Prompt library** (`/prompts`)
Categorized cards (Slides, Excel, Charts, Data cleaning, Debugging) with code-block prompts and a copy button. Example: "Create a 5-slide McKinsey-style deck on [TOPIC] using python-pptx with navy headers and gold accents…"

**4. Live Slack integration** (`/slack` + home widget)
- Connect via Lovable Slack connector (bot token)
- Server functions call Slack API through the gateway (`conversations.history`, `conversations.list`)
- Pinned channels configured in code (e.g. `#cursor-help`, `#cursor-wins`, `#ai-tools`)
- Display last ~20 messages per channel with author, timestamp, snippet, and a "Open in Slack" deep link (`slack://channel?team=…&id=…`)
- Resource cards and tutorial steps can deep-link to specific Slack threads (URL stored in content)

### Technical approach

- **Stack:** TanStack Start (existing template), Tailwind v4, shadcn components (Sidebar, Card, Tabs, Accordion, Badge, Checkbox)
- **Routing:** One file per page under `src/routes/` (e.g. `learn.install.tsx`)
- **Layout:** `src/components/AppSidebar.tsx` + shared layout in `__root.tsx`
- **Tutorial content:** Typed data in `src/content/tutorials.ts` (steps array per track) — easy to edit later
- **Resources & prompts:** Typed arrays in `src/content/resources.ts` and `src/content/prompts.ts`
- **Progress tracking:** `useLocalStorage` hook keyed by step ID
- **Slack:** `standard_connectors--connect` with `slack` connector (bot type), then a server function `getSlackChannelMessages` calling `https://connector-gateway.lovable.dev/slack/api/conversations.history` using `LOVABLE_API_KEY` + `SLACK_API_KEY`. TanStack Query caches results for 60s.
- **Theme:** Update `src/styles.css` with navy/cream/gold OKLCH tokens; add Georgia serif for headings via Tailwind utility class

### Build order (one approval → I implement in this sequence)

1. Theme + sidebar layout + all empty route files with proper `head()` metadata
2. Home page with hero and 4 quick-start tiles
3. 4 tutorial pages with full beginner content (install, basics, PPT, Excel) + checkboxes
4. Resources page with filter/search (seeded with sensible starter entries you can edit)
5. Prompts page with copy buttons (seeded with 8–10 McKinsey-relevant prompts)
6. Connect Slack connector + build `/slack` page and home recent-activity widget
7. Polish pass: empty states, loading skeletons, mobile responsive check

### What I'll need from you after approval

- Slack connector authorization (one click — I'll trigger the connect flow)
- Names of Slack channels to pin (default guess: `#cursor-help`, `#cursor-wins`, `#ai-tools` — easy to change)
- Any specific docs/links you want pre-loaded (otherwise I'll seed realistic placeholders you can edit)

