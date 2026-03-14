const generateParenthesis = require('../../neetcode/stack/generate-parentheses');

describe('Main', () => {
    test('Case 1', () => {
        const solution = ['((()))', '(()())', '(())()', '()(())', '()()()'];
        expect(generateParenthesis(3)).toStrictEqual(solution);
    });
    test('Case 2', () => {
        expect(generateParenthesis(1)).toStrictEqual(['()']);
    });
});
