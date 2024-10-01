import type { ContentSecurityPolicyConfig } from '../types';

/**
 * CSP directives for vimeo embed
 *
 * @see https://github.com/vimeo/player.js?tab=readme-ov-file#readme
 */
export const CSP_PRESET_VIMEO_EMBED = {
  'connect-src': `https://vimeo.com`,
  'frame-src': `https://player.vimeo.com`,
  'img-src': `https://i.vimeocdn.com`,
  'script-src': `https://player.vimeo.com`,
} satisfies ContentSecurityPolicyConfig;
