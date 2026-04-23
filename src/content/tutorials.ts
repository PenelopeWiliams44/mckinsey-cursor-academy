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
        title: "Download Cursor",
        body: "Go to cursor.com and click the big 'Download' button. It will detect whether you're on Mac or Windows automatically. Save the installer to your Downloads folder.",
        tip: "If you're on a McKinsey laptop and the download is blocked, request it through the IT software portal — it's pre-approved.",
      },
      {
        id: "install-2",
        title: "Install Cursor",
        body: "On Mac: open the .dmg file and drag the Cursor icon into your Applications folder. On Windows: double-click the installer and click 'Next' through every screen. Then open Cursor.",
      },
      {
        id: "install-3",
        title: "Sign in",
        body: "When Cursor opens, click 'Sign in' and use your personal Google account (not your @mckinsey.com — that won't work for the free tier). You'll get 2 weeks of Pro free.",
      },
      {
        id: "install-4",
        title: "Open the built-in terminal",
        body: "Inside Cursor, press Ctrl+` (the key above Tab) on Windows, or ⌘+` on Mac. A terminal window opens at the bottom. This is where we'll install Python.",
      },
      {
        id: "install-5",
        title: "Ask Cursor to install Python for you",
        body: "Open the chat panel on the right (⌘+L on Mac, Ctrl+L on Windows) and paste the prompt below. Cursor will give you the exact commands to run — click 'Run' on each.",
        prompt:
          "I'm on [Mac / Windows — pick one]. I have never used Python before. Please give me the simplest possible instructions to install Python 3.11 and pip, and then verify the installation works. Use the built-in terminal.",
      },
      {
        id: "install-6",
        title: "Verify it worked",
        body: "In the terminal, type `python3 --version` (Mac) or `python --version` (Windows) and press Enter. You should see something like 'Python 3.11.x'. If you do — you're done. 🎉",
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
    subtitle: "From idea to formatted deck in under 5 minutes using python-pptx.",
    duration: "12 min",
    steps: [
      {
        id: "pptx-1",
        title: "Install the python-pptx library",
        body: "Open the terminal and run: `pip install python-pptx`. This is the library that lets Python build PowerPoint files. Wait for it to finish (about 10 seconds).",
      },
      {
        id: "pptx-2",
        title: "Create an empty file",
        body: "In Cursor: File → New File → name it `make_deck.py`. Save it inside your project folder.",
      },
      {
        id: "pptx-3",
        title: "Ask Cursor to write the deck",
        body: "Open chat (⌘L) and paste the prompt below. Replace [TOPIC] with your actual topic. Cursor will write the entire script. Click 'Apply' to add it to your file.",
        prompt:
          "Write a Python script using python-pptx that creates a 6-slide McKinsey-style PowerPoint deck on [TOPIC].\n\nRequirements:\n- 16:9 widescreen\n- Navy header bar (#051C2C) with white title text on every slide\n- Gold accent rule (#B89D5E) under each section heading\n- Slide 1: title slide with topic + today's date\n- Slide 2: executive summary (3 bullets)\n- Slide 3: situation (2 columns of text)\n- Slide 4: a 2x2 matrix with labeled quadrants\n- Slide 5: a bar chart with sample data\n- Slide 6: recommended actions (numbered list)\n\nUse Arial font, 24pt body, 32pt headers. Save the file as 'deck.pptx'.",
      },
      {
        id: "pptx-4",
        title: "Run the script",
        body: "In the terminal, type `python3 make_deck.py` and press Enter. After a moment, a `deck.pptx` file will appear in your folder.",
      },
      {
        id: "pptx-5",
        title: "Open in PowerPoint",
        body: "Double-click `deck.pptx` to open it in PowerPoint. Edit text directly there — or go back to Cursor and ask for changes ('make slide 4 a 3x3 matrix') and re-run.",
        tip: "Save your favorite generated deck as a template. Reuse it by asking Cursor to 'modify deck.pptx to add a slide about X'.",
      },
      {
        id: "pptx-6",
        title: "Iterate fast",
        body: "Keep the chat open and request small changes one at a time: 'change the gold accent to teal', 'add a footer with the slide number', 'replace the chart with a line chart'.",
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
