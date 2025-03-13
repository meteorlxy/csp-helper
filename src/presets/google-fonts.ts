import type { ContentSecurityPolicyConfig } from '../types';

/**
 * CSP directives for google fonts
 *
 * @see https://content-security-policy.com/examples/google-fonts/
 */
export const CSP_PRESET_GOOGLE_FONTS = {
  'font-src': `https://fonts.gstatic.com`,
  'style-src': `https://fonts.googleapis.com`,
} satisfies ContentSecurityPolicyConfig;
