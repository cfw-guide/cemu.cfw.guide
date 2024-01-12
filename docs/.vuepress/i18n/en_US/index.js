module.exports = {
  search: 'Search',
  
  locales: {
    lang: 'en-US',
    title: 'Cemu Guide',
    description: 'A complete guide to installing CEMU and optimizing performance.',
    discordNoticeText: "If you need further help, ask on the official Cemu [Discord Server](https://discord.gg/5psYsup) for assistance.",
  },
  
  themeConfig: {
  	selectLanguageName: "English",
  	backToHome: "Take me home",
  	contributorsText: "Contributors",
  	editLinkText: "Edit this page",
  	lastUpdatedText: "Last Updated",
  	openInNewWindow: "Open in new window",
  	selectLanguageAriaLabel: "Select language",
  	toggleDarkMode: "Toggle dark mode",
  	toggleSidebar: "Toggle sidebar",
        
    repoLabel: '<i class="fab fa-github"></i>',
      
    navbar: require('./navbar'),
    sidebar: require('./sidebar'),
  }
};