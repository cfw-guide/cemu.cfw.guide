import i18n from './i18n/index.js'
import { emiylTheme } from '../../emiyl-theme-2/index.js'
import { viteBundler } from '@vuepress/bundler-vite'

const { locales, themeConfigLocales } = i18n

export default {
  bundler: viteBundler({
    viteOptions: {
      ssr: {
        noExternal: ['@vuepress/helper'],
      },
    },
  }),
  locales: locales,
  
  theme: emiylTheme({
    repo: 'cfw-guide/cemu.cfw.guide',
    selectLanguageText: '<i class="fas fa-globe"></i>',
    locales: themeConfigLocales,
    adUnits: [
      "8408",
      "8442"
    ]
  }),
  
  head: [
    ['link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css' } ],
    ['script', {type: 'text/javascript', src: 'https://cdn.thisiswaldo.com/static/js/8406.js'}],
    ['script', {src: '/assets/js/analytics.js'}],
  ],

  shouldPrefetch: true,
}
