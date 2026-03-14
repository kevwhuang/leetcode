const minCostConnectPoints = require('../../neetcode/advanced-graphs/min-cost-to-connect-all-points');

describe('Main', () => {
    test('Case 1', () => {
        const points = [[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]];
        expect(minCostConnectPoints(points)).toStrictEqual(20);
    });
    test('Case 2', () => {
        expect(minCostConnectPoints([[3, 12], [-2, 5], [-4, 1]])).toStrictEqual(18);
    });
});
