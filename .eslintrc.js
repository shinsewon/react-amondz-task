module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'airbnb',
    'airbnb-typescript',
    'prettier',
    'plugin:prettier/recommended',
  ],
  overrides: [],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  ignorePatterns: ['.eslintrc.js'],
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/consistent-type-definitions': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'react/react-in-jsx-scope': 0,
    'no-nested-ternary': 0,
    'import/prefer-default-export': 0,
    'react/jsx-curly-brace-presence': 'error',
    'react/jsx-props-no-spreading': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    '@typescript-eslint/promise-function-async': 0,
    '@typescript-eslint/no-confusing-void-expression': 0,
    'class-methods-use-this': 0,
    'no-useless-constructor': 0,
    'react/jsx-no-useless-fragment': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/no-useless-constructor': 0,
  },
};
