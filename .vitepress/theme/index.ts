import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import Tabs from './components/Tabs.vue'
import Tab from './components/Tab.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('Tabs', Tabs)
    app.component('Tab', Tab)
  }
}
