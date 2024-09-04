// 79 - Frequency Counter - findAllDuplicates

function findAllDuplicates(nums) {
    const res = [], set = new Set();
    for (let i = 0; i < nums.length; i++) {
        set.has(nums[i]) ? res.push(nums[i]) : set.add(nums[i]);
    }
    return res;
}
