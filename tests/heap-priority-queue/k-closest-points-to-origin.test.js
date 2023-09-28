const kClosest = require('../../neetcode/heap-priority-queue/k-closest-points-to-origin');

describe('Main', () => {
    test('Case 1', () => {
        expect(kClosest([[1, 3], [-2, 2]], 1)).toStrictEqual([[-2, 2]]);
    });

    test('Case 2', () => {
        const points = [[3, 3], [5, -1], [-2, 4]];
        expect(kClosest(points, 2)).toStrictEqual([[3, 3], [-2, 4]]);
    });
});
