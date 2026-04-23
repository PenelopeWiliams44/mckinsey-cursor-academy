export type PromptCategory = "Slides" | "Excel" | "Charts" | "Data" | "Debugging";

export type Prompt = {
  id: string;
  title: string;
  category: PromptCategory;
  description: string;
  body: string;
};

export const prompts: Prompt[] = [
  {
    id: "p1",
    category: "Slides",
    title: "Generate a McKinsey-style deck",
    description: "Full 6-slide deck with navy/gold theme on any topic.",
    body: `Write a Python script using python-pptx that creates a 6-slide McKinsey-style PowerPoint deck on [TOPIC].

Requirements:
- 16:9 widescreen
- Navy header bar (#051C2C) with white title text on every slide
- Gold accent rule (#B89D5E) under each section heading
- Arial font, 24pt body, 32pt headers
- Slide 1: title + today's date
- Slide 2: executive summary (3 bullets)
- Slide 3: situation (2 columns)
- Slide 4: 2x2 matrix
- Slide 5: bar chart with sample data
- Slide 6: numbered recommendations

Save as 'deck.pptx'.`,
  },
  {
    id: "p2",
    category: "Slides",
    title: "Add a slide to existing deck",
    description: "Append one new slide without rebuilding the whole file.",
    body: `Modify make_deck.py to add a new slide before the recommendations slide titled "[SLIDE TITLE]". The slide should contain [DESCRIPTION OF CONTENT]. Match the existing navy header and gold accent styling.`,
  },
  {
    id: "p3",
    category: "Slides",
    title: "Convert outline to deck",
    description: "Paste a Word/text outline, get back a formatted deck.",
    body: `Here is an outline. Build a python-pptx script that turns each top-level item into one slide and each sub-bullet into a body bullet. Use McKinsey-style formatting (navy header, gold rule, Arial).

Outline:
[paste outline here]`,
  },
  {
    id: "p4",
    category: "Excel",
    title: "Build a 5-year P&L model",
    description: "Assumptions sheet driving a P&L with formulas.",
    body: `Write a Python script using openpyxl that creates a 5-year revenue forecast.

- Sheet 'Assumptions': starting revenue, YoY growth %, gross margin %, opex %
- Sheet 'P&L': Revenue, COGS, Gross Profit, Opex, EBITDA, EBITDA margin % across 2024-2028
- Use FORMULAS, not hardcoded numbers
- Inputs blue, formulas black, cross-sheet links green
- $#,##0 number format, 0.0% percentages
- Bold + frozen header row

Save as 'model.xlsx'.`,
  },
  {
    id: "p5",
    category: "Excel",
    title: "Add a sensitivity table",
    description: "5x5 grid showing how EBITDA shifts with two assumptions.",
    body: `Add a 'Sensitivity' sheet to model.xlsx with a 5x5 grid showing EBITDA in 2028 across:
- YoY growth: 3% to 11% in 2% steps (rows)
- Gross margin: 40% to 60% in 5% steps (columns)

Use formulas that reference the Assumptions sheet, not hardcoded numbers.`,
  },
  {
    id: "p6",
    category: "Charts",
    title: "Add a chart to a deck",
    description: "Native PowerPoint chart, editable in PPT.",
    body: `Add a [bar / line / pie] chart to slide [N] of deck.pptx using python-pptx's CHART_TYPE. Use this data:

[paste data here, e.g. Year, Revenue]

Use navy bars (#051C2C) with gold highlight on the largest value.`,
  },
  {
    id: "p7",
    category: "Data",
    title: "Clean a messy CSV",
    description: "One-shot data cleaning with pandas.",
    body: `Write a Python script that reads 'input.csv', does the following cleaning, and writes 'clean.csv':
- Strip whitespace from all string columns
- Convert [COLUMN] from "1,234.56" strings to floats
- Drop rows where [COLUMN] is empty
- Standardize date column [COLUMN] to YYYY-MM-DD
- Print before/after row counts`,
  },
  {
    id: "p8",
    category: "Data",
    title: "Excel → Markdown table",
    description: "Quickly summarize a sheet for a memo or Slack message.",
    body: `Read 'data.xlsx' (sheet '[SHEETNAME]') and print the first 20 rows as a Markdown table I can paste into a memo. Right-align numeric columns.`,
  },
  {
    id: "p9",
    category: "Debugging",
    title: "Explain this error",
    description: "Paste any traceback, get a plain-English fix.",
    body: `I'm new to Python. I got this error when running my script. Please:
1. Explain in one sentence what it means
2. Tell me exactly which line to change and what to change it to
3. Don't assume I know any jargon

Error:
[paste error here]`,
  },
  {
    id: "p10",
    category: "Debugging",
    title: "Why did my deck come out wrong?",
    description: "Visual issues — overlapping text, wrong colors, missing slides.",
    body: `My generated deck.pptx has this problem: [DESCRIBE — e.g. "the title overlaps the navy bar on slide 3"]. Look at make_deck.py and fix it. Don't change anything else.`,
  },
];
