/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslateblue: "#072f57",
        coral: "#eb7150",
        chocolate: "#e7760d",
        darkslategray: {
          "100": "#3e3e3e",
          "200": "#123557",
        },
        black: "#000",
        azure: "#e8fbff",
        gray: {
          "100": "#222",
          "200": "rgba(255, 255, 255, 0.2)",
        },
        darkgreen: "#00732f",
        midnightblue: "#271555",
        dimgray: "#6d6e71",
        lightgray: "#d1d5db",
        slategray: "#6b7280",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",
        arial: "Arial",
      },
      borderRadius: {
        "8xs": "5px",
        "12xs": "1px",
        xl: "20px",
      },
    },
    fontSize: {
      "lg-8": "18.8px",
      "7xl": "26px",
      "mid-2": "17.2px",
      xl: "20px",
      "18xl-3": "37.3px",
      lg: "18px",
      "base-1": "15.1px",
      sm: "14px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,

  },
  plugins:[
    require('@shrutibalasa/tailwind-grid-auto-fit')
  ],
};
