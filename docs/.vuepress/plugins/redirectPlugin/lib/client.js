import { defineClientConfig } from '@vuepress/client'
import pages from '@temp/pages'

var redirectArr = []
for (var i in pages) {
    var redObj = {
        path: [],
        redirect: ''
    }
    
    const p = pages[i]
    if (!p.hasOwnProperty('redirect_from')) continue
    if (p.redirect_from == null) continue
    redObj.redirect = p.path
    
    if (Array.isArray(p.redirect_from)) {
    for (var j in p.redirect_from) {
        if (p.redirect_from[j].length < 1) continue;
        redObj.path.push(p.redirect_from[j])
    }
    } else {
    if (p.redirect_from.length < 1) continue
    redObj.path.push(p.redirect_from)
    }
    
    if (!redObj.path.length) continue
    
    redirectArr.push(redObj)
}

export default defineClientConfig({
    enhance({ router }) {
        for (const redObj of redirectArr) for (const path of redObj.path) {
            router.addRoute({ path: path, redirect: redObj.redirect })
        }
    }
})