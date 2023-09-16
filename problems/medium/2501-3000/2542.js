// 2542 - Maximum Subsequence Score

class MinHeap {
    constructor() {
        this.arr = [null];
        this.size = 0;
    }
    pop() {
        if (!this.size--) return;
        const head = this.arr[1];
        this.arr[1] = this.arr.pop();
        let cur = 1, l = 2, r = 3;
        let top = !this.arr[r] || this.arr[l] - this.arr[r] < 0 ? l : r;
        while (this.arr[top] && this.arr[cur] - this.arr[top] > 0) {
            [this.arr[cur], this.arr[top]] = [this.arr[top], this.arr[cur]];
            [cur, l, r] = [top, top * 2, top * 2 + 1];
            top = !this.arr[r] || this.arr[l] - this.arr[r] < 0 ? l : r;
        }
        return head;
    }
    push(val) {
        this.arr.push(val);
        let cur = ++this.size, top = ~~(cur / 2);
        while (top && this.arr[cur] - this.arr[top] < 0) {
            [this.arr[cur], this.arr[top]] = [this.arr[top], this.arr[cur]];
            [top, cur] = [~~(top / 2), top];
        }
        return val;
    }
}

function maxScore(nums1, nums2, k) {
    const heap = new MinHeap();
    for (let i = 0; i < nums1.length; i++) {
        nums1[i] = [nums1[i], nums2[i]];
    }
    nums1.sort((a, b) => b[1] - a[1]);
    let score = 0, sum = 0;
    for (let i = 0; i < nums1.length; i++) {
        if (i >= k) sum -= heap.pop();
        sum += heap.push(nums1[i][0]);
        if (i > k - 2) score = Math.max(sum * nums1[i][1], score);
    }
    return score;
}
