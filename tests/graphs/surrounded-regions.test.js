const solve = require('../../neetcode/graphs/surrounded-regions');

describe('Main', () => {
    test('Case 1', () => {
        const board = [
            ['X', 'X', 'X', 'X'],
            ['X', 'O', 'O', 'X'],
            ['X', 'X', 'O', 'X'],
            ['X', 'O', 'X', 'X'],
        ];
        const solution = [
            ['X', 'X', 'X', 'X'],
            ['X', 'X', 'X', 'X'],
            ['X', 'X', 'X', 'X'],
            ['X', 'O', 'X', 'X'],
        ];
        expect(solve(board)).toStrictEqual(solution);
    });
    test('Case 2', () => {
        expect(solve([['X']])).toStrictEqual([['X']]);
    });
});
