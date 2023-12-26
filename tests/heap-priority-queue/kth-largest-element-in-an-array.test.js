const findKthLargest = require('../../neetcode/heap-priority-queue/kth-largest-element-in-an-array');

describe('Main', () => {
    test('Case 1', () => {
        expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toStrictEqual(5);
    });
    test('Case 2', () => {
        expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toStrictEqual(4);
    });
});
