import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
const { path } = require('@vuepress/utils')
import { navbar, sidebar } from './configs'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/',
  
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Cemu Guide',
      description: 'A complete guide to installing CEMU and optimizing performance.',
    },
  },
  
  themeConfig: {
    repo: 'cfw-guide/cemu.cfw.guide',
    adTagOne: 'waldo-tag-8533',
    adTagTwo: 'waldo-tag-8534',
    locales: {
      '/': {
        navbar: navbar.en,
        sidebar: sidebar.en,
        
        discordNoticeText: "If you need further help, ask on the official Cemu [Discord Server](https://discord.gg/5psYsup) for assistance.",
      },
    },
  },
  
  head: [
    ['script', {src: 'https://cdn.thisiswaldo.com/static/js/8530.js'}],
    ['script', {src: 'https://www.googletagmanager.com/gtag/js?id=UA-152619365-1'}],
    ['script', {src: '/assets/js/analytics.js'}],
  ],

  theme: path.resolve(__dirname, './vuepress-theme'),
  extendsMarkdown: (md) => {
      md.use(require('markdown-it-include'))
  },
  
	templateDev: path.join(__dirname, 'templates', 'index.dev.html'),
	templateSSR: path.join(__dirname, 'templates', 'index.ssr.html'),
})