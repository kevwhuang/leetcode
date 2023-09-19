const minEatingSpeed = require('../../neetcode/binary-search/koko-eating-bananas');

describe('Main', () => {
    test('Case 1', () => {
        expect(minEatingSpeed([3, 6, 7, 11], 8)).toStrictEqual(4);
    });

    test('Case 2', () => {
        expect(minEatingSpeed([30, 11, 23, 4, 20], 5)).toStrictEqual(30);
    });

    test('Case 3', () => {
        expect(minEatingSpeed([30, 11, 23, 4, 20], 6)).toStrictEqual(23);
    });
});
