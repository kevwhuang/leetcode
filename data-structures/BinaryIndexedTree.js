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
    getSum(start, end) {
        let sum = 0;
        for (let i = end + 1; i; i -= i & -i) {
            sum += this.tree[i];
        }
        for (let i = start; i; i -= i & -i) {
            sum -= this.tree[i];
        }
        return sum;
    }
    update(index, val) {
        const delta = val - this.nums[index];
        for (let i = index + 1; i < this.tree.length; i += i & -i) {
            this.tree[i] += delta;
        }
        this.nums[index] = val;
    }
}

module.exports = BinaryIndexedTree;
