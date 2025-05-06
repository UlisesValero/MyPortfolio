import tailwindcss from "@tailwindcss/vite";

export default {
  darkMode: 'media', // or 'media' if you want auto-mode
  content: ['./index.html', './src/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}']
  // content: ["./public/**/*.{html,js}"],
}
