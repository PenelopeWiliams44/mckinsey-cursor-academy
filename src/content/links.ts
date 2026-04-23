/**
 * Central place for all external links shown in the dashboard.
 * Edit this file as you collect the real URLs from your team.
 *
 * Anything left as "" will render a "Coming soon" / disabled state in the UI.
 */

export const links = {
  // Slack
  slackHelpChannel: "https://mckinsey.enterprise.slack.com/archives/C0AMKHJR64T",

  // Cursor
  cursorDownload:
    "https://mckinsey.service-now.com/ghd?id=mck_app_cat_item&sys_id=1a9b2b55c38c9650cd5777f4e40131c9&category=Category&status=Status&os=Windows&pricing=Pricing&brand=Brand&filter%20apps=cursor",
  cursorIntroVideo: "https://rewiring-the-firm.apps.mckinsey.com/videos/cursor-intro.mp4",

  // McKinsey internal
  mckIntelligenceSkills: "https://skill-explorer.npn.apps.mckinsey.com/",
  mckSlideWorkspaceZip:
    "https://mckinsey-my.sharepoint.com/:u:/p/kustaa_yli-ayho/IQBQCt-aHxpwR6EUZHjJHD5yAc3IpGoyIClk2qVNes2hH64?e=KauFmt",
  mckPptStandardsFolder: "",
  mckExcelStandardsFolder: "",
  mckBrandGuidelines: "",
};

export type LinkKey = keyof typeof links;

export const isConfigured = (key: LinkKey) =>
  (links[key] ?? "").length > 0;
