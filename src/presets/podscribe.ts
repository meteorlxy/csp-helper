import type { ContentSecurityPolicyConfig } from '../types';

/**
 * CSP directives for podscribe
 *
 * Notice that the official documentation is incorrect:
 *
 * - `img-src` should include `https://verifi.podscribe.com`
 * - `connect-src` should not include `https://pixel.tapad.com`, as it is not seen in their source code nor in the network requests.
 * - `connect-src` might include `https://const.uno` because it is used in the source code and will be request with `with_stid` parameter enabled.
 *   However, it is not necessary and always returns an empty result for now.
 *
 * @see https://podscribe.helpkit.so/attribution-and-incrementality/g4g8w3hppouCfkXZdcx6FV/advertiser-tracking-via-javascript-pixel/dpbUfAVkZgu9ehyP1uztZv
 */
export const CSP_PRESET_PODSCRIBE = {
  'connect-src': `https://verifi.podscribe.com https://ipv4.podscribe.com`,
  'img-src': `https://verifi.podscribe.com`,
  'script-src': `https://d34r8q7sht0t9k.cloudfront.net`,
} satisfies ContentSecurityPolicyConfig;
