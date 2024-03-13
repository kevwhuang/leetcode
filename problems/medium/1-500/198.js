// 198 - House Robber

function rob(nums) {
    let rob1 = 0, rob2 = 0;
    for (let i = 0; i < nums.length; i++) {
        const max = Math.max(nums[i] + rob1, rob2);
        rob1 = rob2;
        rob2 = max;
    }
    return rob2;
}
