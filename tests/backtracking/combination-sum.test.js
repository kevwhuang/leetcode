const combinationSum = require('../../neetcode/backtracking/combination-sum');

describe('Main', () => {
    test('Case 1', () => {
        expect(combinationSum([2, 3, 6, 7], 7)).toStrictEqual([[2, 2, 3], [7]]);
    });

    test('Case 2', () => {
        const solution = [[2, 2, 2, 2], [2, 3, 3], [3, 5]];
        expect(combinationSum([2, 3, 5], 8)).toStrictEqual(solution);
    });

    test('Case 3', () => {
        expect(combinationSum([2], 1)).toStrictEqual([]);
    });
});
