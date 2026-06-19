export type SocialLink = {
  /** Icon image URL, CDN URL, or data URI shown beside the title. */
  icon: string;
  title: string;
  /** Optional handle/username or subtitle displayed under the title. */
  description?: string;
  /** External profile URL opened when the item is clicked. */
  href?: string;
  padding?: boolean;
};
