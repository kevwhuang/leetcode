const findRedundantConnection = require('../../neetcode/graphs/redundant-connection');

describe('Main', () => {
    test('Case 1', () => {
        expect(findRedundantConnection([[1, 2], [1, 3], [2, 3]])).toStrictEqual([2, 3]);
    });

    test('Case 2', () => {
        const edges = [[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]];
        expect(findRedundantConnection(edges)).toStrictEqual([1, 4]);
    });
});
