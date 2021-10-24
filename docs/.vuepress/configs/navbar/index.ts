import type { NavbarConfig } from '@vuepress/theme-default'

export const en: NavbarConfig = [
  {
    text: 'Guides',
    children: [
      '/dumping-games',
      '/online-play',
      '/optimizing-cemu',
      {
        text: 'Motion Controls',
        link: '/controller-configuration',
      },
    ],
  },
  {
    text: 'Help',
    children: [
      '/faq',
      '/troubleshooting',
      {
        text: 'Discord',
        link: 'https://discord.gg/5psYsup',
      },
    ],
  },
  {
    text: 'Site Info',
    children: [
      '/donations',
      '/credits',
      {
        text: 'Source',
        link: 'https://github.com/cfw-guide/cemu.cfw.guide/',
      },
      '/site-navigation/',
    ],
  },
]