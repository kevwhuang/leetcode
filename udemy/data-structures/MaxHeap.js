class MaxHeap {
    constructor() {
        this.vals = [null];
    }

    extract() {
        if (this.vals.length === 1) return null;
        if (this.data.length === 2) return this.vals.pop();
        const root = this.vals[1];
        this.vals[1] = this.vals.pop();
        let top = 1, l = 2, r = 3;
        let next = !this.vals[r] || this.vals[l] > this.vals[r] ? l : r;
        while (this.vals[top] < this.vals[next]) {
            [this.vals[top], this.vals[next]] = [this.vals[next], this.vals[top]];
            [top, l, r] = [next, 2 * next, 2 * next + 1];
            next = !this.vals[r] || this.vals[l] > this.vals[r] ? l : r;
        }
        return root;
    }

    insert(val) {
        this.vals.push(val);
        let index = this.vals.length - 1, parent = ~~(index / 2);
        while (parent && val > this.vals[parent]) {
            [this.vals[index], this.vals[parent]] = [this.vals[parent], val];
            [index, parent] = [parent, ~~(parent / 2)];
        }
        return this;
    }
}
