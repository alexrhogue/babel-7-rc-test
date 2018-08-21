module.exports = function(api) {
	api.cache(false)
	const plugins = [
		"@babel/plugin-syntax-export-default-from",
		"babel-plugin-syntax-dynamic-import"
	]

	const presets = [
		["env", {
			"targets": {
			  "node": "current"
			}
		}]
	]

	return {
		plugins,
		presets
	}
}
