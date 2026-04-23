/**
 * Central place for all external links shown in the dashboard.
 * Edit this file as you collect the real URLs from your team.
 *
 * Anything left as "" will render a "Coming soon" / disabled state in the UI.
 */

export const links = {
  // Slack — the channel or workspace to send people to for help
  slackHelpChannel: "https://mckinsey.enterprise.slack.com/archives/C0AMKHJR64T",
  // Cursor
  cursorDownload: "https://mckinsey.service-now.com/ghd?id=mck_app_cat_item&sys_id=1a9b2b55c38c9650cd5777f4e40131c9&category=Category&status=Status&os=Windows&pricing=Pricing&brand=Brand&filter%20apps=cursor",
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
