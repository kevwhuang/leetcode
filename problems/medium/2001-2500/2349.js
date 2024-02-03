// 2349 - Design a Number Container System

class NumberContainers {
    constructor() {
        this.indices = new Map();
        this.nums = new Map();
    }
    change(index, number) {
        this.indices.set(index, number);
        if (!this.nums.has(number)) this.nums.set(number, new MinHeap());
        this.nums.get(number).enqueue(index);
    }
    find(number) {
        if (!this.nums.has(number)) return -1;
        const heap = this.nums.get(number), vals = heap.vals;
        while (vals.length > 1 && number !== this.indices.get(vals[1])) {
            heap.dequeue();
        }
        return vals.length > 1 ? vals[1] : -1;
    }
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
