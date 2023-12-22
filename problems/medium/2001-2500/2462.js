// 2462 - Total Cost to Hire K Workers

function totalCost(costs, k, candidates) {
    let cost = 0;
    let l = candidates - 1;
    let r = costs.length - candidates;
    if (costs.length === k || l >= r) {
        const heap = new MinHeap();
        for (let i = 0; i < costs.length; i++) {
            heap.enqueue(costs[i]);
        }
        while (k--) cost += heap.dequeue();
        return cost;
    }
    const heapLeft = new MinHeap();
    const heapRight = new MinHeap();
    for (let i = 0; i <= l; i++) {
        heapLeft.enqueue(costs[i]);
    }
    for (let i = r; i < costs.length; i++) {
        heapRight.enqueue(costs[i]);
    }
    while (k--) {
        if (heapLeft.vals[1] <= heapRight.vals[1]) {
            cost += heapLeft.dequeue();
            if (l + 1 === r) continue;
            heapLeft.enqueue(costs[++l]);
        } else {
            cost += heapRight.dequeue();
            if (l + 1 === r) continue;
            heapRight.enqueue(costs[--r]);
        }
    }
    return cost;
}

class MinHeap {
    constructor() {
        this.vals = [null];
    }
    dequeue() {
        if (this.vals.length === 1) return null;
        if (this.vals.length === 2) return this.vals.pop();
        const val = this.vals[1];
        this.vals[1] = this.vals.pop();
        let top = 1, l = 2, r = 3;
        let next = !this.vals[r] || this.vals[l] < this.vals[r] ? l : r;
        while (this.vals[top] > this.vals[next]) {
            [this.vals[top], this.vals[next]] = [this.vals[next], this.vals[top]];
            [top, l, r] = [next, 2 * next, 2 * next + 1];
            next = !this.vals[r] || this.vals[l] < this.vals[r] ? l : r;
        }
        return val;
    }
    enqueue(val) {
        this.vals.push(val);
        let index = this.vals.length - 1, parent = ~~(index / 2);
        while (parent && val < this.vals[parent]) {
            [this.vals[index], this.vals[parent]] = [this.vals[parent], val];
            [index, parent] = [parent, ~~(parent / 2)];
        }
        return val;
    }
}
