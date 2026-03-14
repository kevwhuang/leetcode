const validTree = require('../../neetcode/graphs/graph-valid-tree');

describe('Main', () => {
    test('Case 1', () => {
        const edges = [[0, 1], [0, 2], [0, 3], [1, 4]];
        expect(validTree(5, edges)).toBeTruthy();
    });
    test('Case 2', () => {
        const edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]];
        expect(validTree(5, edges)).toBeFalsy();
    });
});
