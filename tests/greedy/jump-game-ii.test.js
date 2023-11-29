const jump = require('../../neetcode/greedy/jump-game-ii');

describe('Main', () => {
    test('Case 1', () => {
        expect(jump([2, 3, 1, 1, 4])).toStrictEqual(2);
    });

    test('Case 2', () => {
        expect(jump([2, 3, 0, 1, 4])).toStrictEqual(2);
    });
});
