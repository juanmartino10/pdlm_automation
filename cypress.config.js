const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.palaciodelamusica.com.uy/",
    defaultCommandTimeout: 20000,
    chromeWebSecurity: false
  },
});
