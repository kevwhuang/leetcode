const longestConsecutive = require('../../algorithms/arrays-hashing/longest-consecutive-sequence');

describe('Main', () => {
    test('Case 1', () => {
        expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toStrictEqual(4);
    });

    test('Case 2', () => {
        expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toStrictEqual(9);
    });
});
