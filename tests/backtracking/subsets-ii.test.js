const subsetsWithDup = require('../../neetcode/backtracking/subsets-ii');

describe('Main', () => {
    test('Case 1', () => {
        const solution = [[], [2], [2, 2], [1], [1, 2], [1, 2, 2]];
        expect(subsetsWithDup([1, 2, 2])).toStrictEqual(solution);
    });

    test('Case 2', () => {
        expect(subsetsWithDup([0])).toStrictEqual([[], [0]]);
    });
});
