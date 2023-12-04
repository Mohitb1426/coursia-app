module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-native',
  ],
  rules: {
    'default-param-last': 0,
    camelcase: 'off',
    'react/jsx-props-no-spreading': 'off',
    'react-native/no-inline-styles': 2,
    'react-native/no-unused-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 2,
    'react-native/no-single-element-style-arrays': 2,
    'no-console': 2,
    'global-require': 0,
    'import/prefer-default-export': 'off',
    'no-use-before-define': ['error', { variables: false, functions: false }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'arrow-body-style': 0,
    'react-native/sort-styles': [
      'error',
      'asc',
      {
        ignoreClassNames: false,
        ignoreStyleProperties: false,
      },
    ],
  },
};
