import { nextui } from "@nextui-org/theme";

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        kr: ["var(--font-noto-kr)"],
        ja: ["var(--font-noto-ja)"],
        cn: ["var(--font-noto-cn)"],
        en: ["var(--font-roboto-en)"]
      }
    },
    fontSize: {
      sm: [
        "12px",
        {
          lineHeight: "18px",
          fontWeight: "400"
        }
      ],
      md: [
        "14px",
        {
          lineHeight: "21px",
          fontWeight: "400"
        }
      ],
      button: [
        "14px",
        {
          lineHeight: "21px",
          fontWeight: "700"
        }
      ],
      lg: [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "400"
        }
      ],
      xl: [
        "32px",
        {
          lineHeight: "40px",
          fontWeight: "700"
        }
      ]
    },
    colors: {
      "primary": "#71C4EF",
      "primary-200": "#D4EAF7",
      "primary-300": "#3B3C3D",
      "accent-100": "#D4EAF7",
      "accent-200": "#00668C",
      "text-100": "#1D1C1C",
      "text-200": "#313D44",
      "bg-100": "#FFFEFB",
      "bg-200": "#F5F4F1",
      "bg-300": "#CCCBC8"
    }
  },
  darkMode: "class",
  plugins: [nextui({
    layout: {},
    themes: {
      light: {},
      dark: {}
    }
  })]
};
