/**
 * Content Security Policy record type.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy
 */
export interface ContentSecurityPolicyRecord {
  /* Fetch directives */
  'child-src': string;
  'connect-src': string;
  'default-src': string;
  'fenced-frame-src': string;
  'font-src': string;
  'frame-src': string;
  'img-src': string;
  'manifest-src': string;
  'media-src': string;
  'object-src': string;
  'script-src': string;
  'script-src-elem': string;
  'script-src-attr': string;
  'style-src': string;
  'style-src-elem': string;
  'style-src-attr': string;
  'worker-src': string;

  /* Document directives */
  'base-uri': string;
  'sandbox': string;

  /* Navigation directives */
  'form-action': string;
  'frame-ancestors': string;

  /* Reporting directives */
  'report-to': string;

  /* Other directives */
  'require-trusted-types-for ': string;
  'trusted-types': string;
  'upgrade-insecure-requests': '';

  /* Deprecated directives */
  /** @deprecated */
  'block-all-mixed-content': '';
  /** @deprecated */
  'prefetch-src': string;
  /** @deprecated */
  'report-uri': string;
}

/**
 * Content Security Policy directive type.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy
 */
export type ContentSecurityPolicyDirective = keyof ContentSecurityPolicyRecord;

/**
 * Content Security Policy config type.
 */
export type ContentSecurityPolicyConfig = Partial<ContentSecurityPolicyRecord>;
