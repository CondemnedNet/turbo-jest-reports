module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    'jest/globals': true,
  },
  root: true,
  ignorePatterns: ['!.github'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'jest', 'jest-formatting'],
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:jest-formatting/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 1,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-var-requires': 0,
    'no-console': ['warn', { allow: ['error'] }],
    'jest/no-disabled-tests': 0,
    'jest/no-test-prefixes': 0,
    'jest/no-focused-tests': 0,
  },
};