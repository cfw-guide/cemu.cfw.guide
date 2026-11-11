import { defaultTheme } from '@vuepress/theme-default'
import { getDirname, path } from '@vuepress/utils'
import { palettePlugin } from '@vuepress/plugin-palette'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import container from 'markdown-it-container'

const __dirname = getDirname(import.meta.url)

export const emiylTheme = (options) => {
  const parentTheme = defaultTheme({
    ...options,
    themePlugins: {
      copyCode: false,
      linksCheck: false,
      tab: false,
      ...options.themePlugins,
    },
  })
  parentTheme.plugins = parentTheme.plugins.filter(
    (plugin) => plugin.name !== '@vuepress/plugin-palette'
  )

  return {
    name: 'emiyl-theme',
    extends: parentTheme,
    clientConfigFile: path.resolve(__dirname, './client.js'),
    userStyle: path.resolve(__dirname, './styles/index.scss'),

    alias: {
      '@theme/AutoLink.vue': path.resolve(__dirname, './components/AutoLink.vue'),
      '@theme/VPAutoLink.vue': path.resolve(__dirname, './components/AutoLink.vue'),
      '@theme/VPHome.vue': path.resolve(__dirname, './components/Home.vue'),
      '@theme/VPHomeHero.vue': path.resolve(__dirname, './components/HomeHero.vue'),
      '@theme/VPNavbarDropdown.vue': path.resolve(__dirname, './components/NavbarDropdown.vue'),
      '@theme/VPPageMeta.vue': path.resolve(__dirname, './components/PageMeta.vue'),
      '@theme/HomeContent.vue': path.resolve(__dirname, './components/HomeContent.vue'),
      '@theme/HomeHero.vue': path.resolve(__dirname, './components/HomeHero.vue'),
      '@theme/NavbarDropdown.vue': path.resolve(__dirname, './components/NavbarDropdown.vue'),
      '@theme/PageMeta.vue': path.resolve(__dirname, './components/PageMeta.vue'),
    },
    
    plugins: [
      palettePlugin({
        preset: 'sass',
        userPaletteFile: path.resolve(__dirname, './styles/palette.scss')
      }),
      registerComponentsPlugin({ componentsDir: path.resolve(__dirname, './tabs') })
    ],

    async onPrepared(app) {
        await app.writeTemp('waldoUnits.json', JSON.stringify(options.hasOwnProperty('adUnits') ? options.adUnits : []))
    },

    extendsMarkdown: (md) => {
        md.core.ruler.after('inline', 'markdown-arrows', (state) => {
            for (const token of state.tokens) {
                if (token.type !== 'inline' || !token.children) continue

                const children = []
                for (const child of token.children) {
                    if (child.type !== 'text' || !/(->|<-)/.test(child.content)) {
                        children.push(child)
                        continue
                    }

                    const parts = child.content.split(/(->|<-)/g)
                    for (const part of parts) {
                        if (!part) continue

                        if (part === '->' || part === '<-') {
                            const arrow = new state.Token('html_inline', '', 0)
                            arrow.content = `<span class="markdown-arrow" aria-hidden="true">${part === '->' ? '→' : '←'}</span>`
                            children.push(arrow)
                        } else {
                            const text = new state.Token('text', '', 0)
                            text.content = part
                            text.level = child.level
                            children.push(text)
                        }
                    }
                }

                token.children = children
            }
        })

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
}