const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'a9qkck',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportTitle: 'cypress_learning_lab',
    reportPageTitle: 'cypress_learning_lab',
  },
  e2e: {
    baseUrl: "https://www.automationpratice.com.br/",
    defaultCommandTimeout: 5000, 
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
