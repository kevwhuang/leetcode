const permute = require('../../neetcode/backtracking/permutations');

describe('Main', () => {
    test('Case 1', () => {
        const solution = [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 2, 1], [3, 1, 2]];
        expect(permute([1, 2, 3])).toStrictEqual(solution);
    });

    test('Case 2', () => {
        expect(permute([0, 1])).toStrictEqual([[0, 1], [1, 0]]);
    });

    test('Case 3', () => {
        expect(permute([1])).toStrictEqual([[1]]);
    });
});
