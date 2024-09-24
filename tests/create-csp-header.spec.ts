import { expect, it } from 'vitest';
import { createCspHeader } from '../src/create-csp-header';
import {
  CSP_PRESET_DATADOG_INTAKE_URLS,
  CSP_PRESET_DATADOG_WEB_WORKER,
  CSP_PRESET_HOTJAR,
} from '../src/presets';

it('should create csp header', () => {
  const cspHeader = createCspHeader({
    'base-uri': "'self'",
    'child-src': "'self'",
    'script-src': "'self' https://example.com",
  });
  expect(cspHeader).toEqual(
    "base-uri 'self'; child-src 'self'; script-src 'self' https://example.com",
  );
});

it('should create csp header with header name', () => {
  const cspHeader = createCspHeader(
    {
      'base-uri': "'self'",
      'child-src': "'self'",
      'script-src': "'self' https://example.com",
    },
    {
      includeHeaderName: true,
    },
  );
  expect(cspHeader).toEqual(
    "Content-Security-Policy: base-uri 'self'; child-src 'self'; script-src 'self' https://example.com",
  );
});

it('should create csp header with presets', () => {
  const cspHeader = createCspHeader(
    {
      'base-uri': "'self'",
      'child-src': "'self'",
      'script-src': "'self' https://example.com",
    },
    {
      presets: [
        CSP_PRESET_DATADOG_INTAKE_URLS,
        CSP_PRESET_DATADOG_WEB_WORKER,
        CSP_PRESET_HOTJAR,
      ],
    },
  );
  expect(cspHeader).toMatchSnapshot();
});

it('should create csp header with header name and presets', () => {
  const cspHeader = createCspHeader(
    {
      'base-uri': "'self'",
      'child-src': "'self'",
      'script-src': "'self' https://example.com",
    },
    {
      includeHeaderName: true,
      presets: [
        CSP_PRESET_DATADOG_INTAKE_URLS,
        CSP_PRESET_DATADOG_WEB_WORKER,
        CSP_PRESET_HOTJAR,
      ],
    },
  );
  expect(cspHeader).toMatchSnapshot();
});
