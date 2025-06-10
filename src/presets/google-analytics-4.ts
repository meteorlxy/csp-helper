import { GOOGLE_SUPPORTED_DOMAINS } from '../constants';
import type { ContentSecurityPolicyConfig } from '../types';

/**
 * CSP directives for Google Analytics 4 (Google Analytics)
 *
 * @see https://developers.google.com/tag-platform/security/guides/csp#google_analytics_4_google_analytics
 */
export const CSP_PRESET_GOOGLE_ANALYTICS_4 = {
  'connect-src': `https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com`,
  'img-src': `https://*.google-analytics.com https://*.googletagmanager.com`,
  'script-src': `https://*.googletagmanager.com`,
} satisfies ContentSecurityPolicyConfig;

/**
 * CSP directives for Google Analytics 4 (Google Analytics) deployments using Google Signals
 *
 * This preset only includes the basic directives.
 *
 * You could add Google top-level domains (TLDs) to `connect-src` and `img-src` as needed.
 *
 * @see https://developers.google.com/tag-platform/security/guides/csp#google_analytics_4_google_analytics
 */
export const CSP_PRESET_GOOGLE_ANALYTICS_4_GOOGLE_SIGNALS = {
  'connect-src': `https://*.google-analytics.com https://*.googletagmanager.com https://*.g.doubleclick.net https://*.google.com https://pagead2.googlesyndication.com`,
  'frame-src': `https://td.doubleclick.net https://www.googletagmanager.com`,
  'img-src': `https://*.google-analytics.com https://*.googletagmanager.com https://*.g.doubleclick.net https://*.google.com`,
  'script-src': `https://*.googletagmanager.com`,
} satisfies ContentSecurityPolicyConfig;

/**
 * The hosts string to be used in CSP directives for google analytics 4
 */
const GOOGLE_SUPPORTED_DOMAINS_DIRECTIVE_HOSTS_STRING =
  GOOGLE_SUPPORTED_DOMAINS.split(' ')
    .map((item) => `https://*${item}`)
    .join(' ');

/**
 * CSP directives for Google Analytics 4 (Google Analytics) deployments using Google Signals
 *
 * This preset includes the full list of Google top-level domains (TLDs) in `connect-src` and `img-src`.
 *
 * You may not need all of them if your site is not targeting all countries.
 *
 * The full list will make the CSP header too large, and you may need to update your server configs to allow large headers.
 *
 * @see https://developers.google.com/tag-platform/security/guides/csp#google_analytics_4_google_analytics
 */
export const CSP_PRESET_GOOGLE_ANALYTICS_4_GOOGLE_SIGNALS_FULL_TLD = {
  'connect-src': GOOGLE_SUPPORTED_DOMAINS_DIRECTIVE_HOSTS_STRING,
  'img-src': GOOGLE_SUPPORTED_DOMAINS_DIRECTIVE_HOSTS_STRING,
} satisfies ContentSecurityPolicyConfig;
