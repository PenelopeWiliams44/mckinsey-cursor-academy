export type ResourceCategory = "Video" | "Template" | "Skills" | "Slack";

export type Resource = {
  id: string;
  title: string;
  description: string;
  url: string;
  category: ResourceCategory;
  tags: string[];
};

// Curated resources for McKinsey consultants getting started with Cursor.
export const resources: Resource[] = [
  {
    id: "cursor-intro-video",
    title: "Cursor intro video (Rewiring the Firm)",
    description:
      "Short McKinsey-produced walkthrough of what Cursor is and how to use it. Watch this first.",
    url: "https://rewiring-the-firm.apps.mckinsey.com/videos/cursor-intro.mp4",
    category: "Video",
    tags: ["beginner", "video", "mckinsey"],
  },
  {
    id: "slide-workspace",
    title: "McKinsey slide workspace (ZIP)",
    description:
      "Download this workspace, open the folder in Cursor, and ask Cursor to create a presentation (Claude Opus recommended). First open auto-installs the required Python packages — if not, Cursor will guide setup. Setup may take a minute and trigger a Windows security prompt for Python and Chromium. Make sure Python is installed first — just ask Cursor to install Python for you.",
    url: "https://mckinsey-my.sharepoint.com/:u:/p/kustaa_yli-ayho/IQBQCt-aHxpwR6EUZHjJHD5yAc3IpGoyIClk2qVNes2hH64?e=KauFmt",
    category: "Template",
    tags: ["pptx", "template", "mckinsey"],
  },
  {
    id: "intelligence-skills",
    title: "McKinsey Intelligence — Skill Explorer",
    description:
      "Once you're up and running on Cursor, browse Intelligence skills you can plug into your workflow.",
    url: "https://skill-explorer.npn.apps.mckinsey.com/",
    category: "Skills",
    tags: ["mckinsey", "advanced", "intelligence"],
  },
  {
    id: "slack-help",
    title: "#cursor-help on Slack",
    description: "Ask questions, browse threads, and see what others are working on.",
    url: "https://mckinsey.enterprise.slack.com/archives/C0AMKHJR64T",
    category: "Slack",
    tags: ["slack", "support"],
  },
];
