const CleanCSS = require('cssnano')

module.exports = {

  /**
   * Inline and Minify CSS
   */
  cssmin: (code) => {
    return new CleanCSS({}).default(code).styles
  },

}
