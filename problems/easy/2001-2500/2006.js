// 2006 - Count Number of Pairs With Absolute Difference K

function countKDifference(nums, k) {
    const freq = new Array(100).fill(0);
    let pairs = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        pairs += (freq[nums[i] + k - 1] || 0) + (freq[nums[i] - k - 1] || 0);
        freq[nums[i] - 1]++;
    }
    return pairs;
}