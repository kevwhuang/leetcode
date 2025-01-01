// 1995 - Count Special Quadruplets

function countQuadruplets(nums) {
    let quads = 0;
    const n = nums.length;
    for (let i = 0; i < n - 3; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                for (let l = k + 1; l < n; l++) {
                    if (nums[i] + nums[j] + nums[k] === nums[l]) quads++;
                }
            }
        }
    }
    return quads;
}
