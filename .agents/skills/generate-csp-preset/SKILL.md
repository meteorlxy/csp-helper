---
name: generate-csp-preset
description: Add a third-party Content Security Policy preset to the csp-helper repository. Use when introducing a new provider or provider-specific integration under src/presets; do not use for changes limited to CSP header creation or config-merging behavior.
---

# Generate CSP Preset

Create a focused preset that follows the repository's current conventions and matches the provider's documented browser requests.

## Research the contract

- Inspect the current worktree, `src/presets`, and the closest provider or integration sibling before editing. Use the current files as the source of truth.
- Read the provider's authoritative implementation or CSP documentation. When the user supplies a documentation URL, inspect that page and use it as the preset's primary source.
- Map each documented browser resource to its required CSP directive, such as `script-src`, `connect-src`, `frame-src`, or `img-src`. Do not add a directive merely because another tag type from the same provider uses it.
- Keep optional modes or products out of the base preset unless they are part of the requested integration. Follow existing sibling patterns when an optional mode warrants its own preset.
- Do not add broad allowances such as `'unsafe-inline'`, wildcards, or extra hosts when a nonce, hash, or narrower host can remain the consumer's responsibility. Explain any important boundary in the preset's JSDoc.
- Keep preset JSDoc notes limited to CSP-specific requirements, exceptions, and scope boundaries. Do not include general integration details unless they directly explain a CSP directive or source.
- If a required CSP directive or source is absent from the provider's authoritative documentation, explicitly state that omission in the JSDoc and explain the verified browser request, redirect, or other CSP-specific behavior that requires it. Clearly distinguish provider-documented facts from runtime findings.

## Add the preset

- Follow the established naming convention:
  - use `src/presets/<provider-name>.ts` with a kebab-case provider name;
  - name the export `CSP_PRESET_<PROVIDER>` for a provider-wide preset;
  - append an uppercase snake-case feature suffix such as `_PIXEL`, `_EMBED`, or `_UNIVERSAL_PIXEL` when the preset covers a specific integration.
- Mirror the closest sibling's file shape: import `ContentSecurityPolicyConfig` as a type, keep directive keys alphabetized, use the repository's space-delimited host strings, and finish the object with `satisfies ContentSecurityPolicyConfig`.
- Add a JSDoc comment that describes the exact integration and includes its corresponding authoritative documentation URL:

```ts
/**
 * CSP directives for <provider and integration>
 *
 * @see <documentation URL>
 */
```

## Expose and document it

- Export the new module from `src/presets/index.ts` in alphabetical order. The root `src/index.ts` already re-exports the preset barrel; change it only if the live repository structure differs.
- Ensure the provider appears exactly once in the root `README.md` preset-provider list, in alphabetical order.
- Do not update release-generated or unrelated surfaces such as `CHANGELOG.md`, package keywords, or ignored build output unless the user requests them or the current repository convention requires them.

## Verify

- Review the complete diff, including the untracked preset file.
- Run `pnpm lint`, `pnpm check-types`, `pnpm test`, and `pnpm build` unless the user has disabled verification.
- A static preset does not require a new test solely to restate its object literal. Add a focused test when the change introduces behavior or when current sibling presets establish that requirement.
