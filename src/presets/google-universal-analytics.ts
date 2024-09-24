import type { ContentSecurityPolicyConfig } from '../types';

/**
 * CSP directives for google universal analytics
 *
 * @see https://developers.google.com/tag-platform/security/guides/csp#universal_analytics_google_analytics
 */
export const CSP_PRESET_GOOGLE_UNIVERSAL_ANALYTICS = {
  'connect-src': `https://www.google-analytics.com`,
  'img-src': `https://www.google-analytics.com`,
  'script-src': `https://www.google-analytics.com https://ssl.google-analytics.com`,
} satisfies ContentSecurityPolicyConfig;
