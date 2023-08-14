/** @type {import('prettier').Config} */
module.exports = {
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  plugins: [require('prettier-plugin-svelte')],
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
};
