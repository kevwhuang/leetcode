const reverse = require('../../neetcode/bit-manipulation/reverse-integer');

describe('Main', () => {
    test('Case 1', () => {
        expect(reverse(123)).toStrictEqual(321);
    });
    test('Case 2', () => {
        expect(reverse(-123)).toStrictEqual(-321);
    });
    test('Case 3', () => {
        expect(reverse(120)).toStrictEqual(21);
    });
});
