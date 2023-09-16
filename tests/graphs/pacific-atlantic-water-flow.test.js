const pacificAtlantic = require('../../neetcode/graphs/pacific-atlantic-water-flow');

describe('Main', () => {
    test('Case 1', () => {
        const heights = [
            [1, 2, 2, 3, 5],
            [3, 2, 3, 4, 4],
            [2, 4, 5, 3, 1],
            [6, 7, 1, 4, 5],
            [5, 1, 1, 2, 4],
        ];
        const solution = [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]];
        expect(pacificAtlantic(heights)).toStrictEqual(solution);
    });

    test('Case 2', () => {
        expect(pacificAtlantic([[1]])).toStrictEqual([[0, 0]]);
    });
});
