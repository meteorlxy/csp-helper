import type { ContentSecurityPolicyConfig } from '../types';

/**
 * CSP directives for x embed
 */
export const CSP_PRESET_X_EMBED = {
  'frame-src': `https://www.tiktok.com`,
  'script-src': `https://www.tiktok.com`,
} satisfies ContentSecurityPolicyConfig;
