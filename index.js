module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:jest/recommended',
	],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true,
		},
		sourceType: 'module',
	},
	plugins: [
		'react',
		'import',
		'jest',
	],
	rules: {
		'indent': [
			'error',
			'tab',
		],
		'linebreak-style': [
			'error',
			'unix',
		],
		'quotes': [
			'error',
			'single',
		],
		'react/prop-types': [0],
		'semi': [
			'error',
			'never',
		],
		'comma-dangle': ['error', 'always-multiline'],
	},
}