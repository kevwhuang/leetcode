// 295 - Find Median From Data Stream

class MedianFinder {
    constructor() {
        this.heap1 = new PriorityQueue({ compare: (a, b) => b - a });
        this.heap2 = new PriorityQueue({ compare: (a, b) => a - b });
    }

    /**
     * @param {number} num
     * @return {void}
     */

    addNum(num) {
        const heap1 = this.heap1, heap2 = this.heap2;
        heap2.enqueue(num);
        heap1.enqueue(heap2.dequeue());
        if (heap2.size() < heap1.size()) heap2.enqueue(heap1.dequeue());
    }

    /**
     * @return {number}
     */

    findMedian() {
        const heap1 = this.heap1, heap2 = this.heap2;
        if (heap1.size() !== heap2.size()) return heap2.front();
        return (heap1.front() + heap2.front()) / 2;
    }
}

module.exports = MedianFinder;
