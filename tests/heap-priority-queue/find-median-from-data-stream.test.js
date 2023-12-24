const MedianFinder = require('../../neetcode/heap-priority-queue/find-median-from-data-stream');

describe('Main', () => {
    test('Case 1', () => {
        const medianFinder = new MedianFinder();
        medianFinder.addNum(1);
        medianFinder.addNum(2);
        expect(medianFinder.findMedian()).toStrictEqual(1.5);
        medianFinder.addNum(3);
        expect(medianFinder.findMedian()).toStrictEqual(2);
    });
});
