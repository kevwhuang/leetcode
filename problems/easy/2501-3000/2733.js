// 2733 - Neither Minimum nor Maximum

function findNonMinOrMax(nums) {
    if (nums.length <= 2) return -1;
    return nums.slice(0, 3).sort((a, b) => a - b)[1];
}
