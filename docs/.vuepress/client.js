import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
    enhance({ router }) {
        router.addRoute({ path: '/motion-controls.html', redirect: '/controller-configuration' })
        router.addRoute({ path: '/dumping-games.html', redirect: '/using-dumpling' })
    },
})