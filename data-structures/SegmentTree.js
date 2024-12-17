class SegmentTree {
    constructor(vals) {
        this.size = vals.length;
        this.tree = [null, ...new Array(vals.length), ...vals];
        for (let i = vals.length - 1; i; i--) {
            this.tree[i] = Math.max(this.tree[2 * i], this.tree[2 * i + 1]);
        }
    }
    max(start, end) {
        start += this.size;
        end += this.size + 1;
        let res = -Infinity;
        while (start < end) {
            if (start & 1) res = Math.max(this.tree[start++], res);
            if (end & 1) res = Math.max(this.tree[--end], res);
            start >>= 1;
            end >>= 1;
        }
        return res;
    }
    update(idx, val) {
        idx += this.size;
        this.tree[idx] = val;
        while (idx > 1) {
            idx >>= 1;
            const max = Math.max(this.tree[2 * idx], this.tree[2 * idx + 1]);
            if (this.tree[idx] === max) break;
            this.tree[idx] = max;
        }
        return val;
    }
}

module.exports = SegmentTree;
