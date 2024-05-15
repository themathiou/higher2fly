export const THEME_CONFIG: App.Locals['config'] = {
  /** blog title */
  title: 'Higher2Fly',
  /** your name */
  author: 'Theodore Mathioudakis',
  /** website description */
  desc: 'Trying to understand...',
  /** your deployed domain */
  website: 'https://www.higher2fly.com/',
  /** your locale */
  locale: 'en-us',
  /** theme style */
  themeStyle: 'light',
  /** your socials */
  socials: [
    {
      name: 'github',
      href: 'https://github.com/themathiou'
    },
    {
      name: 'twitter',
      href: 'https://www.x.com/themathiou'
    }
  ],
  /** your header info */
  header: {
    twitter: '@moeyua13'
  },
  /** your navigation links */
  navs: [
    {
      name: 'Posts',
      href: '/posts/page/1'
    },
    {
      name: 'Archive',
      href: '/archive'
    },
    {
      name: 'Categories',
      href: '/categories'
    },
    {
      name: 'About',
      href: '/about'
    }
  ],
  /** your category name mapping, which the `path` will be shown in the url */
  category_map: [{ name: '胡适', path: 'hu-shi' }]
  /** your comment provider */
  // comments: {
  // disqus: {
  //   shortname: 'typography-astro'
  // }
  // giscus: {
  //   repo: 'moeyua/astro-theme-typography',
  //   repoId: 'R_kgDOKy9HOQ',
  //   category: 'General',
  //   categoryId: 'DIC_kwDOKy9HOc4CegmW',
  //   mapping: 'title',
  //   strict: '0',
  //   reactionsEnabled: '1',
  //   emitMetadata: '1',
  //   inputPosition: 'top',
  //   theme: 'light',
  //   lang: 'zh-CN',
  //   loading: 'lazy',
  // },
  // twikoo: {
  //   envId: "https://twikoo-tau-flame.vercel.app",
  // }
  // }
};
