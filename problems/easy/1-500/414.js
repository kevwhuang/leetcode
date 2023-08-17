// 414 - Third Maximum Number

function thirdMax(nums) {
    const first = Math.max.apply(null, nums);
    nums = nums.filter(num => num !== first);
    if (!nums.length) return first;
    const current = Math.max.apply(null, nums);
    nums = nums.filter(num => num !== current);
    if (!nums.length) return first;
    return Math.max.apply(null, nums);
}
