// 215 - Kth Largest Element in an Array

function findKthLargest(nums, k) {
    const arr = new Array(20001).fill(0);
    for (let i = 0; i < nums.length; i++) {
        arr[nums[i] + 10000]++;
    }
    for (let i = 20000; i >= 0; i--) {
        k -= arr[i];
        if (k <= 0) return i - 10000;
    }
}
