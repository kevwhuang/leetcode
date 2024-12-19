class BinaryIndexedTree {
    constructor(vals) {
        this.vals = vals;
        this.tree = [null, ...vals];
        for (let i = 1; i < this.tree.length; i++) {
            const p = i + (i & -i);
            if (p >= this.tree.length) continue;
            this.tree[p] += this.tree[i];
        }
    }
    sum(start, end) {
        let res = 0;
        for (let i = end + 1; i; i -= i & -i) {
            res += this.tree[i];
        }
        for (let i = start; i; i -= i & -i) {
            res -= this.tree[i];
        }
        return res;
    }
    set(idx, val) {
        const d = val - this.vals[idx];
        for (let i = idx + 1; i < this.tree.length; i += i & -i) {
            this.tree[i] += d;
        }
        this.vals[idx] = val;
        return true;
    }
}

module.exports = BinaryIndexedTree;
