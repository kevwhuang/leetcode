const merge = require('../../neetcode/intervals/merge-intervals');

describe('Main', () => {
    test('Case 1', () => {
        const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
        expect(merge(intervals)).toStrictEqual([[1, 6], [8, 10], [15, 18]]);
    });
    test('Case 2', () => {
        const intervals = [[1, 4], [4, 5]];
        expect(merge(intervals)).toStrictEqual([[1, 5]]);
    });
});
