// postcss.config.js
export default {
  plugins: {
    // Используйте новый плагин @tailwindcss/postcss
    '@tailwindcss/postcss': {}, // <--- ИЗМЕНЕНИЕ ЗДЕСЬ
    autoprefixer: {},
  },
}