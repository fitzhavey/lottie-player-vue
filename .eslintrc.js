module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/essential',
		'@holistic-web/eslint-config'
	],
	parserOptions: {
		parser: 'babel-eslint'
	},
	rules: {
		// allow storyboard imports to go in the devdependencies section
		'import/no-extraneous-dependencies': 0
	}
};
