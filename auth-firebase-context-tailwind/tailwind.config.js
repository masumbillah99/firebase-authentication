/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#c91016",

          secondary: "#cc7402",

          accent: "#ea8591",

          neutral: "#161424",

          info: "#93ABDC",

          success: "#36E798",

          warning: "#F0AE28",

          error: "#F36F6D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
