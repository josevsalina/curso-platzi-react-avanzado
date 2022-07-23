const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '6y9a9y',
  e2e: {
    setupNodeEvents (on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://petgram-valentin.vercel.app/',
    chromeWebSecurity: false,
    viewportWidth: 500,
    viewportHeight: 800
  }
})
