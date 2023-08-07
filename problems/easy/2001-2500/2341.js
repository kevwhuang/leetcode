// 2341 - Maximum Number of Pairs in Array

function numberOfPairs(nums) {
    const freq = new Set();
    for (let i = 0; i < nums.length; i++) {
        freq.has(nums[i]) ? freq.delete(nums[i]) : freq.add(nums[i]);
    }
    return [(nums.length - freq.size) / 2, freq.size];
}
