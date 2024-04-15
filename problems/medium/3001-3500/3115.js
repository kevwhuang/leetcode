// 3115 - Maximum Prime Difference

function maximumPrimeDifference(nums) {
    const primes = new Set([
        2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
        43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
    ]);
    let index;
    for (let i = 0; i < nums.length; i++) {
        if (!primes.has(nums[i])) continue;
        index = i;
        break;
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        if (!primes.has(nums[i])) continue;
        return i - index;
    }
}
