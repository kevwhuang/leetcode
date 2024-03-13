// 213 - House Robber II

function rob(nums) {
    if (nums.length <= 3) return Math.max(...nums);
    let rob1 = 0, rob2 = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        const max = Math.max(nums[i] + rob1, rob2);
        rob1 = rob2;
        rob2 = max;
    }
    let rob3 = 0, rob4 = 0;
    for (let i = 1; i < nums.length; i++) {
        const max = Math.max(nums[i] + rob3, rob4);
        rob3 = rob4;
        rob4 = max;
    }
    return Math.max(rob2, rob4);
}
