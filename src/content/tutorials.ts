export type TutorialStep = {
  id: string;
  title: string;
  body: string;
  prompt?: string;
  tip?: string;
  link?: { label: string; url: string };
};

export type Tutorial = {
  slug: "install" | "deep-dive" | "basics" | "pptx" | "excel";
  number: string;
  title: string;
  subtitle: string;
  duration: string;
  steps: TutorialStep[];
};

export const tutorials: Tutorial[] = [
  {
    slug: "install",
    number: "01",
    title: "Install Cursor & Python",
    subtitle: "Get the tools running on your Mac or Windows laptop. No coding required.",
    duration: "10 min",
    steps: [
      {
        id: "install-1a",
        title: "Option A — Download Cursor on its own",
        body: "Cursor is pre-approved for McKinsey laptops. Open the McKinsey GHD app catalog page for Cursor and request/install it from there — do NOT download from cursor.com directly.\n\nReminder: Cursor requires a charge code and is paid software.\n\nIf you choose this option, continue with every step below.",
        link: {
          label: "Open Cursor in GHD",
          url: "https://mckinsey.service-now.com/ghd?id=mck_app_cat_item&sys_id=1a9b2b55c38c9650cd5777f4e40131c9&category=Category&status=Status&os=Windows&pricing=Pricing&brand=Brand&filter%20apps=cursor",
        },
      },
      {
        id: "install-1b",
        title: "Option B — Download the Cursor + Python + GitHub bundle (recommended)",
        body: "If you'd rather get Cursor, Python, and GitHub installed together in one go, request the bundled package from GHD instead. Then follow the official McKinsey install & setup guide — it walks you through the whole thing.\n\nIf you choose this option, you can skip Steps 5 and 6 below (Python is already installed).\n\nReminder: Cursor requires a charge code and is paid software.",
        link: {
          label: "Open bundle in GHD",
          url: "https://mckinsey.service-now.com/ghd?id=mck_app_cat_item&sys_id=d0177727ddc77ad0cfb9f5af25663c58&category=Category&status=Status&os=Windows&pricing=Pricing&brand=Brand&filter%20apps=Filter%20apps",
        },
        tip: "After installing the bundle, follow the Rewiring the Firm install & setup walkthrough: https://rewiring-the-firm.apps.mckinsey.com/#tab=setup",
      },
      {
        id: "install-2",
        title: "Open Cursor",
        body: "Manage installation and log in with your McKinsey email as you would with any other GHD software.",
      },
      {
        id: "install-3",
        title: "Sign in",
        body: "When Cursor opens, click 'Sign in' and use your @mckinsey.com email.",
      },
      {
        id: "install-4",
        title: "Open the built-in chat",
        body: "Press ⌘+L (Mac) or Ctrl+L (Windows) to open the chat panel on the right. This is your AI assistant — you'll talk to it in plain English.",
      },
      {
        id: "install-5",
        title: "Ask Cursor to install Python for you (skip if you used Option B)",
        body: "If you installed the Cursor + Python + GitHub bundle in Option B, Python is already on your machine — skip this step.\n\nOtherwise, paste the prompt below into the chat. Cursor will detect your OS, give you the exact commands, and offer to run them for you in the built-in terminal. Just click 'Run' on each step it suggests.",
        prompt:
          "I'm on [Mac / Windows — pick one]. I have never used Python before. Please install Python 3.11 and pip on my machine using the simplest possible approach, run each step in the built-in terminal, and verify the install at the end.",
      },
      {
        id: "install-6",
        title: "You're done (skip if you used Option B)",
        body: "When Cursor confirms `python --version` returns 3.11.x, you're ready to move on. If you used the Option B bundle, you can skip straight ahead. 🎉",
      },
    ],
  },
  {
    slug: "deep-dive",
    number: "02",
    title: "In-depth Cursor walkthrough",
    subtitle: "A guided click-through tutorial from the Rewiring the Firm team. Best done right after install.",
    duration: "20 min",
    steps: [
      {
        id: "deep-dive-1",
        title: "Open the in-depth tutorial",
        body: "The McKinsey Rewiring the Firm team built a click-through tutorial that walks you through Cursor end-to-end with screenshots and short demos. Open it in a new tab and work through it at your own pace before moving on to the basics track.",
        link: {
          label: "Open in-depth tutorial",
          url: "https://rewiring-the-firm.apps.mckinsey.com/#tab=tutorial",
        },
      },
    ],
  },
  {
    slug: "basics",
    number: "03",
    title: "Cursor Basics",
    subtitle: "The 4 things you'll use 95% of the time. Learn these and you're productive.",
    duration: "8 min",
    steps: [
      {
        id: "basics-1",
        title: "Create a project folder",
        body: "On your desktop, create a new folder called 'cursor-projects'. In Cursor: File → Open Folder → select it. This is where everything you build will live.",
      },
      {
        id: "basics-2",
        title: "The Chat panel (⌘L / Ctrl+L)",
        body: "This is your AI assistant. Ask it anything in plain English: 'Write me a Python script that reads data.csv and prints the average revenue.' It will write the file for you.",
        tip: "Be specific about what you want. 'A 5-slide deck on Q3 results' beats 'a deck'.",
      },
      {
        id: "basics-3",
        title: "Inline edit (⌘K / Ctrl+K)",
        body: "Click anywhere in a file, press ⌘K, and tell Cursor what to change: 'Add comments explaining this code' or 'Make the chart blue'. It edits in place.",
      },
      {
        id: "basics-4",
        title: "Accept or reject changes",
        body: "When Cursor proposes changes, you'll see green (added) and red (removed) lines. Click 'Accept' to keep them or 'Reject' to throw them out. Always read before accepting.",
      },
      {
        id: "basics-5",
        title: "Run a Python script",
        body: "Open the terminal (⌘`), type `python3 your_file.py` and press Enter. The output appears below. If there's an error, copy it back into chat and Cursor will fix it.",
        prompt:
          "I just got this error when running my Python script. Please explain what it means in plain English and tell me exactly what to change to fix it:\n\n[paste your error here]",
      },
    ],
  },
  {
    slug: "pptx",
    number: "03",
    title: "Generate McKinsey-style PPT slides",
    subtitle: "Use the McKinsey slide workspace + Cursor to produce on-brand decks in minutes.",
    duration: "10 min",
    steps: [
      {
        id: "pptx-1",
        title: "Make sure Python is installed",
        body: "The slide workspace runs on Python under the hood. If you haven't installed Python yet, go back to Step 01 — or just open Cursor's chat (⌘L / Ctrl+L) and ask: 'Please install Python for me.' Cursor will walk you through it.",
        tip: "Don't try to install Python yourself from python.org — let Cursor handle it. It's faster and avoids PATH issues on McKinsey laptops.",
      },
      {
        id: "pptx-2",
        title: "Download the McKinsey slide workspace",
        body: "Download the official slide workspace ZIP from SharePoint, then unzip it and put the unzipped folder on your Desktop so it's easy to find.",
        link: {
          label: "Download slide workspace (ZIP)",
          url: "https://mckinsey-my.sharepoint.com/:u:/p/kustaa_yli-ayho/IQBQCt-aHxpwR6EUZHjJHD5yAc3IpGoyIClk2qVNes2hH64?e=KauFmt",
        },
      },
      {
        id: "pptx-3",
        title: "Open the workspace folder in Cursor",
        body: "In Cursor: File → Open Folder → select the unzipped workspace folder.\n\nOn first open, the workspace will automatically install the Python packages it needs (and Chromium for rendering). This may take a minute. If auto-install doesn't trigger, just ask Cursor in chat: 'Please run the setup for this workspace.'",
      },
      {
        id: "pptx-4",
        title: "Switch the model to Claude Opus",
        body: "In the Cursor chat panel, click the model selector at the bottom and choose 'Claude Opus'. Opus produces the highest-quality McKinsey-style slides.",
      },
      {
        id: "pptx-5",
        title: "Ask Cursor to create your presentation",
        body: "Open chat (⌘L / Ctrl+L) and describe the deck you want. Be specific about audience, length, and key messages. Use the prompt below as a starting point.",
        prompt:
          "Using this slide workspace, please create a McKinsey-style presentation on [TOPIC].\n\nAudience: [e.g. CFO of a Fortune 500 retailer]\nLength: [e.g. 6 slides]\nKey messages I want to land:\n1. [message 1]\n2. [message 2]\n3. [message 3]\n\nInclude an executive summary slide, a situation slide, supporting analysis (charts welcome), and a recommended actions slide. Use McKinsey visual conventions throughout.",
      },
      {
        id: "pptx-6",
        title: "Iterate",
        body: "Open the generated .pptx to review, then go back to chat and request changes one at a time: 'tighten the executive summary to 3 bullets', 'replace slide 4 with a 2x2 matrix', 'add a sources footer'. Re-run and the deck regenerates.",
      },
    ],
  },
  {
    slug: "excel",
    number: "04",
    title: "Build Excel models with Cursor",
    subtitle: "Use openpyxl to generate spreadsheets with formulas, formatting, and charts.",
    duration: "12 min",
    steps: [
      {
        id: "excel-1",
        title: "Install openpyxl",
        body: "In the terminal, run: `pip install openpyxl pandas`. openpyxl writes Excel files; pandas helps with data. Both install in seconds.",
      },
      {
        id: "excel-1b",
        title: "Download the Excel best practices file",
        body: "Download this file and save it into your project folder. You'll point Cursor at it in a moment so every model it builds follows McKinsey conventions for structure, formulas, and formatting.",
        link: {
          label: "Download Excel best practices",
          url: "https://mckinsey-my.sharepoint.com/:t:/p/schuyler_karr/IQA_CrV7Bva3R7FsqMNiMEHEAfiLge5NyPwpnncushcPl7c?e=dkaQti",
        },
      },
      {
        id: "excel-1c",
        title: "Download the Excel style guide",
        body: "Save the style guide into the same project folder. Cursor will ingest both files together so colors, number formats, fonts, and layout match McKinsey standards.",
        link: {
          label: "Download Excel style guide",
          url: "https://mckinsey-my.sharepoint.com/:t:/p/schuyler_karr/IQDvo93u4035QIngVvmbZqRNAeozOP69U-oSV8ftIWOySFc?e=0AwybG",
        },
        tip: "Before you ask Cursor to build anything, tell it: 'Read the Excel best practices and style guide files in this folder and follow them for everything you build.'",
      },
      {
        id: "excel-2",
        title: "Create the file",
        body: "File → New File → `build_model.py`. Save it in your project folder.",
      },
      {
        id: "excel-3",
        title: "Ask Cursor to build a model",
        body: "Use the prompt below. Cursor handles the formulas (=SUM, =VLOOKUP, growth %) so you don't have to remember Excel syntax.",
        prompt:
          "Write a Python script using openpyxl that creates a 5-year revenue forecast model in Excel.\n\nRequirements:\n- Sheet 1 'Assumptions': starting revenue, YoY growth %, gross margin %, opex % of revenue\n- Sheet 2 'P&L': years 2024-2028 across columns; rows for Revenue, COGS, Gross Profit, Opex, EBITDA, EBITDA margin %\n- Use FORMULAS (not hardcoded values) so changing assumptions updates the P&L\n- Format inputs in blue, formulas in black, cross-sheet links in green\n- Numbers in $#,##0 format, percentages as 0.0%\n- Bold the header row, freeze the top row\n- Save as 'model.xlsx'",
      },
      {
        id: "excel-4",
        title: "Run it",
        body: "Terminal: `python3 build_model.py`. A `model.xlsx` file appears.",
      },
      {
        id: "excel-5",
        title: "Open in Excel and tweak",
        body: "Double-click to open. Change a value in 'Assumptions' — every formula recalculates. Bake in a sensitivity table by asking Cursor to add one.",
        prompt:
          "Modify build_model.py to add a third sheet called 'Sensitivity' that shows EBITDA in 2028 across a 5x5 grid varying YoY growth (3% to 11%, step 2%) and gross margin (40% to 60%, step 5%). Use formulas referencing the Assumptions sheet.",
      },
      {
        id: "excel-6",
        title: "Add a chart",
        body: "Ask Cursor: 'Add a line chart to the P&L sheet showing Revenue and EBITDA across 2024-2028, with Year on the X axis.' Re-run the script.",
      },
    ],
  },
];

export const tutorialBySlug = (slug: string) =>
  tutorials.find((t) => t.slug === slug);
