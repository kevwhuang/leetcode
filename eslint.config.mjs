export default [{
    files: ['**/*.js'],
    ignores: ['tests/**'],
    languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    linterOptions: {
        noInlineConfig: true,
        reportUnusedDisableDirectives: true,
    },
    plugins: {
        '@stylistic': (await import('@stylistic/eslint-plugin')).default,
    },
    rules: {
        '@stylistic/eol-last': 2,
        '@stylistic/implicit-arrow-linebreak': 2,
        '@stylistic/indent': 2,
        '@stylistic/max-len': [2, { code: 100 }],
        '@stylistic/no-multiple-empty-lines': 2,
        '@stylistic/no-trailing-spaces': 2,
        '@stylistic/operator-linebreak': [2, 'before'],
        '@stylistic/padded-blocks': [2, 'never'],
        '@stylistic/quote-props': [2, 'as-needed'],
        '@stylistic/quotes': [2, 'single'],
        '@stylistic/semi': 2,
        'no-console': 2,
        'no-else-return': 2,
        'no-var': 2,
    },
}];
