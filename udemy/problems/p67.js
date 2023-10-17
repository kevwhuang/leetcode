// 67 - Binary Heap - insert Exercise

class MaxBinaryHeap {
    constructor() {
        this.values = [];
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
