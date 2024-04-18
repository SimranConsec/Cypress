const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
  },
  reporter: 'cypress-mochawesome-reporter',
  video: false,
  screenshotsFolder: 'screenshots',
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    reportPageTitle: 'Test Result',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  chromeWebSecurity: false,
  defaultCommandTimeout: 45000,
  pageLoadTimeout: 45000,
  screenshotOnRunFailure: true,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
