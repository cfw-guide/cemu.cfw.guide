const { localePath, locales, themeConfigLocales, searchLocales } = require("./i18n")
const container = require('markdown-it-container')
const { path, fs } = require('@vuepress/utils')
const { searchPlugin } = require('@vuepress/plugin-search')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { localTheme } = require('../../emiyl-theme')

module.exports = {
  locales: locales,
  
  theme: localTheme({
    repo: 'cfw-guide/cemu.cfw.guide',
    selectLanguageText: '<i class="fas fa-globe"></i>',
    locales: themeConfigLocales,
    adUnits: [
      "8408",
      "8442"
    ]
  }),

	plugins: [
    searchPlugin({locales: searchLocales}),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
	],
  
  head: [
    ['link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css' } ],
    ['script', {type: 'text/javascript', src: 'https://cdn.thisiswaldo.com/static/js/8406.js'}],
    ['script', {src: '/assets/js/analytics.js'}],
  ],

  shouldPrefetch: true,

  extendsMarkdown: (md) => {
    md.use(require('markdown-it-include'))

    md.use(container, "tabs", {
      render: (tokens, idx) => {
        const token = tokens[idx];
        if (token.nesting === 1) {
          return `<Tabs ${token.info}>\n`;
        } else {
          return `</Tabs>\n`;
        }
      }
    });
  
    md.use(container, 'tab', {
      render: (tokens, idx) => {
        const token = tokens[idx];
        if (token.nesting === 1) {
          return `<Tab ${token.info}>\n`;
        } else {
          return `</Tab>\n`;
        }
      }
    });
  },
}
