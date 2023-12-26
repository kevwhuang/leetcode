const insert = require('../../neetcode/intervals/insert-interval');

describe('Main', () => {
    test('Case 1', () => {
        expect(insert([[1, 3], [6, 9]], [2, 5])).toStrictEqual([[1, 5], [6, 9]]);
    });
    test('Case 2', () => {
        const intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]];
        const solution = [[1, 2], [3, 10], [12, 16]];
        expect(insert(intervals, [4, 8])).toStrictEqual(solution);
    });
});
