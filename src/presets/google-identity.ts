import type { ContentSecurityPolicyConfig } from '../types';

/**
 * CSP directives for google identity
 *
 * @see https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid#content_security_policy
 */
export const CSP_PRESET_GOOGLE_IDENTITY = {
  'connect-src': `https://accounts.google.com/gsi/`,
  'frame-src': `https://accounts.google.com/gsi/`,
  'script-src': `https://accounts.google.com/gsi/client`,
  'style-src': `https://accounts.google.com/gsi/style`,
} satisfies ContentSecurityPolicyConfig;
