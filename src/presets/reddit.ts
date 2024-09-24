import type { ContentSecurityPolicyConfig } from '../types';

/**
 * CSP directives for reddit embed
 */
export const CSP_PRESET_REDDIT_EMBED = {
  'frame-src': `https://embed.reddit.com`,
  'script-src': `https://embed.reddit.com`,
} satisfies ContentSecurityPolicyConfig;
