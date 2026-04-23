/**
 * Central place for all external links shown in the dashboard.
 * Edit this file as you collect the real URLs from your team.
 *
 * Anything left as "" will render a "Coming soon" / disabled state in the UI.
 */

export const links = {
  // Slack — the channel or workspace to send people to for help
  slackHelpChannel: "https://mckinsey.enterprise.slack.com/archives/C0AMKHJR64T",
  slackWinsChannel: "",
  slackWorkspace: "", // e.g. "https://mckinsey.enterprise.slack.com"

  // Cursor
  cursorDownload: "https://cursor.com/download",
  cursorDocs: "https://docs.cursor.com",

  // Python
  pythonDownload: "https://www.python.org/downloads/",

  // McKinsey internal — replace with real URLs
  mckPptStandardsFolder: "", // SharePoint / OneDrive link to the official McK PPT template folder
  mckExcelStandardsFolder: "", // SharePoint / OneDrive link to standard Excel models / formatting
  mckIntelligenceSkills: "", // McK Intelligence "Skills" website URL
  mckBrandGuidelines: "", // McK brand / visual identity guidelines

  // Curated learning videos (YouTube, Loom, internal, etc.)
  cursorIntroVideo: "",
  pythonForBeginnersVideo: "",
  pptxLibraryTutorialVideo: "",
  excelOpenpyxlTutorialVideo: "",
};

export type LinkKey = keyof typeof links;

export const isConfigured = (key: LinkKey) => links[key].length > 0;
