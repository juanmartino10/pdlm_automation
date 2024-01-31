const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.palaciodelamusica.com.uy/",
    viewportWidth: 1820,
    viewportHeight: 1080,
    defaultCommandTimeout: 20000,
    chromeWebSecurity: false
  },
  watchForFileChanges: false,
  experimentalSourceRewriting: true,
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  // Deshabilitar la detección de errores no capturados
  // onUncaughtException: false,
  // env: {
  //   CYPRESS_UNCAUGHT_EXCEPTION_HANDLER: "false"
  }
);
