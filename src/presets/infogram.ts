import type { ContentSecurityPolicyConfig } from '../types';

/**
 * CSP directives for infogram embed
 *
 * @see https://support.infogram.com/hc/en-us/sections/360000124013-Embed
 */
export const CSP_PRESET_INFOGRAM_EMBED = {
  'frame-src': `https://e.infogram.com`,
  'script-src': `https://e.infogram.com 'unsafe-inline'`,
} satisfies ContentSecurityPolicyConfig;
