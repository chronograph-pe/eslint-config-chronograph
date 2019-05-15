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
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		'react/jsx-boolean-value': ['error', 'never'],
		'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
		'react/jsx-curly-brace-presence': ['error', 'never'],
		'react/jsx-curly-spacing': ['error', 'never'],
		'react/jsx-equals-spacing': ['error', 'never'],
		'react/jsx-filename-extension': 'error',
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
		'react/jsx-pascal-case': 'error',
		'react/jsx-props-no-multi-spaces': 'error',
		'react/jsx-tag-spacing': ['error', {
			closingSlash: 'never',
			beforeSelfClosing: 'always',
			afterOpening: 'never',
			beforeClosing: 'never',
		}],
		'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
		'react/prop-types': [0],
		'react/self-closing-comp': 'error',
	},
}
