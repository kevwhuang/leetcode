const subsetsWithDup = require('../../neetcode/backtracking/subsets-ii');

describe('Main', () => {
    test('Case 1', () => {
        const results = subsetsWithDup([1, 2, 2]);
        const solution = [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]];
        for (let i = 0; i < results.length; i++) {
            expect(Array.from(results[i])).toStrictEqual(solution[i]);
        }
    });
    test('Case 2', () => {
        const results = subsetsWithDup([0]);
        const solution = [[], [0]];
        for (let i = 0; i < results.length; i++) {
            expect(Array.from(results[i])).toStrictEqual(solution[i]);
        }
    });
});
