const KthLargest = require('../../neetcode/heap-priority-queue/kth-largest-element-in-a-stream');

describe('Main', () => {
    test('Case 1', () => {
        const kth = new KthLargest(3, [4, 5, 8, 2]);

        expect(kth.add(3)).toStrictEqual(4);
        expect(kth.add(5)).toStrictEqual(5);
        expect(kth.add(10)).toStrictEqual(5);
        expect(kth.add(9)).toStrictEqual(8);
        expect(kth.add(4)).toStrictEqual(8);
    });
});
