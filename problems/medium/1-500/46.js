// 46 - Permutations

function permute(nums) {
    function backtrack(i) {
        if (i === nums.length) return permutations.push([...nums]);
        for (let j = i; j < nums.length; j++) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            backtrack(i + 1);
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }
    const permutations = [];
    backtrack(0);
    return permutations;
}
