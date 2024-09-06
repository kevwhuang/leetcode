const { PriorityQueue } = require('@datastructures-js/priority-queue');

class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.heap = new PriorityQueue((a, b) => a - b);
        nums.forEach(e => this.heap.enqueue(e));
    }
    add(val) {
        this.heap.enqueue(val);
        while (this.heap.size() > this.k) this.heap.dequeue();
        return this.heap.front();
    }
}

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
