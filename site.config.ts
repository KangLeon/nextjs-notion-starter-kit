/*
 * @Author: JY jitengjiao@bytedance.com
 * @Date: 2024-03-07 16:07:50
 * @LastEditors: JY jitengjiao@bytedance.com
 * @LastEditTime: 2024-03-07 16:14:45
 * @FilePath: /nextjs-notion-starter-kit/site.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '2745dd7fe4e7485d8963c7d36477961d',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: 'b0d92122-00e1-4453-bc86-7fccfeca29e9',

  // basic site info (required)
  name: 'KangLeon',
  domain: 'kang.jiyoung.cn',
  author: 'JY',

  // open graph metadata (optional)å
  description: 'Do Something',

  // social usernames (optional)
  github: 'KangLeon',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  navigationStyle: 'default',
  // navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: '70a693b824d145aaa66f3880c97717a5'
    },
    {
      title: 'Contact',
      pageId: 'a4c4f55b7f08440e846a4a13ed24b1ee'
    }
  ]
})
