import colors from "./src/lib/styles/colors.json";
import screens from "./src/lib/styles/screens.json";
import sizes from "./src/lib/styles/sizes.json";
import fonts from "./src/lib/styles/fonts.json";

export default {
  mode: "jit",
  safelist: [
    {
      pattern: /mb-+/, // 👈  This includes bg of all colors and shades
    },
    {
      pattern: /mt-+/, // 👈  This includes bg of all colors and shades
    },
    {
      pattern: /ml-+/, // 👈  This includes bg of all colors and shades
    },
    {
      pattern: /mr-+/, // 👈  This includes bg of all colors and shades
    },
    {
      pattern: /m-+/, // 👈  This includes bg of all colors and shades
    },
    {
      pattern: /pb-+/, // 👈  This includes bg of all colors and shades
    },
    {
      pattern: /pt-+/, // 👈  This includes bg of all colors and shades
    },
    {
      pattern: /pl-+/, // 👈  This includes bg of all colors and shades
    },
    {
      pattern: /pr-+/, // 👈  This includes bg of all colors and shades
    },
    {
      pattern: /p-+/, // 👈  This includes bg of all colors and shades
    },
  ],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx,json}",
    "./@application/**/*.{js,ts,jsx,tsx,mdx,json}",
    "./src/**/*.{js,ts,jsx,tsx,mdx,json}",
    "./node_modules/sublime-components/**/*.{js,ts,jsx,tsx,mdx,json}",
  ],
  theme: {
    extend: {
      colors,
      screens,
      sizes,
      fontFamily: fonts,
    },
  },
  plugins: [],
};
