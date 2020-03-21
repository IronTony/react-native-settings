module.exports = {
  printWidth: 80,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  useTabs: false,
  overrides: [
    {
      files: '*.json',
      options: { printWidth: 200 },
    },
  ],
};
