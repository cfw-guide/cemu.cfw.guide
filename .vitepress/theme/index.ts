import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import Image from './components/Image.vue'
import Tabs from './components/Tabs.vue'
import Tab from './components/Tab.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('Image', Image)
    app.component('GuideImage', Image)
    app.component('Tabs', Tabs)
    app.component('Tab', Tab)
  }
}
