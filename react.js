module.exports = {
	extends: [
		'./index.js',
		'plugin:react/recommended',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: [
		'react',
	],
	rules: {
		'react/prop-types': [0],
	},
}
