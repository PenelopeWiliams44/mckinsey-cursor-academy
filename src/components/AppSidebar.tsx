import { Link, useLocation } from "@tanstack/react-router";
import {
  BookOpen,
  Home,
  Library,
  MessageSquare,
  Sparkles,
  Download,
  Lightbulb,
  Presentation,
  Table,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const main = [
  { title: "Home", url: "/", icon: Home },
  { title: "Tutorials", url: "/learn", icon: BookOpen },
  { title: "Resources", url: "/resources", icon: Library },
  { title: "Prompt library", url: "/prompts", icon: Sparkles },
  { title: "Slack feed", url: "/slack", icon: MessageSquare },
];

const learn = [
  { title: "1. Install", url: "/learn/install", icon: Download },
  { title: "2. Cursor basics", url: "/learn/basics", icon: Lightbulb },
  { title: "3. PPT slides", url: "/learn/pptx", icon: Presentation },
  { title: "4. Excel models", url: "/learn/excel", icon: Table },
];

export function AppSidebar() {
  const { pathname } = useLocation();
  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname === path || pathname.startsWith(path + "/");

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border">
        <Link to="/" className="flex items-center gap-2 px-2 py-3">
          <div className="flex h-8 w-8 items-center justify-center bg-[var(--gold)] text-[var(--gold-foreground)] font-serif text-lg font-bold">
            C
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-sm font-semibold text-sidebar-foreground">
              Cursor Academy
            </span>
            <span className="text-[10px] uppercase tracking-widest text-sidebar-foreground/60">
              for McKinsey
            </span>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigate</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {main.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Step-by-step</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {learn.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border">
        <p className="px-2 py-2 text-[10px] leading-relaxed text-sidebar-foreground/60">
          Built for total beginners.
          <br />
          Stuck? Ping{" "}
          <span className="text-[var(--gold)]">#cursor-help</span>.
        </p>
      </SidebarFooter>
    </Sidebar>
  );
}
