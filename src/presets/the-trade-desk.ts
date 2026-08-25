import type { ContentSecurityPolicyConfig } from '../types';

/**
 * CSP directives for The Trade Desk universal pixel
 *
 * This preset excludes the additional CSP sources for optional UID support.
 *
 * For the base universal pixel, The Trade Desk's CSP guidance explicitly lists only
 * `connect-src https://insight.adsrvr.org` for the real-time conversion request. It does not list
 * the `script-src` or `frame-src` entries required by its documented implementation:
 *
 * - `script-src https://js.adsrvr.org` allows the external pixel loader.
 * - `frame-src https://insight.adsrvr.org` allows the universal pixel iframe.
 *
 * The Universal Pixel documentation does not mention `https://match.adsrvr.org`. A runtime
 * request to its documented `https://insight.adsrvr.org` iframe endpoint currently receives an
 * HTTP `302` redirect to `https://match.adsrvr.org`. CSP applies `frame-src` to the redirected
 * iframe request, so `https://match.adsrvr.org` must also be allowed; otherwise the browser blocks
 * the redirected frame.
 *
 * @see https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/data/doc/TrackingTagsUniversalPixel
 */
export const CSP_PRESET_THE_TRADE_DESK_UNIVERSAL_PIXEL = {
  'connect-src': `https://insight.adsrvr.org`,
  'frame-src': `https://insight.adsrvr.org https://match.adsrvr.org`,
  'script-src': `https://js.adsrvr.org`,
} satisfies ContentSecurityPolicyConfig;

/**
 * CSP additions for The Trade Desk universal pixel UID detection support
 *
 * Combine this preset with `CSP_PRESET_THE_TRADE_DESK_UNIVERSAL_PIXEL`.
 *
 * @see https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/data/doc/TrackingTagsUniversalPixelUidSupport
 */
export const CSP_PRESET_THE_TRADE_DESK_UNIVERSAL_PIXEL_UID_DETECTION = {
  'connect-src': `https://*.prod.uidapi.com https://prod.uidapi.com`,
  'script-src': `https://cdn.prod.uidapi.com`,
} satisfies ContentSecurityPolicyConfig;

/**
 * CSP additions for The Trade Desk universal pixel UID email macro support
 *
 * Combine this preset with `CSP_PRESET_THE_TRADE_DESK_UNIVERSAL_PIXEL`.
 *
 * The official CSP table lists `operator-integ.uidapi.com` for Email macro mode without a scheme
 * or directive. The UID2 JavaScript documentation identifies this host as the HTTPS API base URL
 * for its integration environment, so browser requests to it require
 * `connect-src https://operator-integ.uidapi.com`.
 *
 * @see https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/data/doc/TrackingTagsUniversalPixelUidSupport
 * @see https://unifiedid.com/docs/guides/integration-javascript-client-side
 * @see https://unifiedid.com/docs/getting-started/gs-environments
 */
export const CSP_PRESET_THE_TRADE_DESK_UNIVERSAL_PIXEL_UID_EMAIL_MACRO = {
  'connect-src': `https://operator-integ.uidapi.com`,
} satisfies ContentSecurityPolicyConfig;
