const setZeroes = require('../../neetcode/math-geometry/set-matrix-zeroes');

describe('Main', () => {
    test('Case 1', () => {
        const matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
        const output = [[1, 0, 1], [0, 0, 0], [1, 0, 1]];
        expect(setZeroes(matrix)).toStrictEqual(output);
    });

    test('Case 2', () => {
        const matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
        const output = [[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]];
        expect(setZeroes(matrix)).toStrictEqual(output);
    });
});
