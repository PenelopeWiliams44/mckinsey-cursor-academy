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
      "Download the ZIP, unzip it, and put the unzipped folder on your Desktop. Then open the folder in Cursor and ask Cursor to create a presentation (Claude Opus recommended). First open auto-installs the required Python packages — if not, Cursor will guide setup. Make sure Python is installed first — just ask Cursor to install Python for you.",
    url: "https://mckinsey-my.sharepoint.com/:u:/p/kustaa_yli-ayho/IQBQCt-aHxpwR6EUZHjJHD5yAc3IpGoyIClk2qVNes2hH64?e=KauFmt",
    category: "Template",
    tags: ["pptx", "template", "mckinsey"],
  },
  {
    id: "excel-best-practices",
    title: "Excel best practices (for Cursor to ingest)",
    description:
      "Download this file and drop it into your Cursor workspace, then tell Cursor to read it before building any Excel model. It encodes McKinsey conventions for structure, formulas, and formatting.",
    url: "https://mckinsey-my.sharepoint.com/:t:/p/schuyler_karr/IQA_CrV7Bva3R7FsqMNiMEHEAfiLge5NyPwpnncushcPl7c?e=dkaQti",
    category: "Template",
    tags: ["excel", "best-practices", "mckinsey"],
  },
  {
    id: "excel-style-guide",
    title: "Excel style guide (for Cursor to ingest)",
    description:
      "Companion style guide — colors, number formats, fonts, and layout rules. Add it to the same workspace as the best-practices file so Cursor references both.",
    url: "https://mckinsey-my.sharepoint.com/:t:/p/schuyler_karr/IQDvo93u4035QIngVvmbZqRNAeozOP69U-oSV8ftIWOySFc?e=0AwybG",
    category: "Template",
    tags: ["excel", "style-guide", "mckinsey"],
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
    title: "#agentic-workflows-for-integratives on Slack",
    description: "Ask questions, browse threads, and see what others are working on.",
    url: "https://mckinsey.enterprise.slack.com/archives/C0AMKHJR64T",
    category: "Slack",
    tags: ["slack", "support"],
  },
];
