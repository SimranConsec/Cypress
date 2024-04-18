const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env: {
    baseUrl: "https://demo1.seleniumeasy.com/",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
