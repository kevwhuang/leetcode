// 703 - Kth Largest Element in a Stream

class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */

    constructor(k, nums) {
        this.k = k;
        this.heap = new PriorityQueue({ compare: (a, b) => a - b });
        nums.forEach(e => this.heap.enqueue(e));
    }

    /**
     * @param {number} val
     * @returns {number}
     */

    add(val) {
        this.heap.enqueue(val);
        while (this.heap.size() > this.k) this.heap.dequeue();
        return this.heap.front();
    }
}

module.exports = KthLargest;
