import { defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: 'docs',
  title: 'Cemu Guide',
  description: 'A complete guide to installing Cemu and optimizing performance.',
  cleanUrls: true,
  ignoreDeadLinks: [
    /^\/assets\/.*$/,
  ],

  head: [
    ['script', { type: 'text/javascript', src: 'https://cdn.thisiswaldo.com/static/js/8406.js' }],
    ['script', { src: '/assets/js/analytics.js' }]
  ],

  themeConfig: {
    nav: [
      { text: 'Guides', link: '/installing-cemu' },
      { text: 'FAQ', link: '/faq' },
    ],
    sidebar: [
      {
        text: 'Cemu Guide',
        items: [
          { text: 'Installing Cemu', link: '/installing-cemu' },
          { text: 'Controller Configuration', link: '/controller-configuration' },
          { text: 'Using Dumpling', link: '/using-dumpling' },
          { text: 'Installing Games', link: '/installing-games' },
          { text: 'Online Play', link: '/online-play' },
          { text: 'Optimizing Cemu', link: '/optimizing-cemu' },
          { text: 'Optimizing Breath of the Wild', link: '/optimizing-botw' }
        ]
      },
      {
        text: 'Support',
        items: [
          { text: 'FAQ', link: '/faq' },
          { text: 'Troubleshooting', link: '/troubleshooting' }
        ]
      },
      {
        text: 'Site',
        items: [
          { text: 'Credits', link: '/credits' },
          { text: 'Donations', link: '/donations' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/cfw-guide/cemu.cfw.guide/' },
      { icon: 'discord', link: 'https://discord.gg/5psYsup' }
    ],
    editLink: {
      pattern: 'https://github.com/cfw-guide/cemu.cfw.guide/edit/master/docs/:path',
      text: 'Edit this page'
    },
    outline: 'deep',
    search: {
      provider: 'local'
    }
  },

  vite: {
    server: {
      host: '127.0.0.1'
    },
    ssr: {
      noExternal: ['vitepress']
    }
  }
})
