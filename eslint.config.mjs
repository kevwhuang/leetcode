const eslint = {
    ignores: ['tests/**'],
    rules: {
        indent: [2, 4, { SwitchCase: 1 }],
        quotes: [2, 'single'],
        semi: 2,
        'eol-last': 2,
        'implicit-arrow-linebreak': 2,
        'max-len': [2, { code: 100 }],
        'no-console': 2,
        'no-else-return': 2,
        'no-multiple-empty-lines': 2,
        'no-trailing-spaces': 2,
        'no-var': 2,
        'operator-linebreak': [2, 'before'],
        'padded-blocks': [2, 'never'],
        'quote-props': [2, 'as-needed'],
    },
};

export default [eslint];
