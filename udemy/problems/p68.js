// 68 - Binary Heap - extractMax Exercise

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    extractMax() {
        if (this.values.length === 0) return;
        if (this.values.length === 1) return this.values.pop();
        this.values[0] = this.values.pop();
        let top = 0, l = 1, r = 2;
        let next = !this.values[r] || this.values[l] > this.values[r] ? l : r;
        while (this.values[top] < this.values[next]) {
            [this.values[top], this.values[next]] = [this.values[next], this.values[top]];
            [top, l, r] = [next, 2 * next + 1, 2 * next + 2];
            next = !this.values[r] || this.values[l] > this.values[r] ? l : r;
        }
    }
    insert(val) {
        this.values.push(val);
        let index = this.values.length - 1, parent = ~~((index - 1) / 2);
        while (parent >= 0 && val > this.values[parent]) {
            [this.values[index], this.values[parent]] = [this.values[parent], val];
            [index, parent] = [parent, ~~((parent - 1) / 2)];
        }
    }
}
