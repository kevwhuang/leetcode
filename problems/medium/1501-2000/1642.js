// 1642 - Furthest Building You Can Reach

function furthestBuilding(heights, bricks, ladders) {
    let i = -1;
    const heap = new MaxHeap();
    while (++i < heights.length - 1) {
        const diff = heights[i + 1] - heights[i];
        if (diff <= 0) continue;
        bricks -= heap.enqueue(diff);
        if (bricks >= 0) continue;
        bricks += heap.dequeue();
        ladders--;
        if (ladders < 0) break;
    }
    return i;
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
