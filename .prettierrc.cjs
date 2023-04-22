/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  tabWidth: 2,
  singleQuote: true,
  jsxSingleQuote: true,
  bracketSpacing: false,
  semi: true,
};

module.exports = config;
