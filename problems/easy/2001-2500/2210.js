// 2210 - Count Hills and Valleys in an Array

function countHillValley(nums) {
    let count = 0, i = 0;
    while (i++ < nums.length - 1) {
        const start = i;
        while (nums[i] === nums[i + 1]) i++;
        if (nums[start] > nums[start - 1] && nums[i] > nums[i + 1]) count++;
        else if (nums[start] < nums[start - 1] && nums[i] < nums[i + 1]) count++;
    }
    return count;
}
