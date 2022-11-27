import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
    enhance({ router }) {
        [
            { path: '/motion-controls', redirect: '/controller-configuration.html' },
            { path: '/dumping-games', redirect: '/using-dumpling.html' }
        ].map(r => {
            router.addRoute(r)
            router.addRoute({ path: r.path + '.html', redirect: r.redirect })
        })
    },
})