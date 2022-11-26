const { path } = require('@vuepress/utils')

module.exports = {
    onInitialized: async (app) => {
        const pages = app.pages
        var retArr = []
    
        for (const i in pages) {
            const page = pages[i]
            var pageObj = {}
            pageObj.path = page.path

            if (page.hasOwnProperty('frontmatter') && page.frontmatter.hasOwnProperty('redirect_from'))
                pageObj.redirect_from = page.frontmatter.redirect_from
            else
                continue

            retArr.push(pageObj)
        }
        await app.writeTemp('pages.js', `export default ${JSON.stringify(retArr)}`)
    },
    clientConfigFile: path.resolve(__dirname, './client.js'),
}