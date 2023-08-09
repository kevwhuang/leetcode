const searchMatrix = require('../../neetcode/binary-search/search-a-2d-matrix');

describe('Main', () => {
    test('Case 1', () => {
        const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
        expect(searchMatrix(matrix, 3)).toBeTruthy();
    });

    test('Case 2', () => {
        const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
        expect(searchMatrix(matrix, 13)).toBeFalsy();
    });
});
