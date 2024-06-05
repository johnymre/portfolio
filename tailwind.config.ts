import type { Config } from "tailwindcss";

const flowbite = require("flowbite-react/tailwind");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      rotate: {
        '-20': '-20deg',
      },
      inset: {
        '-3rem': '-3rem',
        '-5rem': '-5rem',
        '-7rem': '-7rem',
        '-40rem': '-40rem',
        '-20rem': '-20rem',
        '-23rem': '-23rem',
      }, screens: {
        'desktop': '1920px',
        // => @media (min-width: 1280px) { ... }
      },
      height: {
        '128': '34rem',
        '152': '47rem',
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
export default config;
