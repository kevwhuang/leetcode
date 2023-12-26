const longestIncreasingPath = require('../../neetcode/2d-dynamic-programming/longest-increasing-path-in-a-matrix');

describe('Main', () => {
    test('Case 1', () => {
        expect(longestIncreasingPath([[9, 9, 4], [6, 6, 8], [2, 1, 1]])).toStrictEqual(4);
    });
    test('Case 2', () => {
        expect(longestIncreasingPath([[3, 4, 5], [3, 2, 6], [2, 2, 1]])).toStrictEqual(4);
    });
    test('Case 3', () => {
        expect(longestIncreasingPath([[1]])).toStrictEqual(1);
    });
});
