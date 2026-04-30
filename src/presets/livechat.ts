import type { ContentSecurityPolicyConfig } from '../types';

/**
 * CSP directives for LiveChat
 *
 * @see https://www.livechat.com/help/use-livechat-with-content-security-policy/
 */
export const CSP_PRESET_LIVECHAT = {
  'child-src': `https://*.livechatinc.com`,
  'connect-src': `https://*.livechatinc.com https://*.livechat-static.com https://*.livechat-files.com https://*.text.com`,
  'img-src': `https://*.livechatinc.com https://*.livechat-static.com https://*.livechat-files.com https://*.files-text.com`,
  'media-src': `https://*.livechatinc.com https://*.livechat-static.com`,
  'object-src': `https://*.livechatinc.com`,
  'script-src': `'unsafe-inline' 'unsafe-eval' https://*.livechatinc.com https://*.livechat-static.com`,
  'style-src': `'unsafe-inline' https://*.livechatinc.com`,
} satisfies ContentSecurityPolicyConfig;
