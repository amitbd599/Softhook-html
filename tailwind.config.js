/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      colors: {
        text: {
          400: "#A6A6A6",
        },
        primary: {
          400: "#52BD94",
          500: "#10B981",
          600: "#059669",
        },
        secondary: {
          400: "#161C28",
        },
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "2rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "3rem",
      },
    },
  },

  screens: {
    sm: "380px",
    // => @media (min-width: 380px) { ... }

    md: "768px",
    // => @media (min-width: 768px) { ... }

    lg: "1024px",
    // => @media (min-width: 1024px) { ... }

    xl: "1280px",
    // => @media (min-width: 1280px) { ... }

    "2xl": "1600px",
    // => @media (min-width: 1366px) { ... }
  },

  plugins: [],
};
