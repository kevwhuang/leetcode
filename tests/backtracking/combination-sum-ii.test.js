const combinationSum2 = require('../../neetcode/backtracking/combination-sum-ii');

describe('Main', () => {
    test('Case 1', () => {
        const solution = [[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]];
        expect(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)).toStrictEqual(solution);
    });

    test('Case 2', () => {
        expect(combinationSum2([2, 5, 2, 1, 2], 5)).toStrictEqual([[1, 2, 2], [5]]);
    });
});
