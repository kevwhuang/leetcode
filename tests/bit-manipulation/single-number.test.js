const singleNumber = require('../../neetcode/bit-manipulation/single-number');

describe('Main', () => {
    test('Case 1', () => {
        expect(singleNumber([2, 2, 1])).toStrictEqual(1);
    });

    test('Case 2', () => {
        expect(singleNumber([4, 1, 2, 1, 2])).toStrictEqual(4);
    });

    test('Case 3', () => {
        expect(singleNumber([1])).toStrictEqual(1);
    });
});
