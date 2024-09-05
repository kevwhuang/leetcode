// 307 - Range Sum Query - Mutable

class NumArray {
    constructor(nums) {
        this.nums = nums;
        this.tree = [null, ...nums];
        for (let i = 1; i < this.tree.length; i++) {
            const p = i + (i & -i);
            if (p >= this.tree.length) continue;
            this.tree[p] += this.tree[i];
        }
    }
    sumRange(left, right) {
        let sum = 0;
        for (let i = right + 1; i; i -= i & -i) {
            sum += this.tree[i];
        }
        for (let i = left; i; i -= i & -i) {
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
