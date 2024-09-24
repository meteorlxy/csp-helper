import { mergeCspConfigsToSet } from './merge-csp-configs-to-set';
import type { ContentSecurityPolicyConfig } from './types';

/**
 * Helper to merge multiple CSP configs.
 */
export const mergeCspConfigs = (
  configs: ContentSecurityPolicyConfig[],
): ContentSecurityPolicyConfig => {
  const mergedConfigsSet = mergeCspConfigsToSet(configs);

  return Object.fromEntries(
    Object.entries(mergedConfigsSet).map(([key, value]) => [
      key,
      [...value].join(' '),
    ]),
  );
};
