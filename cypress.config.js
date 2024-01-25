const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.palaciodelamusica.com.uy/",
    viewportWidth: 1820,
    viewportHeight: 1080,
    defaultCommandTimeout: 20000,
    chromeWebSecurity: false
  },
});
