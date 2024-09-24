import type { ContentSecurityPolicyConfig } from '../types';

/**
 * CSP preset for datadog intake URLs
 *
 * @see https://docs.datadoghq.com/integrations/content_security_policy_logs/?tab=firefox#intake-urls
 */
export const CSP_PRESET_DATADOG_INTAKE_URLS = {
  'connect-src': `https://*.datadoghq.com https://browser-intake-datadoghq.com`,
} satisfies ContentSecurityPolicyConfig;

/**
 * CSP preset for datadog web worker
 *
 * @see https://docs.datadoghq.com/integrations/content_security_policy_logs/?tab=firefox#web-worker
 */
export const CSP_PRESET_DATADOG_WEB_WORKER = {
  'worker-src': `blob:`,
} satisfies ContentSecurityPolicyConfig;

/**
 * CSP preset for datadog CDN bundle URL
 *
 * @see https://docs.datadoghq.com/integrations/content_security_policy_logs/?tab=firefox#cdn-bundle-url
 */
export const CSP_PRESET_DATADOG_CDN_BUNDLE_URL = {
  'script-src': `https://www.datadoghq-browser-agent.com`,
} satisfies ContentSecurityPolicyConfig;
