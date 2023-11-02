// 2583 - Kth Largest Sum in a Binary Tree

function kthLargestLevelSum(root, k) {
    const heap = new MaxHeap();
    let queue = [root];
    while (queue.length) {
        const newQueue = [];
        let sum = 0;
        for (let i = 0; i < queue.length; i++) {
            const node = queue[i];
            sum += node.val;
            if (node.left) newQueue.push(node.left);
            if (node.right) newQueue.push(node.right);
        }
        heap.insert(sum);
        queue = newQueue;
    }
    if (k >= heap.heap.length) return -1;
    while (--k) heap.extract();
    return heap.extract();
}

class MaxHeap {
    constructor() {
        this.heap = [null];
    }
    extract() {
        if (this.heap.length === 2) return this.heap.pop();
        const val = this.heap[1];
        this.heap[1] = this.heap.pop();
        let top = 1, l = 2, r = 3;
        let next = !this.heap[r] || this.heap[l] > this.heap[r] ? l : r;
        while (this.heap[top] < this.heap[next]) {
            [this.heap[top], this.heap[next]] = [this.heap[next], this.heap[top]];
            [top, l, r] = [next, 2 * next, 2 * next + 1];
            next = !this.heap[r] || this.heap[l] > this.heap[r] ? l : r;
        }
        return val;
    }
    insert(val) {
        this.heap.push(val);
        let index = this.heap.length - 1, parent = ~~(index / 2);
        while (parent && val > this.heap[parent]) {
            [this.heap[index], this.heap[parent]] = [this.heap[parent], val];
            [index, parent] = [parent, ~~(parent / 2)];
        }
    }
}
