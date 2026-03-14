const eraseOverlapIntervals = require('../../neetcode/intervals/non-overlapping-intervals');

describe('Main', () => {
    test('Case 1', () => {
        const intervals = [[1, 2], [2, 3], [3, 4], [1, 3]];
        expect(eraseOverlapIntervals(intervals)).toStrictEqual(1);
    });
    test('Case 2', () => {
        expect(eraseOverlapIntervals([[1, 2], [1, 2], [1, 2]])).toStrictEqual(2);
    });
    test('Case 3', () => {
        expect(eraseOverlapIntervals([[1, 2], [2, 3]])).toStrictEqual(0);
    });
});
