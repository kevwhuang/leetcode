class MinPriorityQueue {
    constructor() {
        this.data = [null];
    }

    dequeue() {
        if (this.data.length === 1) return null;
        if (this.data.length === 2) return this.data.pop()[0];
        const root = this.data[1][0];
        this.data[1] = this.data.pop();
        let top = 1, l = 2, r = 3;
        let next = !this.data[r] || this.data[l][1] < this.data[r][1] ? l : r;
        while (this.data[top]?.[1] > this.data[next]?.[1]) {
            [this.data[top], this.data[next]] = [this.data[next], this.data[top]];
            [top, l, r] = [next, 2 * next, 2 * next + 1];
            next = !this.data[r] || this.data[l][1] < this.data[r][1] ? l : r;
        }
        return root;
    }

    enqueue(val, priority) {
        this.data.push([val, priority]);
        let index = this.data.length - 1, parent = ~~(index / 2);
        while (parent && priority < this.data[parent][1]) {
            [this.data[index], this.data[parent]] = [this.data[parent], this.data[index]];
            [index, parent] = [parent, ~~(parent / 2)];
        }
        return this;
    }
}
