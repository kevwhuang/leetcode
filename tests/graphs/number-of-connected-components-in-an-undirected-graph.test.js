const countComponents = require('../../neetcode/graphs/number-of-connected-components-in-an-undirected-graph');

describe('Main', () => {
    test('Case 1', () => {
        const edges = [[0, 1], [1, 2], [3, 4]];
        expect(countComponents(5, edges)).toStrictEqual(2);
    });
    test('Case 2', () => {
        const edges = [[0, 1], [1, 2], [2, 3], [3, 4]];
        expect(countComponents(5, edges)).toStrictEqual(1);
    });
});
