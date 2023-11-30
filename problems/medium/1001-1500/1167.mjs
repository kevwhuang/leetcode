// 1167 - Minimum Cost to Connect Sticks

function connectSticks(sticks) {
    const heap = new MinHeap();
    for (let i = 0; i < sticks.length; i++) {
        heap.enqueue(sticks[i]);
    }
    let cost = 0;
    while (true) {
        const n1 = heap.dequeue();
        const n2 = heap.dequeue();
        if (!n2) break;
        cost += heap.enqueue(n1 + n2);
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
        const root = this.vals[1];
        this.vals[1] = this.vals.pop();
        let top = 1, l = 2, r = 3;
        let next = !this.vals[r] || this.vals[l] < this.vals[r] ? l : r;
        while (this.vals[top] > this.vals[next]) {
            [this.vals[top], this.vals[next]] = [this.vals[next], this.vals[top]];
            [top, l, r] = [next, 2 * next, 2 * next + 1];
            next = !this.vals[r] || this.vals[l] < this.vals[r] ? l : r;
        }
        return root;
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
