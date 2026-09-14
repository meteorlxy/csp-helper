import type { ContentSecurityPolicyConfig } from '../types';

/**
 * CSP directives for Microsoft Advertising Universal Event Tracking (UET)
 *
 * @see https://learn.microsoft.com/en-us/advertising/msa-help/hlp_ba_conc_uetv2csp
 */
export const CSP_PRESET_MICROSOFT_ADVERTISING_UET = {
  'connect-src': `https://bat.bing.com https://bat.bing.net`,
  'img-src': `https://bat.bing.com https://bat.bing.net`,
  'script-src': `https://bat.bing.com https://bat.bing.net`,
} satisfies ContentSecurityPolicyConfig;
