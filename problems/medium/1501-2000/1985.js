// 1985 - Find the Kth Largest Integer in the Array

function kthLargestNumber(nums, k) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] = BigInt(nums[i]);
    }
    nums.sort((a, b) => a < b ? 1 : -1);
    return String(nums[k - 1]);
}
