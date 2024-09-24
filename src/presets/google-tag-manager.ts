import type { ContentSecurityPolicyConfig } from '../types';

/**
 * CSP directives for google tag manager with nonce.
 *
 * Notice that `script-src 'nonce-<value>'` is not included, which should be added yourself.
 *
 * @see https://developers.google.com/tag-platform/security/guides/csp#enable_the_container_tag_to_use_csp
 */
export const CSP_PRESET_GOOGLE_TAG_MANAGER_NONCE = {
  'connect-src': `https://www.googletagmanager.com`,
  'img-src': `https://www.googletagmanager.com`,
} satisfies ContentSecurityPolicyConfig;

/**
 * CSP directives for google tag manager with 'unsafe-inline'
 *
 * @see https://developers.google.com/tag-platform/security/guides/csp#enable_the_container_tag_to_use_csp
 */
export const CSP_PRESET_GOOGLE_TAG_MANAGER_UNSAFE_INLINE = {
  'connect-src': `https://www.googletagmanager.com`,
  'img-src': `https://www.googletagmanager.com`,
  'script-src': `'unsafe-inline' https://www.googletagmanager.com`,
} satisfies ContentSecurityPolicyConfig;

/**
 * CSP directives for google tag manager with custom javascript variables
 *
 * @see https://developers.google.com/tag-platform/security/guides/csp#custom_javascript_variables
 */
export const CSP_PRESET_GOOGLE_TAG_MANAGER_CUSTOM_JAVASCRIPT_VARIABLES = {
  'script-src': `'unsafe-eval'`,
} satisfies ContentSecurityPolicyConfig;

/**
 * CSP directives for google tag manager preview mode
 *
 * @see https://developers.google.com/tag-platform/security/guides/csp#preview_mode
 */
export const CSP_PRESET_GOOGLE_TAG_MANAGER_PREVIEW_MODE = {
  'font-src': `https://fonts.gstatic.com data:`,
  'img-src': `https://googletagmanager.com https://ssl.gstatic.com https://www.gstatic.com`,
  'script-src': `https://googletagmanager.com https://tagmanager.google.com`,
  'style-src': `https://googletagmanager.com https://tagmanager.google.com https://fonts.googleapis.com`,
} satisfies ContentSecurityPolicyConfig;
