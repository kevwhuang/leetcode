// 2592 - Maximize Greatness of an Array

function maximizeGreatness(nums) {
    nums.sort((a, b) => a - b);
    let i = 0, j = 1;
    while (j < nums.length) {
        if (nums[i] >= nums[j++]) continue;
        i++;
    }
    return i;
}
