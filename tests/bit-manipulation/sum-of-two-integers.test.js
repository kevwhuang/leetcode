const getSum = require('../../neetcode/bit-manipulation/sum-of-two-integers');

describe('Main', () => {
    test('Case 1', () => {
        expect(getSum(1, 2)).toStrictEqual(3);
    });
    test('Case 2', () => {
        expect(getSum(2, 3)).toStrictEqual(5);
    });
});
