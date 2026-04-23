export type TutorialStep = {
  id: string;
  title: string;
  body: string;
  prompt?: string;
  tip?: string;
};

export type Tutorial = {
  slug: "install" | "basics" | "pptx" | "excel";
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
        id: "install-1",
        title: "Download Cursor from the McKinsey app catalog",
        body: "Cursor is pre-approved for McKinsey laptops. Open the McKinsey ServiceNow app catalog page for Cursor and request/install it from there — do NOT download from cursor.com directly.\n\nLink: https://mckinsey.service-now.com/ghd?id=mck_app_cat_item&sys_id=1a9b2b55c38c9650cd5777f4e40131c9&category=Category&status=Status&os=Windows&pricing=Pricing&brand=Brand&filter%20apps=cursor",
        tip: "If the install button is greyed out, follow the on-screen request flow — approval is usually instant.",
      },
      {
        id: "install-2",
        title: "Open Cursor",
        body: "Once ServiceNow finishes installing, find Cursor in your Start menu (Windows) or Applications folder (Mac) and open it.",
      },
      {
        id: "install-3",
        title: "Sign in",
        body: "When Cursor opens, click 'Sign in' and use your personal Google account (not your @mckinsey.com — that won't work for the free tier). You'll get 2 weeks of Pro free.",
      },
      {
        id: "install-4",
        title: "Open the built-in chat",
        body: "Press ⌘+L (Mac) or Ctrl+L (Windows) to open the chat panel on the right. This is your AI assistant — you'll talk to it in plain English.",
      },
      {
        id: "install-5",
        title: "Ask Cursor to install Python for you",
        body: "Paste the prompt below into the chat. Cursor will detect your OS, give you the exact commands, and offer to run them for you in the built-in terminal. Just click 'Run' on each step it suggests.",
        prompt:
          "I'm on [Mac / Windows — pick one]. I have never used Python before. Please install Python 3.11 and pip on my machine using the simplest possible approach, run each step in the built-in terminal, and verify the install at the end.",
      },
      {
        id: "install-6",
        title: "You're done",
        body: "When Cursor confirms `python --version` returns 3.11.x, you're ready to move on to Step 02: Cursor Basics. 🎉",
      },
    ],
  },
  {
    slug: "basics",
    number: "02",
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
        body: "Download the official slide workspace ZIP from SharePoint and unzip it somewhere easy to find (e.g. your Desktop).\n\nLink: https://mckinsey-my.sharepoint.com/:u:/p/kustaa_yli-ayho/IQBQCt-aHxpwR6EUZHjJHD5yAc3IpGoyIClk2qVNes2hH64?e=KauFmt",
      },
      {
        id: "pptx-3",
        title: "Open the workspace folder in Cursor",
        body: "In Cursor: File → Open Folder → select the unzipped workspace folder.\n\nOn first open, the workspace will automatically install the Python packages it needs (and Chromium for rendering). This may take a minute and may trigger a Windows security prompt — click Allow. If auto-install doesn't trigger, just ask Cursor in chat: 'Please run the setup for this workspace.'",
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
