export type ResourceCategory = "Docs" | "Video" | "Template" | "Slack";

export type Resource = {
  id: string;
  title: string;
  description: string;
  url: string;
  category: ResourceCategory;
  tags: string[];
};

// Seed entries — edit these or add real links from your team
export const resources: Resource[] = [
  {
    id: "r1",
    title: "Cursor — official docs",
    description: "The complete reference for chat, composer, ⌘K, and keyboard shortcuts.",
    url: "https://docs.cursor.com",
    category: "Docs",
    tags: ["beginner", "reference"],
  },
  {
    id: "r2",
    title: "python-pptx documentation",
    description: "Every method for building PowerPoint slides programmatically.",
    url: "https://python-pptx.readthedocs.io",
    category: "Docs",
    tags: ["pptx", "python"],
  },
  {
    id: "r3",
    title: "openpyxl documentation",
    description: "Read and write Excel 2010+ files with full formula and formatting support.",
    url: "https://openpyxl.readthedocs.io",
    category: "Docs",
    tags: ["excel", "python"],
  },
  {
    id: "r4",
    title: "Cursor in 100 seconds",
    description: "Quick visual walkthrough of the core Cursor features.",
    url: "https://www.youtube.com/results?search_query=cursor+ai+in+100+seconds",
    category: "Video",
    tags: ["beginner", "video"],
  },
  {
    id: "r5",
    title: "Building decks with python-pptx — tutorial",
    description: "Step-by-step video showing the full workflow.",
    url: "https://www.youtube.com/results?search_query=python-pptx+tutorial",
    category: "Video",
    tags: ["pptx"],
  },
  {
    id: "r6",
    title: "McKinsey deck template (PPTX)",
    description: "Starter file with navy/gold theme and standard layouts. Replace with your team's official template.",
    url: "#",
    category: "Template",
    tags: ["pptx", "template"],
  },
  {
    id: "r7",
    title: "5-year financial model template (XLSX)",
    description: "Starter Excel model with assumptions, P&L, and sensitivity sheets.",
    url: "#",
    category: "Template",
    tags: ["excel", "template"],
  },
  {
    id: "r8",
    title: "#cursor-help — getting started thread",
    description: "Pinned welcome thread with FAQs from new users.",
    url: "#",
    category: "Slack",
    tags: ["slack", "beginner"],
  },
  {
    id: "r9",
    title: "#cursor-wins — share your output",
    description: "Channel for posting decks and models you've built. Browse for inspiration.",
    url: "#",
    category: "Slack",
    tags: ["slack", "inspiration"],
  },
  {
    id: "r10",
    title: "Python install troubleshooting",
    description: "Common errors when installing Python on a McKinsey laptop, and how to fix them.",
    url: "#",
    category: "Slack",
    tags: ["slack", "python", "troubleshooting"],
  },
];
