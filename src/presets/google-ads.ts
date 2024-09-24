import type { ContentSecurityPolicyConfig } from '../types';

/**
 * CSP directives for google ads conversions
 *
 * @see https://developers.google.com/tag-platform/security/guides/csp#google_ads_conversions
 */
export const CSP_PRESET_GOOGLE_ADS_CONVERSIONS = {
  'frame-src': `https://www.googletagmanager.com https://td.doubleclick.net`,
  'img-src': `https://googleads.g.doubleclick.net https://www.google.com https://google.com`,
  'script-src': `https://www.googleadservices.com https://www.google.com https://www.googletagmanager.com`,
} satisfies ContentSecurityPolicyConfig;

/**
 * CSP directives for google ads remarketing
 *
 * @see https://developers.google.com/tag-platform/security/guides/csp#google_ads_remarketing
 */
export const CSP_PRESET_GOOGLE_ADS_REMARKETING = {
  'frame-src': `https://bid.g.doubleclick.net https://td.doubleclick.net`,
  'img-src': `https://www.google.com https://google.com`,
  'script-src': `https://www.googleadservices.com https://googleads.g.doubleclick.net https://www.google.com`,
} satisfies ContentSecurityPolicyConfig;

/**
 * CSP directives for google ads user data beacon
 *
 * @see https://developers.google.com/tag-platform/security/guides/csp#google_ads_user_data_beacon
 */
export const CSP_PRESET_GOOGLE_ADS_USER_DATA_BEACON = {
  'frame-src': `https://www.googletagmanager.com`,
  'script-src': `https://www.googletagmanager.com`,
} satisfies ContentSecurityPolicyConfig;
