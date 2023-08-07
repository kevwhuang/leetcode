const multiply = require('../../neetcode/math-geometry/multiply-strings');

describe('Main', () => {
    test('Case 1', () => {
        expect(multiply('2', '3')).toStrictEqual('6');
    });

    test('Case 2', () => {
        expect(multiply('123', '456')).toStrictEqual('56088');
    });
});
