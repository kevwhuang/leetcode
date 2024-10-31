const permute = require('../../neetcode/backtracking/permutations');

describe('Main', () => {
    test('Case 1', () => {
        const results = permute([1, 2, 3]);
        const solution = [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 2, 1], [3, 1, 2]];
        for (let i = 0; i < results.length; i++) {
            expect(Array.from(results[i])).toStrictEqual(solution[i]);
        }
    });
    test('Case 2', () => {
        const results = permute([0, 1]);
        const solution = [[0, 1], [1, 0]];
        for (let i = 0; i < results.length; i++) {
            expect(Array.from(results[i])).toStrictEqual(solution[i]);
        }
    });
    test('Case 3', () => {
        const results = permute([1]);
        const solution = [[1]];
        for (let i = 0; i < results.length; i++) {
            expect(Array.from(results[i])).toStrictEqual(solution[i]);
        }
    });
});
