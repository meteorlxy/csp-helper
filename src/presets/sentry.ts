import type { ContentSecurityPolicyConfig } from '../types';

/**
 * CSP preset for sentry session replay
 *
 * @see https://docs.sentry.io/platforms/javascript/session-replay/#content-security-policy-csp
 */
export const CSP_PRESET_SENTRY_SESSION_REPLAY = {
  'worker-src': `blob:`,
} satisfies ContentSecurityPolicyConfig;
