class SegmentTree {
    constructor(vals) {
        this.n = vals.length;
        this.tree = new Array(vals.length).concat(vals);
        this.tree[0] = null;
        for (let i = vals.length - 1; i; i--) {
            this.tree[i] = Math.max(this.tree[2 * i], this.tree[2 * i + 1]);
        }
    }
    getMax(start, end) {
        start += this.n;
        end += this.n + 1;
        let max = -Infinity;
        while (start < end) {
            if (start & 1) max = Math.max(this.tree[start++], max);
            if (end & 1) max = Math.max(this.tree[--end], max);
            start >>= 1;
            end >>= 1;
        }
        return max;
    }
    update(index, val) {
        index += this.n;
        this.tree[index] = val;
        while (index > 1) {
            index >>= 1;
            const max = Math.max(this.tree[2 * index], this.tree[2 * index + 1]);
            if (this.tree[index] === max) break;
            this.tree[index] = max;
        }
    }
}

module.exports = SegmentTree;
