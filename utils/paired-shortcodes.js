module.exports = {
	wrap: function (content, classes = '') {
		return `<div class="wrapper p-4 ${classes}">${content}</div>`
	},

	columns: function (content) {
		return `<div class="grid grid-cols-1 md:grid-cols-2 gap-6">${content}</div>`
	},

	cols: function (content, bgcolor) {
		return `<div class="${bgcolor}">${content}</div>`
	},
}
