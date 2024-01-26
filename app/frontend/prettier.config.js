/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindConfig: "./tailwind.config.js",
  tailwindFunctions: ["clsx"],
};

export default config;
