import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';

export default [
    {
        files: ['**/*.{js,cjs,mjs,jsx}'],
        languageOptions: {
            globals: { ...globals.jest },
            parserOptions: { ecmaFeatures: { jsx: true } },
        },
        plugins: { '@stylistic': stylistic },
        rules: {
            'accessor-pairs': 2,
            'array-callback-return': 2,
            'arrow-body-style': 2,
            'block-scoped-var': 2,
            'capitalized-comments': 2,
            'complexity': [2, { max: 30 }],
            'constructor-super': 2,
            'curly': [2, 'multi-line'],
            'default-case-last': 2,
            'default-param-last': 2,
            'dot-notation': 2,
            'for-direction': 2,
            'func-name-matching': 2,
            'func-names': [2, 'never', { generators: 'always' }],
            'func-style': [2, 'declaration', { allowArrowFunctions: true }],
            'getter-return': 2,
            'grouped-accessor-pairs': 2,
            'id-denylist': 2,
            'id-length': [2, { min: 1 }],
            'id-match': 2,
            'logical-assignment-operators': 2,
            'max-lines': 2,
            'max-lines-per-function': [2, { max: 80 }],
            'max-nested-callbacks': 2,
            'new-cap': [2, { properties: false }],
            'no-alert': 2,
            'no-array-constructor': 2,
            'no-async-promise-executor': 2,
            'no-caller': 2,
            'no-case-declarations': 2,
            'no-class-assign': 2,
            'no-compare-neg-zero': 2,
            'no-console': 2,
            'no-const-assign': 2,
            'no-constant-binary-expression': 2,
            'no-constructor-return': 2,
            'no-control-regex': 2,
            'no-debugger': 2,
            'no-delete-var': 2,
            'no-div-regex': 2,
            'no-dupe-args': 2,
            'no-dupe-class-members': 2,
            'no-dupe-else-if': 2,
            'no-dupe-keys': 2,
            'no-duplicate-case': 2,
            'no-duplicate-imports': 2,
            'no-else-return': 2,
            'no-empty-character-class': 2,
            'no-empty-function': 2,
            'no-empty-pattern': 2,
            'no-empty-static-block': 2,
            'no-eq-null': 2,
            'no-ex-assign': 2,
            'no-extra-bind': 2,
            'no-extra-boolean-cast': 2,
            'no-extra-label': 2,
            'no-fallthrough': 2,
            'no-func-assign': 2,
            'no-global-assign': 2,
            'no-implicit-globals': 2,
            'no-implied-eval': 2,
            'no-import-assign': 2,
            'no-inline-comments': 2,
            'no-inner-declarations': 2,
            'no-invalid-regexp': 2,
            'no-irregular-whitespace': 2,
            'no-iterator': 2,
            'no-label-var': 2,
            'no-lone-blocks': 2,
            'no-loss-of-precision': 2,
            'no-misleading-character-class': 2,
            'no-multi-str': 2,
            'no-new': 2,
            'no-new-func': 2,
            'no-new-native-nonconstructor': 2,
            'no-new-wrappers': 2,
            'no-nonoctal-decimal-escape': 2,
            'no-obj-calls': 2,
            'no-object-constructor': 2,
            'no-octal': 2,
            'no-octal-escape': 2,
            'no-proto': 2,
            'no-prototype-builtins': 2,
            'no-redeclare': 2,
            'no-regex-spaces': 2,
            'no-restricted-exports': 2,
            'no-restricted-globals': 2,
            'no-restricted-imports': 2,
            'no-restricted-properties': 2,
            'no-restricted-syntax': 2,
            'no-script-url': 2,
            'no-self-assign': 2,
            'no-self-compare': 2,
            'no-setter-return': 2,
            'no-shadow-restricted-names': 2,
            'no-template-curly-in-string': 2,
            'no-this-before-super': 2,
            'no-undef-init': 2,
            'no-underscore-dangle': 2,
            'no-unexpected-multiline': 2,
            'no-unmodified-loop-condition': 2,
            'no-unneeded-ternary': 2,
            'no-unreachable': 2,
            'no-unsafe-finally': 2,
            'no-unsafe-negation': 2,
            'no-unsafe-optional-chaining': 2,
            'no-unused-labels': 2,
            'no-unused-private-class-members': 2,
            'no-useless-assignment': 2,
            'no-useless-backreference': 2,
            'no-useless-call': 2,
            'no-useless-catch': 2,
            'no-useless-computed-key': 2,
            'no-useless-concat': 2,
            'no-useless-constructor': 2,
            'no-useless-escape': 2,
            'no-useless-rename': 2,
            'no-useless-return': 2,
            'no-var': 2,
            'no-void': [2, { allowAsStatement: true }],
            'no-warning-comments': 2,
            'no-with': 2,
            'object-shorthand': 2,
            'operator-assignment': 2,
            'prefer-arrow-callback': 2,
            'prefer-destructuring': [2, { array: false }],
            'prefer-numeric-literals': 2,
            'prefer-object-has-own': 2,
            'prefer-object-spread': 2,
            'prefer-promise-reject-errors': 2,
            'prefer-regex-literals': 2,
            'prefer-spread': 2,
            'require-atomic-updates': 2,
            'require-await': 2,
            'require-yield': 2,
            'sort-imports': [2, { allowSeparatedGroups: true }],
            'symbol-description': 2,
            'unicode-bom': 2,
            'use-isnan': 2,
            'valid-typeof': 2,
            'vars-on-top': 2,
            '@stylistic/array-bracket-newline': [2, 'consistent'],
            '@stylistic/array-bracket-spacing': 2,
            '@stylistic/arrow-parens': [2, 'as-needed'],
            '@stylistic/arrow-spacing': 2,
            '@stylistic/block-spacing': 2,
            '@stylistic/comma-dangle': [2, 'always-multiline'],
            '@stylistic/comma-spacing': 2,
            '@stylistic/comma-style': 2,
            '@stylistic/computed-property-spacing': 2,
            '@stylistic/curly-newline': 2,
            '@stylistic/dot-location': [2, 'property'],
            '@stylistic/eol-last': 2,
            '@stylistic/func-call-spacing': 2,
            '@stylistic/function-call-argument-newline': [2, 'consistent'],
            '@stylistic/function-call-spacing': 2,
            '@stylistic/generator-star-spacing': [2, { before: false, after: true }],
            '@stylistic/indent': 2,
            '@stylistic/jsx-child-element-spacing': 2,
            '@stylistic/jsx-closing-bracket-location': 2,
            '@stylistic/jsx-closing-tag-location': [2, 'line-aligned'],
            '@stylistic/jsx-curly-brace-presence': [2, { propElementValues: 'always' }],
            '@stylistic/jsx-curly-spacing': 2,
            '@stylistic/jsx-equals-spacing': 2,
            '@stylistic/jsx-first-prop-new-line': 2,
            '@stylistic/jsx-function-call-newline': 2,
            '@stylistic/jsx-indent-props': 2,
            '@stylistic/jsx-max-props-per-line': [2, { when: 'multiline' }],
            '@stylistic/jsx-pascal-case': [2, { allowAllCaps: true }],
            '@stylistic/jsx-props-no-multi-spaces': 2,
            '@stylistic/jsx-quotes': 2,
            '@stylistic/jsx-self-closing-comp': 2,
            '@stylistic/jsx-sort-props': [2, { callbacksLast: true, reservedFirst: true }],
            '@stylistic/jsx-tag-spacing': [2, { beforeClosing: 'never' }],
            '@stylistic/key-spacing': 2,
            '@stylistic/keyword-spacing': 2,
            '@stylistic/line-comment-position': 2,
            '@stylistic/linebreak-style': 2,
            '@stylistic/max-len': [2, { code: 100 }],
            '@stylistic/member-delimiter-style': 2,
            '@stylistic/multiline-comment-style': 2,
            '@stylistic/no-extra-parens': [2, 'functions'],
            '@stylistic/no-extra-semi': 2,
            '@stylistic/no-mixed-spaces-and-tabs': 2,
            '@stylistic/no-multi-spaces': 2,
            '@stylistic/no-tabs': 2,
            '@stylistic/no-trailing-spaces': 2,
            '@stylistic/no-whitespace-before-property': 2,
            '@stylistic/nonblock-statement-body-position': 2,
            '@stylistic/object-curly-newline': 2,
            '@stylistic/object-curly-spacing': [2, 'always'],
            '@stylistic/operator-linebreak': [2, 'before'],
            '@stylistic/padded-blocks': [2, 'never'],
            '@stylistic/padding-line-between-statements': 2,
            '@stylistic/quote-props': [2, 'consistent-as-needed'],
            '@stylistic/quotes': [2, 'single'],
            '@stylistic/rest-spread-spacing': 2,
            '@stylistic/semi': 2,
            '@stylistic/semi-spacing': 2,
            '@stylistic/semi-style': 2,
            '@stylistic/space-before-blocks': 2,
            '@stylistic/space-before-function-paren': [2, { named: 'never' }],
            '@stylistic/space-in-parens': 2,
            '@stylistic/space-infix-ops': 2,
            '@stylistic/space-unary-ops': 2,
            '@stylistic/spaced-comment': 2,
            '@stylistic/switch-colon-spacing': 2,
            '@stylistic/template-curly-spacing': 2,
            '@stylistic/template-tag-spacing': 2,
            '@stylistic/type-annotation-spacing': 2,
            '@stylistic/type-generic-spacing': 2,
            '@stylistic/type-named-tuple-spacing': 2,
            '@stylistic/wrap-iife': 2,
            '@stylistic/yield-star-spacing': 2,
        },
    }, {
        files: ['udemy/**'],
        rules: { 'logical-assignment-operators': 0 },
    }, {
        files: ['problems/medium/2001-2500/2408.mjs'],
        rules: { 'no-empty-function': 0 },
    }, {
        files: ['problems/medium/2501-3000/2847.mjs'],
        rules: { 'no-loss-of-precision': 0 },
    }, {
        files: ['problems/medium/1001-1500/1500.mjs'],
        rules: { 'no-object-constructor': 0 },
    }, {
        files: ['problems/medium/3001-3500/3094.mjs'],
        rules: { 'no-self-compare': 0 },
    }, {
        files: ['problems/medium/2001-2500/2304.js'],
        rules: { 'no-unmodified-loop-condition': 0 },
    }, {
        files: ['**/*.jsx'],
        rules: { '@stylistic/comma-dangle': 0 },
    }, {
        files: ['tests/**'],
        rules: { '@stylistic/max-len': [2, { code: 121 }] },
    },
];
