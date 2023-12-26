const minCostClimbingStairs = require('../../neetcode/1d-dynamic-programming/min-cost-climbing-stairs');

describe('Main', () => {
    test('Case 1', () => {
        expect(minCostClimbingStairs([10, 15, 20])).toStrictEqual(15);
    });
    test('Case 2', () => {
        expect(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toStrictEqual(6);
    });
});
