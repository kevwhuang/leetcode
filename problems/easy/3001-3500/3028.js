// 3028 - Ant on the Boundary

function returnToBoundaryCount(nums) {
    let count = 0, pos = 0;
    for (let i = 0; i < nums.length; i++) {
        pos += nums[i];
        if (pos === 0) count++;
    }
    return count;
}
