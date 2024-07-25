import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://rafaelsouza.tech',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    environment: 'prd'
  }
});
