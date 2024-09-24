import type { ContentSecurityPolicyConfig } from '../types';

/**
 * CSP directives for google analytics 4
 *
 * @see https://developers.google.com/tag-platform/security/guides/csp#google_analytics_4_google_analytics
 */
export const CSP_PRESET_GOOGLE_ANALYTICS_4 = {
  'connect-src': `https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com`,
  'img-src': `https://*.google-analytics.com https://*.googletagmanager.com`,
  'script-src': `https://*.googletagmanager.com`,
} satisfies ContentSecurityPolicyConfig;

/**
 * To be used in place of `https://*.google.<TLD>` in CSP directives
 *
 * @see https://www.google.com/supported_domains
 */
const GOOGLE_SUPPORTED_DOMAINS =
  '.google.com .google.ad .google.ae .google.com.af .google.com.ag .google.al .google.am .google.co.ao .google.com.ar .google.as .google.at .google.com.au .google.az .google.ba .google.com.bd .google.be .google.bf .google.bg .google.com.bh .google.bi .google.bj .google.com.bn .google.com.bo .google.com.br .google.bs .google.bt .google.co.bw .google.by .google.com.bz .google.ca .google.cd .google.cf .google.cg .google.ch .google.ci .google.co.ck .google.cl .google.cm .google.cn .google.com.co .google.co.cr .google.com.cu .google.cv .google.com.cy .google.cz .google.de .google.dj .google.dk .google.dm .google.com.do .google.dz .google.com.ec .google.ee .google.com.eg .google.es .google.com.et .google.fi .google.com.fj .google.fm .google.fr .google.ga .google.ge .google.gg .google.com.gh .google.com.gi .google.gl .google.gm .google.gr .google.com.gt .google.gy .google.com.hk .google.hn .google.hr .google.ht .google.hu .google.co.id .google.ie .google.co.il .google.im .google.co.in .google.iq .google.is .google.it .google.je .google.com.jm .google.jo .google.co.jp .google.co.ke .google.com.kh .google.ki .google.kg .google.co.kr .google.com.kw .google.kz .google.la .google.com.lb .google.li .google.lk .google.co.ls .google.lt .google.lu .google.lv .google.com.ly .google.co.ma .google.md .google.me .google.mg .google.mk .google.ml .google.com.mm .google.mn .google.com.mt .google.mu .google.mv .google.mw .google.com.mx .google.com.my .google.co.mz .google.com.na .google.com.ng .google.com.ni .google.ne .google.nl .google.no .google.com.np .google.nr .google.nu .google.co.nz .google.com.om .google.com.pa .google.com.pe .google.com.pg .google.com.ph .google.com.pk .google.pl .google.pn .google.com.pr .google.ps .google.pt .google.com.py .google.com.qa .google.ro .google.ru .google.rw .google.com.sa .google.com.sb .google.sc .google.se .google.com.sg .google.sh .google.si .google.sk .google.com.sl .google.sn .google.so .google.sm .google.sr .google.st .google.com.sv .google.td .google.tg .google.co.th .google.com.tj .google.tl .google.tm .google.tn .google.to .google.com.tr .google.tt .google.com.tw .google.co.tz .google.com.ua .google.co.ug .google.co.uk .google.com.uy .google.co.uz .google.com.vc .google.co.ve .google.co.vi .google.com.vn .google.vu .google.ws .google.rs .google.co.za .google.co.zm .google.co.zw .google.cat';

/**
 * The hosts string to be used in CSP directives for google analytics 4
 */
const GOOGLE_SUPPORTED_DOMAINS_DIRECTIVE_HOSTS_STRING =
  GOOGLE_SUPPORTED_DOMAINS.split(' ')
    .map((item) => `https://*${item}`)
    .join(' ');

/**
 * CSP directives for google analytics 4 deployments using Google Signals
 *
 * @see https://developers.google.com/tag-platform/security/guides/csp#google_analytics_4_google_analytics
 */
export const CSP_PRESET_GOOGLE_ANALYTICS_4_GOOGLE_SIGNALS = {
  'connect-src': `https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.g.doubleclick.net https://*.google.com ${GOOGLE_SUPPORTED_DOMAINS_DIRECTIVE_HOSTS_STRING}`,
  'frame-src': `https://td.doubleclick.net`,
  'img-src': `https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.g.doubleclick.net https://*.google.com ${GOOGLE_SUPPORTED_DOMAINS_DIRECTIVE_HOSTS_STRING}`,
  'script-src': `https://*.googletagmanager.com`,
} satisfies ContentSecurityPolicyConfig;
