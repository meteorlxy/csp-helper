import type { ContentSecurityPolicyConfig } from '../types';

/**
 * CSP directives for x embed
 */
export const CSP_PRESET_X_EMBED = {
  'frame-src': `https://platform.twitter.com`,
  'script-src': `https://platform.twitter.com`,
} satisfies ContentSecurityPolicyConfig;
