// 2679 - Sum in a Matrix

function matrixSum(nums) {
    const m = nums.length, n = nums[0].length;
    for (let r = 0; r < m; r++) {
        nums[r].sort((a, b) => b - a);
    }
    let score = 0;
    for (let c = 0; c < n; c++) {
        let max = -Infinity;
        for (let r = 0; r < m; r++) {
            max = Math.max(nums[r][c], max);
        }
        score += max;
    }
    return score;
}
