import { CSP_HEADER_NAME } from './constants';
import { mergeCspConfigsToSet } from './merge-csp-configs-to-set';
import type { ContentSecurityPolicyConfig } from './types';

export interface CreateCspHeaderOptions {
  /**
   * Include header name in the output or not.
   *
   * @default false
   */
  includeHeaderName?: boolean;

  /**
   * Presets to include in the CSP header.
   *
   * @default []
   */
  presets?: ContentSecurityPolicyConfig[];
}

/**
 * Helper to create a Content-Security-Policy header.
 */
export const createCspHeader = (
  config: ContentSecurityPolicyConfig,
  { includeHeaderName = false, presets = [] }: CreateCspHeaderOptions = {},
): string => {
  const mergedConfigsSet = mergeCspConfigsToSet([config, ...presets]);
  const headerValue = Object.entries(mergedConfigsSet)
    .map(([key, value]) => {
      const valueString = [...value].join(' ');
      return valueString ? `${key} ${valueString}` : key;
    })
    .join('; ');
  return includeHeaderName ? `${CSP_HEADER_NAME}: ${headerValue}` : headerValue;
};
