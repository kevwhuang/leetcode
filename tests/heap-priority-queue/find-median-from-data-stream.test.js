const { PriorityQueue } = require('@datastructures-js/priority-queue');

class MedianFinder {
    constructor() {
        this.heap1 = new PriorityQueue((a, b) => b - a);
        this.heap2 = new PriorityQueue((a, b) => a - b);
    }
    addNum(num) {
        const heap1 = this.heap1, heap2 = this.heap2;
        heap2.enqueue(num);
        heap1.enqueue(heap2.dequeue());
        if (heap2.size() < heap1.size()) heap2.enqueue(heap1.dequeue());
    }
    findMedian() {
        const heap1 = this.heap1, heap2 = this.heap2;
        if (heap1.size() !== heap2.size()) return heap2.front();
        return (heap1.front() + heap2.front()) / 2;
    }
}

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
