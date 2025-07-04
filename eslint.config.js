import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

const config = [
  {
    languageOptions: {
      parser: typescriptParser,
      globals: {
        browser: true,
        node: true,
        es6: true,
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {
      // Add your custom rules here
    },
  },
  {
    files: ['app/**/*.ts', 'src/**/*.ts'],
    rules: {
      // Add specific rules for app and src directories
    },
  },
];

export default config;