import { Outlet, createRootRoute, HeadContent, Scripts, Link } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">
          404
        </p>
        <h1 className="mt-3 font-serif text-4xl text-foreground">Page not found</h1>
        <div className="mx-auto mt-4 h-[2px] w-10 bg-[var(--gold)]" />
        <p className="mt-5 text-sm text-muted-foreground">
          That page doesn't exist or has moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-[var(--navy)] px-5 py-2.5 text-sm font-medium text-[var(--navy-foreground)] hover:bg-[var(--navy)]/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Cursor Academy for McKinsey" },
      {
        name: "description",
        content:
          "Step-by-step dashboard helping McKinsey teams learn Cursor — install Python, build PowerPoint decks, and create Excel models.",
      },
      { property: "og:title", content: "Cursor Academy for McKinsey" },
      { name: "twitter:title", content: "Cursor Academy for McKinsey" },
      { name: "description", content: "Cursor Academy is a user-friendly dashboard to learn and use Cursor." },
      { property: "og:description", content: "Cursor Academy is a user-friendly dashboard to learn and use Cursor." },
      { name: "twitter:description", content: "Cursor Academy is a user-friendly dashboard to learn and use Cursor." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1c98a4e3-4d39-4940-8818-0e6375faf642/id-preview-761ce4cf--295fda93-0a0d-4547-80d4-3fd2ed8b4fa7.lovable.app-1776906460042.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1c98a4e3-4d39-4940-8818-0e6375faf642/id-preview-761ce4cf--295fda93-0a0d-4547-80d4-3fd2ed8b4fa7.lovable.app-1776906460042.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <div className="flex min-h-screen flex-1 flex-col">
          <header className="sticky top-0 z-30 flex h-12 items-center gap-2 border-b border-border bg-background/80 px-4 backdrop-blur">
            <SidebarTrigger className="text-foreground" />
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Cursor Academy
            </span>
          </header>
          <main className="flex-1">
            <Outlet />
          </main>
        </div>
        <Toaster />
      </div>
    </SidebarProvider>
  );
}
