const threeSum = require('../../algorithms/two-pointers/3sum');

describe('Main', () => {
    test('Case 1', () => {
        expect(threeSum([-1, 0, 1, 2, -1, -4])).toStrictEqual([[-1, -1, 2], [-1, 0, 1]]);
    });

    test('Case 2', () => {
        expect(threeSum([0, 1, 1])).toStrictEqual([]);
    });

    test('Case 3', () => {
        expect(threeSum([0, 0, 0])).toStrictEqual([[0, 0, 0]]);
    });
});
