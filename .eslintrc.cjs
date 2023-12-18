module.exports = {
  env: {
    browser: true,
    es2021: true,
    vitest: true,
  },
  extends: ['airbnb', 'plugin:storybook/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
