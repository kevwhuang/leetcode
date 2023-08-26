// 2099 - Find Subsequence of Length K With the Largest Sum

function maxSubsequence(nums, k) {
    const arr = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        arr[i] = [i, nums[i]];
    }
    return arr.sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .sort((a, b) => a[0] - b[0])
        .map(e => e[1]);
}
