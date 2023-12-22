// 2542 - Maximum Subsequence Score

function maxScore(nums1, nums2, k) {
    const heap = new MinHeap();
    for (let i = 0; i < nums1.length; i++) {
        nums1[i] = [nums1[i], nums2[i]];
    }
    nums1.sort((a, b) => b[1] - a[1]);
    let score = 0, sum = 0;
    for (let i = 0; i < nums1.length; i++) {
        if (i >= k) sum -= heap.dequeue();
        sum += heap.enqueue(nums1[i][0]);
        if (i > k - 2) score = Math.max(sum * nums1[i][1], score);
    }
    return score;
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
