const exist = require('../../neetcode/backtracking/word-search');

describe('Main', () => {
    const board = [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E'],
    ];
    test('Case 1', () => {
        expect(exist(board, 'ABCCED')).toBeTruthy();
    });
    test('Case 2', () => {
        expect(exist(board, 'SEE')).toBeTruthy();
    });
    test('Case 3', () => {
        expect(exist(board, 'ABCB')).toBeFalsy();
    });
});
