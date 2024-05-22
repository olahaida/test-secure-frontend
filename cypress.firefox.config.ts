import { defineConfig } from "cypress";
import { allureCypress } from "allure-cypress/reporter";

export default defineConfig({
  projectId: "y811be",
  e2e: {
    video: false,
    env: {
      isMobile: false,
    },
    baseUrl: 'http://localhost:8081',
    setupNodeEvents(on, config) {
      allureCypress(on)
    },
  },
});
