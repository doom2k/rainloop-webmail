
module.exports = {
	'extends': 'eslint:recommended',
	'ecmaFeatures': {
		'modules': true
	},
	"parser": "babel-eslint",
	'parserOptions': {
		'ecmaVersion': 6,
        'sourceType': 'module'
    },
	'env': {
		'node': true,
		'commonjs': true,
		'es6': true
	},
	'globals': {
		'RL_COMMUNITY': true,
		'RL_ES6': true
	},
	// http://eslint.org/docs/rules/
	'rules': {

		// errors
		'no-cond-assign': [2, 'always'],
		'no-console': 2,
		'no-constant-condition': 2,
		'no-control-regex': 2,
		'no-debugger': 2,
		'no-dupe-args': 2,
		'no-dupe-keys': 2,
		'no-duplicate-case': 2,
		'no-empty': 2,
		'no-empty-character-class': 2,
		'no-ex-assign': 2,
		'no-extra-boolean-cast': 2,
//		'no-extra-parens': 2,
		'no-extra-semi': 2,
		'no-func-assign': 2,
		'no-inner-declarations': 2,
		'no-invalid-regexp': 2,
		'no-irregular-whitespace': 2,
		'no-negated-in-lhs': 2,
		'no-obj-calls': 2,
		'no-prototype-builtins': 2,
		'no-regex-spaces': 2,
		'no-sparse-arrays': 2,
		'no-unexpected-multiline': 2,
		'no-unreachable': 2,
		'no-unsafe-finally': 2,
		'use-isnan': 2,
//		'valid-jsdoc': [2, {
//			'requireParamDescription': false,
//			'requireReturnDescription': false
//		}],
		'valid-typeof': 2,

		// best practices
		'accessor-pairs': 2,
		'array-callback-return': 2,
		'block-scoped-var': 2,
//		'complexity': 2,
		'consistent-return': 2,
		'curly': 2,
		'default-case': 2,
		'dot-location': [2, 'property'],
		'dot-notation': 2,
		'eqeqeq': 2,
		'guard-for-in': 2,
		'no-alert': 2,
		'no-caller': 2,
		'no-case-declarations': 2,
		'no-div-regex': 2,
		'no-else-return': 2,
		'no-empty-function': 2,
		'no-empty-pattern': 2,
		'no-eq-null': 2,
		'no-eval': 2,
		'no-extend-native': 2,
		'no-extra-bind': 2,
		'no-extra-label': 2,
		'no-fallthrough': 2,
		'no-floating-decimal': 2,
		'no-implicit-coercion': [2, {'allow': ['!!', '+']}],
		'no-implicit-globals': 2,
		'no-implied-eval': 2,
		'no-invalid-this': 2,
		'no-iterator': 2,
		'no-labels': 2,
		'no-lone-blocks': 2,
		'no-loop-func': 2,
//		'no-magic-numbers': [2, {
//			'ignore': [-1, 0, 1, 2],
//			'ignoreArrayIndexes': true
//		}],
		'no-multi-spaces': 2,
		'no-multi-str': 2,
		'no-native-reassign': 2,
		'no-new': 2,
		'no-new-func': 2,
		'no-new-wrappers': 2,
		'no-octal': 2,
		'no-octal-escape': 2,
//		'no-param-reassign': 2,
		'no-proto': 2,
		'no-redeclare': 2,
		'no-return-assign': 2,
		'no-script-url': 2,
		'no-self-assign': 2,
		'no-self-compare': 2,
		'no-sequences': 2,
		'no-throw-literal': 2,
		'no-unmodified-loop-condition': 2,
		'no-unused-expressions': 2,
		'no-unused-labels': 2,
		'no-useless-call': 2,
		'no-useless-concat': 2,
		'no-useless-escape': 2,
		'no-void': 2,
		'no-warning-comments': 2,
		'no-with': 2,
		'radix': 2,
//		'vars-on-top': 2,
		'wrap-iife': 2,
		'yoda': [2, 'always'],

		// strict mode
		'strict': 2,

		// variables
		'init-declarations': 2,
		'no-catch-shadow': 2,
		'no-delete-var': 2,
		'no-label-var': 2,
		'no-restricted-globals': 2,
		'no-shadow': 2,
		'no-shadow-restricted-names': 2,
		'no-undef': 2,
		'no-undef-init': 2,
		'no-undefined': 2,
		'no-unused-vars': 2,
		'no-use-before-define': 2,

		// node.js and commonjs
		'callback-return': 2,
//		'global-require': 2,
		'handle-callback-err': 2,
//		'no-mixed-requires': 2,
		'no-new-require': 2,
		'no-path-concat': 2,
		'no-process-env': 2,
		'no-process-exit': 2,
		'no-restricted-modules': 2,
//		'no-sync': 2,

		// stylistic issues
		'array-bracket-spacing': 2,
		'block-spacing': [2, 'never'],
//		'brace-style': [2, 'allman'],
		'camelcase': 2,
		'comma-dangle': [2, 'never'],
		'comma-spacing': 2,
		'comma-style': 2,
		'computed-property-spacing': 2,
		'consistent-this': [2, 'self'],
		'eol-last': 2,
		'func-names': [2, 'never'],
//		'func-style': 2,
		'id-blacklist': [2, 'x'],
		'id-length': [2, {'min': 1, 'max': 50}],
		'id-match': 2,
		'indent': [2, 'tab', {
			'SwitchCase': 1,
			'VariableDeclarator': {
				'var': 1,
				'let': 1,
				'const': 1
			}
		}],
		'jsx-quotes': 2,
		'key-spacing': 2,
		'keyword-spacing': 2,
		'linebreak-style': [2, 'unix'],
//		'lines-around-comment': 2,
		'max-depth': [2, 10],
		'max-len': [2, 200],
//		'max-lines': 2,
		'max-nested-callbacks': [2, 5],
//		'max-params': 2,
//		'max-statements': [2, {'max': 10}, {'ignoreTopLevelFunctions': true}],
		'max-statements-per-line': 2,
		'new-cap': 2,
		'new-parens': 2,
//		'newline-after-var': 2,
//		'newline-before-return': 2,
//		'newline-per-chained-call': 2,
		'no-array-constructor': 2,
		'no-bitwise': 2,
		'no-continue': 2,
//		'no-inline-comments': 2,
//		'no-lonely-if': 2,
//		'no-mixed-operators': 2,
		'no-mixed-spaces-and-tabs': 2,
		'no-multiple-empty-lines': [2, {
			"max": 1,
			"maxEOF": 1,
			"maxBOF": 1
		}],
//		'no-negated-condition': 2,
//		'no-nested-ternary': 2,
		'no-new-object': 2,
		'no-plusplus': [2, {
			'allowForLoopAfterthoughts': true
		}],
		'no-restricted-syntax': 2,
		'no-spaced-func': 2,
		'no-ternary': 0,
		'no-trailing-spaces': 2,				// disallow trailing whitespace at the end of lines
//		'no-underscore-dangle': 2,				// disallow dangling underscores in identifiers
		'no-unneeded-ternary': 2,				// disallow ternary operators when simpler alternatives exist
		'no-whitespace-before-property': 2,
//		'object-curly-newline': 2,
		'object-curly-spacing': [2, 'never'],
		'object-property-newline': [2, {'allowMultiplePropertiesPerLine': true}],
//		'one-var': [2, {
//			'var': 'always',
//			'let': 'always',
//			'const': 'always'
//		}],
		'one-var-declaration-per-line': [2, 'always'],
		'operator-assignment': 2,
		'operator-linebreak': [2, 'after'],
//		'padded-blocks': [2, 'never'],
//		'quote-props': [2, 'as-needed'],
		'quotes': [2, 'single'],
		'require-jsdoc': 2,
		'semi':	[2, 'always'],
		'semi-spacing': 2,
//		'sort-vars': 2,
		'space-before-blocks': 2,
		'space-before-function-paren': [2, 'never'],
		'space-in-parens': 2,
		'space-infix-ops': 2,
		'space-unary-ops': 2,
		'spaced-comment': 2,
		'unicode-bom': [2, 'never'],
		'wrap-regex': 2,

		// es6
		'arrow-body-style': [2, 'as-needed'],
		'arrow-parens': 2,
		'arrow-spacing': 2,
		'constructor-super': 2,
		'generator-star-spacing': 2,
		'no-class-assign': 2,
		'no-confusing-arrow': [2, {'allowParens': true}],
		'no-const-assign': 2,
		'no-dupe-class-members': 2,
		'no-duplicate-imports': 2,
		'no-new-symbol': 2,
		'no-restricted-imports': 2,
		'no-this-before-super': 2,
		'no-useless-computed-key': 2,
		'no-useless-constructor': 2,
		'no-useless-rename': 2,
		'no-var': 2,
//		'object-shorthand': 2,
		'prefer-arrow-callback': 2,
		'prefer-const': 2,
//		'prefer-reflect': 2,

		'prefer-rest-params': 2,
		'prefer-spread': 2,

//		'prefer-template': 2,
		'require-yield': 2,
		'rest-spread-spacing': 2,
		'sort-imports': 0, // off
		'template-curly-spacing': 2,
		'yield-star-spacing': 2
	}
};
