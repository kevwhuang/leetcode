const solve = require('../../algorithms/graphs/surrounded-regions');

describe('Main', () => {
    test('Case 1', () => {
        const board = [
            ['X', 'X', 'X', 'X'],
            ['X', 'O', 'O', 'X'],
            ['X', 'X', 'O', 'X'],
            ['X', 'O', 'X', 'X'],
        ];
        const output = [
            ['X', 'X', 'X', 'X'],
            ['X', 'X', 'X', 'X'],
            ['X', 'X', 'X', 'X'],
            ['X', 'O', 'X', 'X'],
        ];

        expect(solve(board)).toStrictEqual(output);
    });

    test('Case 2', () => {
        expect(solve([['X']])).toStrictEqual([['X']]);
    });
});
