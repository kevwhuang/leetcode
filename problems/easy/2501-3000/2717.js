// 2717 - Semi-Ordered Permutation

function semiOrderedPermutation(nums) {
    const first = nums.indexOf(1);
    const last = nums.lastIndexOf(nums.length);
    return first < last
        ? nums.length + first - last - 1
        : nums.length + first - last - 2;
}
