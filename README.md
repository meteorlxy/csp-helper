# csp-helper

[![github check](https://github.com/meteorlxy/csp-helper/workflows/check/badge.svg)](https://github.com/meteorlxy/csp-helper/actions?query=workflow%3Acheck)
[![npm](https://badgen.net/npm/v/csp-helper)](https://www.npmjs.com/package/csp-helper)
[![license](https://badgen.net/github/license/meteorlxy/csp-helper)](https://github.com/meteorlxy/csp-helper/blob/main/LICENSE)

Helpers for creating Content Security Policy (CSP) headers.

- Zero dependencies
- Build with TypeScript
- Merging multiple CSP configurations
- Providing preset CSP configurations for:
  - Datadog
  - Google Ads
  - Google Analytics 4
  - Google Tag Manager
  - Hotjar
  - Reddit
  - X
  - Youtube
  - ... and more

## Installation

```bash
npm install csp-helper
```

## Usage

### `createCspHeader`

Create a CSP header string from a CSP configuration object.

```ts
import {
  CSP_PRESET_DATADOG_INTAKE_URLS,
  CSP_PRESET_DATADOG_WEB_WORKER,
  CSP_PRESET_GOOGLE_ANALYTICS_4,
  CSP_PRESET_GOOGLE_TAG_MANAGER_UNSAFE_INLINE,
  CSP_PRESET_HOTJAR,
  createCspHeader,
} from 'csp-helper';

const cspHeader = createCspHeader(
  {
    'default-src': `'self'`,
    'script-src': `'self' https://example.com`,
    'style-src': `'self' https://example.com`,
  },
  {
    includeHeaderName: true,
    presets: [
      CSP_PRESET_DATADOG_INTAKE_URLS,
      CSP_PRESET_DATADOG_WEB_WORKER,
      CSP_PRESET_GOOGLE_ANALYTICS_4,
      CSP_PRESET_GOOGLE_TAG_MANAGER_UNSAFE_INLINE,
      CSP_PRESET_HOTJAR,
    ],
  },
);

console.log(cspHeader);
```

### `mergeCspConfigs`

Merge multiple CSP configurations into one.

- Same values will be automatically deduplicated.
- Presets could also be used for merging.

```ts
import {
  CSP_PRESET_GOOGLE_ANALYTICS_4,
  CSP_PRESET_GOOGLE_TAG_MANAGER_UNSAFE_INLINE,
  mergeCspConfigs,
} from 'csp-helper';

const cspConfig = mergeCspConfigs([
  {
    'default-src': `'self'`,
    'script-src': `'self' https://example.com`,
    'style-src': `'self' https://example.com`,
  },
  {
    'script-src': `'self' https://example.com https://example2.com`,
    'style-src': `'self' https://example.com https://example2.com`,
  },
  CSP_PRESET_GOOGLE_ANALYTICS_4,
  CSP_PRESET_GOOGLE_TAG_MANAGER_UNSAFE_INLINE,
]);

console.log(cspConfig);
```

## License

[MIT](https://github.com/meteorlxy/csp-helper/blob/main/LICENSE) &copy; [meteorlxy](https://github.com/meteorlxy) & [Contributors](https://github.com/meteorlxy/csp-helper/graphs/contributors)
