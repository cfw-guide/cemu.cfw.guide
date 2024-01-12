const { locales, themeConfigLocales } = require("./i18n")
const { emiylTheme } = require('../../emiyl-theme-2')

module.exports = {
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
