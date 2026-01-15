import type { ContentSecurityPolicyConfig } from '../types';

/**
 * CSP directives for tiktok embed
 */
export const CSP_PRESET_TIKTOK_EMBED = {
  'frame-src': `https://www.tiktok.com`,
  'script-src': `https://www.tiktok.com`,
} satisfies ContentSecurityPolicyConfig;

/**
 * CSP directives for tiktok pixel
 *
 * @see https://business-api.tiktok.com/portal/docs?id=1739585704427522
 */
export const CSP_PRESET_TIKTOK_PIXEL = {
  'connect-src': `https://analytics.tiktok.com https://analytics-ipv6.tiktokw.us https://ads.tiktok.com`,
  'frame-src': `'self' bytedance: sslocal:`,
  'img-src': `https://analytics.tiktok.com https://analytics-ipv6.tiktokw.us https://ads.tiktok.com`,
  'script-src': `https://analytics.tiktok.com https://analytics-ipv6.tiktokw.us https://ads.tiktok.com`,
} satisfies ContentSecurityPolicyConfig;
