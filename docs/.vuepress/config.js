const { navbar, sidebar } = require('./configs')
const container = require('markdown-it-container');
const path = require('path')

const adArr = [
  { slot: '/22046652915/cemu-0', size: [[728, 90], [320, 50]], id: 'div-gpt-ad-1645090614268-0' },
  { slot: '/22046652915/cemu-1', size: [[728, 90], [320, 50]], id: 'div-gpt-ad-1645090778201-0' }
]

module.exports = {
  base: '/',
  
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Cemu Guide',
      description: 'A complete guide to installing CEMU and optimizing performance.',
    },
  },

	plugins: [
		[
			"@vuepress/plugin-search",
			{
				locales: {
					"/": {
						placeholder: "Search"
					},
				}
			}
		],
		[
			'@vuepress/register-components',
			{
				componentsDir: path.resolve(__dirname, './components')
			}
		],
    require('./plugins/redirectPlugin/lib/')
	],
  
  themeConfig: {
    repo: 'cfw-guide/cemu.cfw.guide',
    adArr: adArr,
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
    require('./plugins/createAdScript/lib')(adArr)
  ],

  theme: path.resolve(__dirname, './vuepress-theme'),
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
  
	templateDev: path.join(__dirname, 'templates', 'index.dev.html'),
	templateSSR: path.join(__dirname, 'templates', 'index.ssr.html'),
}
