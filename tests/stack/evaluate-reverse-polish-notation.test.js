const evalRPN = require('../../neetcode/stack/evaluate-reverse-polish-notation');

describe('Main', () => {
    test('Case 1', () => {
        expect(evalRPN(['2', '1', '+', '3', '*'])).toStrictEqual(9);
    });

    test('Case 2', () => {
        expect(evalRPN(['4', '13', '5', '/', '+'])).toStrictEqual(6);
    });

    test('Case 3', () => {
        const tokens = ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'];
        expect(evalRPN(tokens)).toStrictEqual(22);
    });
});
