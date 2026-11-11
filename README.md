## cemu.cfw.guide

A complete guide to installing CEMU and optimizing performance.

https://cemu.cfw.guide

## Running the site locally

This requires the following installed to your system:
- [Node.js v20+](https://nodejs.org/) (includes npm)

To test the website locally, simply run the following commands:
```
git clone https://github.com/cemu.cfw.guide.git --recursive
cd cemu.cfw.guide
npm ci
npm run dev
```
to build the Markdown files into HTML and start a testing webserver on http://127.0.0.1:8080.

## Building the site

Follow the steps above, but run `npm run build` instead at the final step. Once complete, the output will be stored at `/docs/.vuepress/dist`.