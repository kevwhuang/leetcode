// 295 - Find Median From Data Stream

class MedianFinder {
    constructor() {
        this.heap1 = new PriorityQueue({ compare: (a, b) => a - b });
        this.heap2 = new PriorityQueue({ compare: (a, b) => b - a });
    }
    addNum(num) {
        const heap1 = this.heap1, heap2 = this.heap2;
        if (heap1.front() < num) heap1.enqueue(num);
        else heap2.enqueue(num);
        const size1 = heap1.size(), size2 = heap2.size();
        if (size1 + 1 < size2) heap1.enqueue(heap2.dequeue());
        else if (size1 - 1 > size2) heap2.enqueue(heap1.dequeue());
    }
    findMedian() {
        const heap1 = this.heap1, heap2 = this.heap2;
        if (heap1.size() > heap2.size()) return heap1.front();
        if (heap1.size() < heap2.size()) return heap2.front();
        return (heap1.front() + heap2.front()) / 2;
    }
}
