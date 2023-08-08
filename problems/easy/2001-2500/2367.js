// 2367 - Number of Arithmetic Triplets

function arithmeticTriplets(nums, diff) {
    const set = new Set();
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i]);
        set.has(nums[i] - diff)
            && set.has(nums[i] - 2 * diff)
            && count++;
    }
    return count;
}
