const findTargetSumWays = require('../../neetcode/2d-dynamic-programming/target-sum');

describe('Main', () => {
    test('Case 1', () => {
        expect(findTargetSumWays([1, 1, 1, 1, 1], 3)).toStrictEqual(5);
    });

    test('Case 2', () => {
        expect(findTargetSumWays([1], 1)).toStrictEqual(1);
    });
});
