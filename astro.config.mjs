// @ts-check
import { defineConfig } from 'astro/config';

// Old AngularJS URLs → new routes, so existing links and bookmarks keep working.
const legacyWork = {
  antidote: 'antidote',
  'annual-2019': 'annual-2019',
  conference: 'conference',
  sales: 'sales',
  innovation: 'innovation',
  hyundai: 'hyundai',
  'new-building': 'new-building',
  annual: 'annual-2016',
  'annual-2015': 'annual-2015',
  ymca: 'ymca',
  burr: 'burr',
  novar: 'novar',
  rrcd: 'rrcd',
  ucc: 'ucc',
  hearing: 'hearing',
};

export default defineConfig({
  site: 'https://www.larabobel.com',
  trailingSlash: 'ignore',
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  redirects: {
    ...Object.fromEntries(
      Object.entries(legacyWork).map(([from, to]) => [`/portfolio/${from}`, `/work/${to}`]),
    ),
    '/portfolio': '/work',
  },
});
