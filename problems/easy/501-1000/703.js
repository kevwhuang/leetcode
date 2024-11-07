// 703 - Kth Largest Element in a Stream

class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.heap = new PriorityQueue({ compare: (a, b) => a - b });
        nums = new Int16Array(nums).sort();
        nums.forEach(e => this.heap.enqueue(e));
    }
    add(val) {
        this.heap.enqueue(val);
        while (this.heap.size() > this.k) this.heap.dequeue();
        return this.heap.front();
    }
}
