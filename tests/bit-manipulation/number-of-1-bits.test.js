const hammingWeight = require('../../neetcode/bit-manipulation/number-of-1-bits');

describe('Main', () => {
    test('Case 1', () => {
        expect(hammingWeight(11)).toStrictEqual(3);
    });
    test('Case 2', () => {
        expect(hammingWeight(128)).toStrictEqual(1);
    });
    test('Case 3', () => {
        expect(hammingWeight(2147483645)).toStrictEqual(30);
    });
});
