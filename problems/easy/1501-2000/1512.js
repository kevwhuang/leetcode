// 1512 - Number of Good Pairs

function numIdenticalPairs(nums) {
    let pairs = 0;
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], map.get(nums[i]) + 1 || 0);
        pairs += map.get(nums[i]);
    }
    return pairs;
}
