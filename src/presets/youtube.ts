import type { ContentSecurityPolicyConfig } from '../types';

/**
 * CSP directives for youtube embed
 */
export const CSP_PRESET_YOUTUBE_EMBED = {
  'frame-src': `https://www.youtube.com https://www.youtube-nocookie.com`,
} satisfies ContentSecurityPolicyConfig;
