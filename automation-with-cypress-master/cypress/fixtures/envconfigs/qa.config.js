const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    baseUrl: "https://test.myconnectsecure.com",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
