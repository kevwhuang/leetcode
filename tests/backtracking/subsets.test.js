const subsets = require('../../neetcode/backtracking/subsets');

describe('Main', () => {
    test('Case 1', () => {
        const solution = [[], [3], [2], [2, 3], [1], [1, 3], [1, 2], [1, 2, 3]];
        expect(subsets([1, 2, 3])).toStrictEqual(solution);
    });

    test('Case 2', () => {
        expect(subsets([0])).toStrictEqual([[], [0]]);
    });
});
