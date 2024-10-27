/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: "#3B81F6",
        main2: "#0171E2",
        dark: "#000",
        dark950: "#151515",
        dark900: "#151515",
        dark800: "#151515",
        dark700: "#252525",
        dark600: "rgb(82 82 91)",
        dark500: "#A1A1A1",
        dark400: "rgb(161 161 170)",
        light50: "rgb(242 242 247)",
        light: "#161A1E",
        light100: "#1E2328",
        light200: "#1E2328",
        light300: "#2B3139",
        light400: "rgb(82 82 91)",
        light500: "#B7BDC6",
        light600: "rgb(82 82 91)",
        light700: "rgb(72 72 74)",
        light800: "rgb(44 44 46)",
        light900: "rgb(28 28 30)",
        darkText: "#fff",
        lightText: "#fff",
        blueInfoBg: "#1E2042",
        blueBg: "#262853",
        greenBg: "#234d25",
        redBg: "#421E1E",
        yellowBg: "#423E1E",
        amberBg: "#423E1E",
        purpleBg: "#392653",
        blueBgLight: "#262853",
        greenBgLight: "#234d25",
        redBgLight: "#421E1E",
        yellowBgLight: "#423E1E",
        amberBgLight: "#423E1E",
        purpleBgLight: "#392653",
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '40%': "40%",
      '16': '4rem',
    }
  },
  plugins: [],
}

// #101012
//token generation
//growth rate

//