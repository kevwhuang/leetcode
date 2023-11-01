const isNStraightHand = require('../../neetcode/greedy/hand-of-straights');

describe('Main', () => {
    test('Case 1', () => {
        expect(isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3)).toBeTruthy();
    });

    test('Case 2', () => {
        expect(isNStraightHand([1, 2, 3, 4, 5], 4)).toBeFalsy();
    });
});
