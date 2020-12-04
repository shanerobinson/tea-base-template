const pluginRss         = require('@11ty/eleventy-plugin-rss')
const pluginNavigation  = require('@11ty/eleventy-navigation')
const syntaxHighlight   = require('@11ty/eleventy-plugin-syntaxhighlight')

const filters           = require('./utils/filters.js')
const shortcodes        = require('./utils/shortcodes')


module.exports = function (eleventyConfig) {

 	/**
	 * Plugins
	 * @link https://www.11ty.dev/docs/plugins/
	 */
	eleventyConfig.addPlugin(pluginRss)
	eleventyConfig.addPlugin(pluginNavigation)
	eleventyConfig.addPlugin(syntaxHighlight)


  /**
   * Filters
   * @link https://www.11ty.io/docs/filters/
   */
  Object.keys(filters).forEach((filterName) => {
    eleventyConfig.addFilter(filterName, filters[filterName])
  })

  
	/**
	 * Custom Watch Targets
	 * for when the Tailwind config or .css files change...
	 * by default not watched by 11ty
	 * @link https://www.11ty.dev/docs/config/#add-your-own-watch-targets
	 */
	eleventyConfig.addWatchTarget('./src/assets/css')
	// eleventyConfig.addWatchTarget('./utils/*.js')
	eleventyConfig.addWatchTarget('./tailwind.config.js')

 	/**
	 * Passthrough File Copy
	 * @link https://www.11ty.dev/docs/copy/
	 */
	eleventyConfig.addPassthroughCopy('src/*.png')
	eleventyConfig.addPassthroughCopy('src/*.jpg')
	eleventyConfig.addPassthroughCopy('src/*.ico')
	eleventyConfig.addPassthroughCopy('src/robots.txt')
	eleventyConfig.addPassthroughCopy('src/assets/images/')
	eleventyConfig.addPassthroughCopy('src/assets/svg/')
	eleventyConfig.addPassthroughCopy('src/assets/css/prism*.css')

  
	return {
		dir: {
			input: 'src',
			output: 'dist',
			includes: '_includes',
			data: '_data',
		},
		passthroughFileCopy: true,
		templateFormats: ['html', 'njk', 'md'],
		htmlTemplateEngine: 'njk',
		markdownTemplateEngine: 'njk',
	}
};