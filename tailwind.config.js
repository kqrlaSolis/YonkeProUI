/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class", // O 'media' según tu preferencia
  theme: {
    extend: {
      colors: {
      "bg-primary": "#1a1a1a",  /* Fondo principal */
      "bg-secondary2": "#2e2e2e",
      "bg-secondary": "#3b3b3b", /* Fondo secundario (secciones) */
      "text-main": "#ffffff",   /* Texto principal */
      "text-secondary": "#bfbfbf",/* Texto secundario */
      "text-accent": "#b3cdd9",   /* Texto de acento (botones, enlaces importantes) */
      "accent": "#a19249",
      "accenthover": "##d0bb53",     /* Color de acento (botones, enlaces importantes) */
      "header-footer-bg": "#121212",/* Fondo para header y footer */
      "border-color": "#3b3b3b",
      "input-bg": "#b8bfc4",
      
      }
    },
  },
  plugins: [],
};
