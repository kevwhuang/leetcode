const combinationSum = require('../../neetcode/backtracking/combination-sum');

describe('Main', () => {
    test('Case 1', () => {
        const results = combinationSum([2, 3, 6, 7], 7);
        const solution = [[2, 2, 3], [7]];
        for (let i = 0; i < results.length; i++) {
            expect(Array.from(results[i])).toStrictEqual(solution[i]);
        }
    });
    test('Case 2', () => {
        const results = combinationSum([2, 3, 5], 8);
        const solution = [[2, 2, 2, 2], [2, 3, 3], [3, 5]];
        for (let i = 0; i < results.length; i++) {
            expect(Array.from(results[i])).toStrictEqual(solution[i]);
        }
    });
    test('Case 3', () => {
        expect(combinationSum([2], 1)).toStrictEqual([]);
    });
});
