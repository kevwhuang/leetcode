// 1995 - Count Special Quadruplets

function countQuadruplets(nums) {
    let quads = 0;
    for (let i = 0; i < nums.length - 3; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                for (let l = k + 1; l < nums.length; l++) {
                    nums[i] + nums[j] + nums[k] === nums[l] && quads++;
                }
            }
        }
    }
    return quads;
}
