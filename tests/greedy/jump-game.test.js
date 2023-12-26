const canJump = require('../../neetcode/greedy/jump-game');

describe('Main', () => {
    test('Case 1', () => {
        expect(canJump([2, 3, 1, 1, 4])).toBeTruthy();
    });
    test('Case 2', () => {
        expect(canJump([3, 2, 1, 0, 4])).toBeFalsy();
    });
});
