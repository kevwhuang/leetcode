const minInterval = require('../../neetcode/intervals/minimum-interval-to-include-each-query');

describe('Main', () => {
    test('Case 1', () => {
        const intervals = [[1, 4], [2, 4], [3, 6], [4, 4]];
        expect(minInterval(intervals, [2, 3, 4, 5])).toStrictEqual([3, 3, 1, 4]);
    });
    test('Case 2', () => {
        const intervals = [[2, 3], [2, 5], [1, 8], [20, 25]];
        expect(minInterval(intervals, [2, 19, 5, 22])).toStrictEqual([2, -1, 4, 6]);
    });
});
