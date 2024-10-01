import type { ContentSecurityPolicyConfig } from '../types';

/**
 * CSP directives for tiktok embed
 */
export const CSP_PRESET_TIKTOK_EMBED = {
  'frame-src': `https://www.tiktok.com`,
  'script-src': `https://www.tiktok.com`,
} satisfies ContentSecurityPolicyConfig;
