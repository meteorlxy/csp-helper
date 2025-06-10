import { GOOGLE_SUPPORTED_DOMAINS } from '../constants';
import type { ContentSecurityPolicyConfig } from '../types';

/**
 * CSP directives for Google Ads Conversion, Remarketing, or Conversion Linker tag
 *
 * This preset only includes the basic directives.
 *
 * You could add Google top-level domains (TLDs) to `img-src` as needed.
 *
 * @see https://developers.google.com/tag-platform/security/guides/csp#google_ads
 */
export const CSP_PRESET_GOOGLE_ADS = {
  'connect-src': `https://pagead2.googlesyndication.com https://www.googleadservices.com https://www.google.com https://google.com`,
  'frame-src': `https://www.googletagmanager.com https://td.doubleclick.net`,
  'img-src': `https://www.googletagmanager.com https://googleads.g.doubleclick.net https://www.google.com https://pagead2.googlesyndication.com https://www.googleadservices.com https://google.com`,
  'script-src': `https://www.googleadservices.com https://www.google.com https://www.googletagmanager.com https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net`,
} satisfies ContentSecurityPolicyConfig;

/**
 * The hosts string to be used in CSP directives for google analytics 4
 */
const GOOGLE_SUPPORTED_DOMAINS_DIRECTIVE_HOSTS_STRING =
  GOOGLE_SUPPORTED_DOMAINS.split(' ')
    .map((item) => `https://www${item}`)
    .join(' ');

/**
 * CSP directives for Google Ads Conversion, Remarketing, or Conversion Linker tag
 *
 * This preset includes the full list of Google top-level domains (TLDs) in `img-src`.
 *
 * You may not need all of them if your site is not targeting all countries.
 *
 * The full list will make the CSP header too large, and you may need to update your server configs to allow large headers.
 *
 * @see https://developers.google.com/tag-platform/security/guides/csp#google_ads
 */
export const CSP_PRESET_GOOGLE_ADS_FULL_TLD = {
  'img-src': GOOGLE_SUPPORTED_DOMAINS_DIRECTIVE_HOSTS_STRING,
} satisfies ContentSecurityPolicyConfig;

/**
 * CSP directives for google ads user data beacon
 *
 * @see https://developers.google.com/tag-platform/security/guides/csp#google_ads_user_data_beacon
 */
export const CSP_PRESET_GOOGLE_ADS_USER_DATA_BEACON = {
  'connect-src': `https://google.com https://www.google.com`,
  'frame-src': `https://www.googletagmanager.com`,
  'script-src': `https://www.googletagmanager.com`,
} satisfies ContentSecurityPolicyConfig;
