import type {
  ContentSecurityPolicyConfig,
  ContentSecurityPolicyDirective,
} from './types';

type ContentSecurityPolicyConfigSet = Partial<
  Record<ContentSecurityPolicyDirective, Set<string>>
>;

/**
 * Helper to merge multiple CSP configs to configs set.
 */
export const mergeCspConfigsToSet = (
  configs: ContentSecurityPolicyConfig[],
): ContentSecurityPolicyConfigSet => {
  const configsSet: ContentSecurityPolicyConfigSet = {};

  for (const config of configs) {
    Object.entries(config).forEach(([key, value]) => {
      const directive = key as ContentSecurityPolicyDirective;
      configsSet[directive] ??= new Set();
      value.split(' ').forEach((v) => configsSet[directive]?.add(v));
    });
  }

  return configsSet;
};
