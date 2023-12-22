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
        heap.enqueue(sum);
        queue = newQueue;
    }
    if (k >= heap.vals.length) return -1;
    while (--k) heap.dequeue();
    return heap.dequeue();
}

class MaxHeap {
    constructor() {
        this.vals = [null];
    }
    dequeue() {
        if (this.vals.length === 1) return null;
        if (this.vals.length === 2) return this.vals.pop();
        const val = this.vals[1];
        this.vals[1] = this.vals.pop();
        let top = 1, l = 2, r = 3;
        let next = !this.vals[r] || this.vals[l] > this.vals[r] ? l : r;
        while (this.vals[top] < this.vals[next]) {
            [this.vals[top], this.vals[next]] = [this.vals[next], this.vals[top]];
            [top, l, r] = [next, 2 * next, 2 * next + 1];
            next = !this.vals[r] || this.vals[l] > this.vals[r] ? l : r;
        }
        return val;
    }
    enqueue(val) {
        this.vals.push(val);
        let index = this.vals.length - 1, parent = ~~(index / 2);
        while (parent && val > this.vals[parent]) {
            [this.vals[index], this.vals[parent]] = [this.vals[parent], val];
            [index, parent] = [parent, ~~(parent / 2)];
        }
        return val;
    }
}
