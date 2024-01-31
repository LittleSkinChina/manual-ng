import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'LittleSkin 用户使用手册',
  description: 'LittleSkin 用户使用手册',

  lastUpdated: true,
  sitemap: {
    hostname: 'https://manual.littlesk.in'
  },

  lang: 'zh',
  appearance: true,

  markdown: {
    theme: { light: 'catppuccin-latte', dark: 'one-dark-pro' }
  },

  cleanUrls: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '返回 LittleSkin', link: 'https://littlesk.in/' },
      { text: '社区支持机器人', link: 'https://bot-manual.commspt.littlesk.in/' },
      { text: '捐助支持', link: 'https://afdian.net/a/tnqzh123' }
    ],

    outline: {
      'label': '在此页面上'
    },
    editLink: {
      pattern: 'https://github.com/LittleSkinChina/manual-ng/edit/main/docs/:path'
    },
    search: {
      provider: 'local',
      options: {
        // this is broken
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },

    sidebar: {
      '/': [
        {
          text: '用户使用手册',
          link: '/README',
          items: [
            {
              text: '政策条款',
              items: [
                {
                  text: '用户服务条款',
                  link: '/policies/tos'
                },
                {
                  text: '隐私声明',
                  link: '/policies/privacy'
                }
              ]
            },
            {
              text: '新手指引',
              items: [
                { text: '创建角色', link: '/newbee/player' },
                { text: '设定材质', link: '/newbee/textures' },
                { text: '配置 Mod', link: '/newbee/mod' }
              ]
            },
            {
              text: '高级功能',
              items: [
                { text: 'Yggdrasil', link: '/advanced/yggdrasil' },
                { text: 'OAuth 2', link: '/advanced/oauth2' },
                { text: 'Blessing Skin API', link: '/advanced/api' },
              ]
            },
            { text: '积分系统', link: '/score' },
            { text: '常见问题解答', link: '/faq' },
            { text: '报告问题的正确姿势', link: '/report' },
            { text: '邮件工单', link: '/email' },
            { text: '用户交流群', link: '/user-group' }
          ]
        },

      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
  vite: {
    ssr: {
      noExternal: [
        // If there are other packages that need to be processed by Vite, you can add them here.
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/vitepress-plugin-highlight-targeted-heading',
      ],
    },
  },
});
