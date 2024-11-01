// 213 - House Robber II

function rob(nums) {
    if (nums.length <= 3) return Math.max(...nums);
    let rob1 = 0, rob2 = 0, rob3 = 0, rob4 = 0;
    for (let i = 1; i < nums.length; i++) {
        let max = Math.max(rob1 + nums[i - 1], rob2);
        rob1 = rob2, rob2 = max;
        max = Math.max(rob3 + nums[i], rob4);
        rob3 = rob4, rob4 = max;
    }
    return Math.max(rob2, rob4);
}
