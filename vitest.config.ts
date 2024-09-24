import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      all: true,
      include: ['src/**'],
      provider: 'istanbul',
      reporter: ['clover', 'json', 'lcov', 'text'],
    },
    include: ['tests/**/*.spec.ts'],
  },
});
