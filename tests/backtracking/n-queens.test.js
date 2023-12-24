const solveNQueens = require('../../neetcode/backtracking/n-queens');

describe('Main', () => {
    test('Case 1', () => {
        const solution = [['.Q..', '...Q', 'Q...', '..Q.'], ['..Q.', 'Q...', '...Q', '.Q..']];
        expect(solveNQueens(4)).toStrictEqual(solution);
    });

    test('Case 2', () => {
        expect(solveNQueens(1)).toStrictEqual([['Q']]);
    });
});
