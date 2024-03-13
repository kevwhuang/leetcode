// 46 - Permutations

function permute(nums) {
    function backtrack(cur, i) {
        if (permutations.length === resLen) return;
        if (i === len) return permutations.push([...cur]);
        for (let j = i; j < len; j++) {
            [cur[i], cur[j]] = [cur[j], cur[i]];
            backtrack(cur, i + 1);
            [cur[i], cur[j]] = [cur[j], cur[i]];
        }
    }
    const len = nums.length;
    const resLen = [0, 1, 2, 6, 24, 120, 720][len];
    const permutations = [];
    backtrack(nums, 0);
    return permutations;
}
