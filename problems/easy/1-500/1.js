// 1 - Two Sum

function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0, diff; i < nums.length; i++) {
        diff = target - nums[i];
        if (map.has(diff)) return [map.get(diff), i];
        map.set(nums[i], i);
    }
}
