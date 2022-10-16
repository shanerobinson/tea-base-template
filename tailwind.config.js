module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.njk',
    './src/**/*.md'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
