const countBits = require('../../neetcode/bit-manipulation/counting-bits');

describe('Main', () => {
    test('Case 1', () => {
        expect(Array.from(countBits(2))).toStrictEqual([0, 1, 1]);
    });
    test('Case 2', () => {
        expect(Array.from(countBits(5))).toStrictEqual([0, 1, 1, 2, 1, 2]);
    });
});
