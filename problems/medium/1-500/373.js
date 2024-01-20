// 373 - Find K Pairs With Smallest Sums

function kSmallestPairs(nums1, nums2, k) {
    const pq = new MinimumPriorityQueue();
    const bound = Math.min(nums1.length, k);
    for (let i = 0; i < bound; i++) {
        pq.enqueue([i, 0, nums1[i] + nums2[0]]);
    }
    const pairs = new Array(k);
    for (let i = 0; i < k; i++) {
        let [p1, p2] = pq.dequeue();
        pairs[i] = [nums1[p1], nums2[p2]];
        if (++p2 === nums2.length) continue;
        pq.enqueue([p1, p2, nums1[p1] + nums2[p2]]);
    }
    return pairs;
}

class MinimumPriorityQueue {
    constructor() {
        this.vals = [null];
    }
    dequeue() {
        if (this.vals.length === 1) return null;
        if (this.vals.length === 2) return this.vals.pop();
        const val = this.vals[1];
        this.vals[1] = this.vals.pop();
        let top = 1, l = 2, r = 3;
        let next = !this.vals[r] || this.vals[l][2] < this.vals[r][2] ? l : r;
        while (this.vals[top]?.[2] > this.vals[next]?.[2]) {
            [this.vals[top], this.vals[next]] = [this.vals[next], this.vals[top]];
            [top, l, r] = [next, 2 * next, 2 * next + 1];
            next = !this.vals[r] || this.vals[l][2] < this.vals[r][2] ? l : r;
        }
        return val;
    }
    enqueue(val) {
        this.vals.push(val);
        let index = this.vals.length - 1, parent = ~~(index / 2);
        while (parent && val[2] < this.vals[parent][2]) {
            [this.vals[index], this.vals[parent]] = [this.vals[parent], val];
            [index, parent] = [parent, ~~(parent / 2)];
        }
        return val;
    }
}
