const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 60000,
    retries: 3,
    pageLoadTimeout: 60000,
    viewportWidth: 1400,
    viewportHeight: 900,
  },
});
