// 2016 - Maximum Difference Between Increasing Elements

function maximumDifference(nums) {
    let difference = -1, min = Infinity;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        min = Math.min(num, min);
        if (num > min) difference = Math.max(num - min, difference);
    }
    return difference;
}
