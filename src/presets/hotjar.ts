import type { ContentSecurityPolicyConfig } from '../types';

/**
 * CSP directives for hotjar
 *
 * @see https://help.hotjar.com/hc/en-us/articles/115011640307-Content-Security-Policies
 */
export const CSP_PRESET_HOTJAR = {
  'connect-src': `https://*.hotjar.com https://*.hotjar.io wss://*.hotjar.com`,
  'font-src': `https://script.hotjar.com`,
  'img-src': `https://static.hotjar.com https://script.hotjar.com https://survey-images.hotjar.com`,
  'script-src': `https://static.hotjar.com https://script.hotjar.com 'unsafe-inline'`,
  'style-src': `https://static.hotjar.com https://script.hotjar.com 'unsafe-inline'`,
} satisfies ContentSecurityPolicyConfig;
