module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    jest: true,
    'jest/globals': true,
    'react-native/react-native': true,
  },
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [],
  rules: {
    'no-empty': 1,
    'no-empty-function': 0,
    '@typescript-eslint/no-empty-function': 1,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': [
      1,
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/ban-ts-comment': [
      1,
      { 'ts-ignore': 'allow-with-description' },
    ],
    'require-await': 0,
    '@typescript-eslint/require-await': 2,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'arrow-body-style': [1, 'as-needed'],

    // React
    'react/jsx-key': 2,
    'react/jsx-boolean-value': 1,
    'react/boolean-prop-naming': 1,
    'react/destructuring-assignment': [
      1,
      'always',
      { destructureInSignature: 'always' },
    ],
    'react/hook-use-state': 2,
    'react/no-array-index-key': 2,

    // React Native
    'react-native/no-unused-styles': 1,
    'react-native/no-single-element-style-arrays': 1,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['.eslintrc.js', 'babel.config.js', 'metro.config.js'],
};
