const combinationSum2 = require('../../neetcode/backtracking/combination-sum-ii');

describe('Main', () => {
    test('Case 1', () => {
        const results = combinationSum2([10, 1, 2, 7, 6, 1, 5], 8);
        const solution = [[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]];
        for (let i = 0; i < results.length; i++) {
            expect(Array.from(results[i])).toStrictEqual(solution[i]);
        }
    });
    test('Case 2', () => {
        const results = combinationSum2([2, 5, 2, 1, 2], 5);
        const solution = [[1, 2, 2], [5]];
        for (let i = 0; i < results.length; i++) {
            expect(Array.from(results[i])).toStrictEqual(solution[i]);
        }
    });
});
