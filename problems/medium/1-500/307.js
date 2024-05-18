// 307 - Range Sum Query - Mutable

class NumArray {
    constructor(nums) {
        this.tree = this.#build(nums);
    }
    sumRange(left, right) {
        const tree = this.tree;
        left += tree.length / 2;
        right += tree.length / 2;
        let sum = 0;
        while (left <= right) {
            if (left % 2) sum += tree[left++];
            if (!(right % 2)) sum += tree[right--];
            left >>= 1;
            right >>= 1;
        }
        return sum;
    }
    update(index, val) {
        const tree = this.tree;
        index += tree.length / 2;
        tree[index] = val;
        while (index > 1) {
            index >>= 1;
            tree[index] = tree[2 * index] + tree[2 * index + 1];
        }
    }
    #build(nums) {
        const len = nums.length;
        const tree = new Array(2 * len).fill(0);
        for (let i = 0; i < len; i++) {
            tree[i + len] = nums[i];
        }
        for (let i = len - 1; i; i--) {
            tree[i] = tree[2 * i] + tree[2 * i + 1];
        }
        return tree;
    }
}
