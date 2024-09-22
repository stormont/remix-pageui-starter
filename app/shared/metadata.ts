export const domain = 'pageui.shipixen.com';

export interface SiteMetadata {
  title: string;
  description: string;
  domain: string;
  logoTitle: string;
  socialBanner: string;
  supportEmail: string;

  email: string;
  twitter: string;
  instagram: string;
  tiktok: string;
  github: string;
  linkedin: string;
  youtube: string;
  facebook: string;
  threads: string;
  mastodon: string;

  language: string;
  theme: 'system' | 'dark' | 'light';
  locale: string;
}

export const metadata = {
  title: 'Landing page components & templates that you can copy & paste',
  description:
    'Page UI is a set of landing page components & templates that you can copy & paste into you React/Next.js codebase. Built on top of Shadcn UI and TailwindCSS.',
  domain: 'pageui.shipixen.com',
  logoTitle: 'Page UI',
  businessName: 'Page UI',
  siteUrl: 'https://pageui.shipixen.com',
  siteRepo: '',
  socialBanner: '/static/images/ogImg.jpg',
  supportEmail: 'support@shipixen.com',
  email: '',
  twitter: 'https://twitter.com/shipixen',
  instagram: '',
  tiktok: '',
  github: 'https://github.com/danmindru/page-ui',
  linkedin: '',
  youtube: '',
  facebook: '',
  threads: '',
  mastodon: '',
  author: 'Page UI',
  language: 'en-us',
  theme: 'system',
  locale: 'en-US',
};
