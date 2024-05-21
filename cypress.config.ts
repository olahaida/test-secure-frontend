import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    env: {
      isMobile: false,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
