// 215 - Kth Largest Element in an Array

function findKthLargest(nums, k) {
    const bucket = new Uint32Array(20001);
    for (let i = 0; i < nums.length; i++) {
        bucket[nums[i] + 10000]++;
    }
    for (let i = 20000; ~i; i--) {
        k -= bucket[i];
        if (k <= 0) return i - 10000;
    }
}
