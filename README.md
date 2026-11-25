## cemu.cfw.guide

A complete guide to installing CEMU and optimizing performance.

https://cemu.cfw.guide

## Running the site locally

This requires the following installed to your system:
- [Node.js v22.18.0+](https://nodejs.org/) (includes npm)

To test the website locally, simply run the following commands:
```
git clone https://github.com/cfw-guide/cemu.cfw.guide.git
cd cemu.cfw.guide
npm ci
npm run dev
```
to start a local testing webserver. Open the URL printed by VitePress; the port may vary if another server is running.

## Building the site

Follow the steps above, but run `npm run build` instead at the final step. Once complete, The output will be stored at `/.vitepress/dist`.