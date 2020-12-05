const CleanCSS = require('clean-css')
const { DateTime } = require('luxon')
const slugify = require('slugify')


module.exports = {

 	/**
	 * Filters
	 * @link https://www.11ty.dev/docs/filters/
	 */

	/**
	 * dateToFormat allows specifiying display format at point of use.
	 * Example in footer: {{ build.timestamp | dateToFormat('yyyy') }} uses .timestamp
	 *  from the _data/build.js export and formats it via dateToFormat.
	 * Another usage example used in layouts: {{ post.date | dateToFormat("LLL dd, yyyy") }}
	 * And finally, example used in /src/posts/posts.json to format the permalink
	 *  when working with old /yyyy/MM/dd/slug format from Wordpress exports
	 */
	dateToFormat: (date, format) => {
		return DateTime.fromJSDate(date, {
			zone: 'utc',
		}).toFormat(String(format))
  },
  

  /**
   * Inline and Minify CSS in src/_includes/layouts/base.njk
   */
  cssmin: (code) => {
    return new CleanCSS({}).minify(code).styles
	},
  
  
  /**
   * Universal slug filter strips unsafe chars from URLs
   */
	slugify: (string) => {
		return slugify(string, {
			lower: true,
			replacement: '-',
			remove: /[*+~.·,()'"`´%!?¿:@]/g,
		})
	},





}
