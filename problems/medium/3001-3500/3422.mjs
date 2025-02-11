// 3422 - Minimum Operations to Make Subarray Elements Equal

function minOperations(nums, k) {
    k--;
    let res = Infinity, acc1 = 0, acc2 = 0, i = -1;
    const heap1 = new Heap((a, b) => a > b);
    const heap2 = new Heap((a, b) => a < b);
    while (++i < nums.length) {
        const cur = nums[i];
        if (cur <= heap1.front()) acc1 += heap1.enqueue(cur);
        else acc2 += heap2.enqueue(cur);
        if (heap1.size < heap2.size) {
            acc1 += heap2.front(), acc2 -= heap1.enqueue(heap2.dequeue());
        } else if (heap1.size > heap2.size + 1) {
            acc1 -= heap1.front(), acc2 += heap2.enqueue(heap1.dequeue());
        }
        if (i < k) continue;
        let m = heap1.front();
        if (heap1.size === heap2.size) m = m + heap2.front() >> 1;
        res = Math.min((heap1.size - heap2.size) * m + acc2 - acc1, res);
        const prev = nums[i - k];
        if (prev <= heap1.front()) acc1 -= heap1.remove(prev);
        else acc2 -= heap2.remove(prev);
        if (heap1.size < heap2.size) {
            acc1 += heap2.front(), acc2 -= heap1.enqueue(heap2.dequeue());
        } else if (heap1.size > heap2.size + 1) {
            acc1 -= heap1.front(), acc2 += heap2.enqueue(heap1.dequeue());
        }
    }
    return res;
}

class Heap {
    constructor(fn) {
        this.heap = [];
        this.size = 0;
        this.B = new Map();
        this.fn = fn;
    }
    dequeue() {
        this.#sanitize();
        this.size--;
        if (this.heap.length === 1) return this.heap.pop();
        const res = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.#bubble();
        return res;
    }
    enqueue(val) {
        this.heap.push(val);
        this.size++;
        let p = this.heap.length - 1;
        while (p) {
            const cur = this.heap[p], pp = p - 1 >> 1;
            if (!this.fn(cur, this.heap[pp])) break;
            this.heap[p] = this.heap[pp], this.heap[pp] = cur, p = pp;
        }
        return val;
    }
    front() {
        this.#sanitize();
        return this.size ? this.heap[0] : null;
    }
    remove(val) {
        this.size--;
        this.B.set(val, (this.B.get(val) ?? 0) + 1);
        return val;
    }
    #bubble() {
        let p = 0;
        const n = this.heap.length;
        while (true) {
            let l = p + p + 1, r = l + 1, pp = p;
            if (l < n && this.fn(this.heap[l], this.heap[pp])) pp = l;
            if (r < n && this.fn(this.heap[r], this.heap[pp])) pp = r;
            if (p === pp) break;
            const cur = this.heap[p];
            this.heap[p] = this.heap[pp], this.heap[pp] = cur, p = pp;
        }
    }
    #sanitize() {
        while (this.B.get(this.heap[0])) {
            this.B.set(this.heap[0], this.B.get(this.heap[0]) - 1);
            if (this.heap.length === 1) return this.heap.pop();
            this.heap[0] = this.heap.pop();
            this.#bubble();
        }
    }
}
