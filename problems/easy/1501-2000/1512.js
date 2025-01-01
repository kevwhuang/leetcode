// 1512 - Number of Good Pairs

function numIdenticalPairs(nums) {
    const map = new Map();
    let pairs = 0;
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], map.get(nums[i]) + 1 || 0);
        pairs += map.get(nums[i]);
    }
    return pairs;
}
