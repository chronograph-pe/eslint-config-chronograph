/* eslint quote-props: ["error", "consistent-as-needed"] */

module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:jest/recommended',
	],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
		},
		sourceType: 'module',
	},
	plugins: [
		'import',
		'jest',
		'react-hooks',
	],
	rules: {
		'array-bracket-newline': ['error', 'consistent'],
		'array-bracket-spacing': 'error',
		'array-element-newline': ['error', 'consistent'],
		'arrow-body-style': ['error', 'as-needed'],
		'arrow-parens': ['error', 'as-needed'],
		'arrow-spacing': 'error',
		'block-spacing': 'error',
		'brace-style': 'error',
		'camelcase': ['error', { properties: 'never' }],
		'comma-dangle': ['error', 'always-multiline'],
		'comma-spacing': 'error',
		'comma-style': 'error',
		'computed-property-spacing': 'error',
		'dot-notation': 'error',
		'eol-last': 'error',
		'eqeqeq': 'error',
		'func-call-spacing': 'error',
		'indent': ['error', 'tab'],
		'jsx-quotes': ['error', 'prefer-single'],
		'key-spacing': 'error',
		'keyword-spacing': 'error',
		'linebreak-style': ['error', 'unix'],
		'max-depth': 'error',
		'max-len': ['error', {
			code: 100,
			tabWidth: 2,
			ignorePattern: '<path([\\s\\S]*?)/>',
		}],
		'max-params': ['error', 5],
		'max-statements-per-line': ['error', { max: 2 }],
		'no-else-return': 'error',
		'no-extra-bind': 'error',
		'no-lonely-if': 'error',
		'no-mixed-operators': 'error',
		'no-shadow': 'error',
		'no-trailing-spaces': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-constructor': 'error',
		'no-var': 'error',
		'no-whitespace-before-property': 'error',
		'object-curly-newline': 'error',
		'object-curly-spacing': ['error', 'always'],
		'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
		'prefer-arrow-callback': 'error',
		'prefer-const': 'error',
		'prefer-destructuring': ['error', { array: false, object: true }],
		'prefer-object-spread': 'error',
		'prefer-template': 'error',
		'quote-props': ['error', 'as-needed'],
		'quotes': ['error', 'single'],
		'react-hooks/exhaustive-deps': 'warn',
		'react-hooks/rules-of-hooks': 'error',
		'rest-spread-spacing': 'error',
		'semi': ['error', 'never'],
		'space-in-parens': 'error',
		'space-infix-ops': ['error'],
		'strict': 'error',
	},
}
