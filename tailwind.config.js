module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}"
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { max: "640px" },
      md: { max: "769px" },
      lg: { max: "1025" },
      xl: { max: "1280" },
      xxl: { max: "1536" },
      sc: { min:"0px" ,max: "640px" },
      bc: { max: "1536px" },
    },
    extend: {
      colors: {
        amber: {
          500: "var(--amber_500)"
        },
        background: {
          white: "var(--background_white)"
        },
        black: {
          900: "var(--black_900)",
          "900_7f": "var(--black_900_7f)"
        },
        blue: {
          a700: "var(--blue_a700)"
        },
        blue_gray: {
          50: "var(--blue_gray_50)",
          400: "var(--blue_gray_400)",
          "600_b2": "var(--blue_gray_600_b2)"
        },
        deep_purple: {
          50: "var(--deep_purple_50)",
          300: "var(--deep_purple_300)",
          "400_a2": "var(--deep_purple_400_a2)",
          "50_00": "var(--deep_purple_50_00)",
          "50_01": "var(--deep_purple_50_01)",
          a100: "var(--deep_purple_a100)",
          a100_01: "var(--deep_purple_a100_01)",
          a200: "var(--deep_purple_a200)"
        },
        gray: {
          200: "var(--gray_200)",
          600: "var(--gray_600)",
          900: "var(--gray_900)",
          "900_01": "var(--gray_900_01)",
          "900_02": "var(--gray_900_02)",
          "900_03": "var(--gray_900_03)",
          "900_04": "var(--gray_900_04)",
          "900_05": "var(--gray_900_05)",
          "900_06": "var(--gray_900_06)"
        },
        indigo: {
          50: "var(--indigo_50)",
          a200: "var(--indigo_a200)"
        },
        light_blue: {
          400: "var(--light_blue_400)",
          800: "var(--light_blue_800)",
          a200: "var(--light_blue_a200)"
        },
        light_green: {
          500: "var(--light_green_500)",
          800: "var(--light_green_800)"
        },
        lime: {
          a700: "var(--lime_a700)"
        },
        pink: {
          300: "var(--pink_300)",
          600: "var(--pink_600)"
        },
        primary: {
          purple_normal: "var(--primary_purple_normal)"
        },
        teal: {
          400: "var(--teal_400)",
          a700: "var(--teal_a700)"
        },
        white: {
          a700: "var(--white_a700)",
          a700_00: "var(--white_a700_00)",
          a700_cc: "var(--white_a700_cc)"
        },
        yellow: {
          800: "var(--yellow_800)"
        }
      },
      boxShadow: {
        xs: "0 2px 24px 2px #1d202405"
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'], 
        montserrat1: "Montserrat Thin",
        montserrat2: "Montserrat Light",
        montserrat3: "Montserrat Regular",
        montserrat4: "Montserrat SemiBold",
        montserrat5: "Montserrat Bold",
        montserrat6: "Montserrat ExtraBold",
        // inter: "Inter"
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg, #e9d7ff, #ffffff00, #28242d)",
        gradient1: "radial-gradient(20deg, #e9d7ff, #ffffff00, #e9d8ff00)"
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
};
