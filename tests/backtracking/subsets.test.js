const subsets = require('../../neetcode/backtracking/subsets');

describe('Main', () => {
    test('Case 1', () => {
        const results = subsets([1, 2, 3]);
        const solution = [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]];
        for (let i = 0; i < results.length; i++) {
            expect(Array.from(results[i])).toStrictEqual(solution[i]);
        }
    });
    test('Case 2', () => {
        const results = subsets([0]);
        const solution = [[], [0]];
        for (let i = 0; i < results.length; i++) {
            expect(Array.from(results[i])).toStrictEqual(solution[i]);
        }
    });
});
