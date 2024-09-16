// 2679 - Sum in a Matrix

function matrixSum(nums) {
    const m = nums.length;
    for (let r = 0; r < m; r++) {
        nums[r] = new Uint16Array(nums[r]).sort();
    }
    let score = 0;
    const n = nums[0].length;
    for (let c = 0; c < n; c++) {
        let max = 0;
        for (let r = 0; r < m; r++) {
            max = Math.max(nums[r][c], max);
        }
        score += max;
    }
    return score;
}
