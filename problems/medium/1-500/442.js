// 442 - Find All Duplicates in an Array

function findDuplicates(nums) {
    const dupes = [];
    for (let i = 0, index; i < nums.length; i++) {
        index = Math.abs(nums[i]) - 1;
        if (nums[index] < 0) dupes.push(Math.abs(nums[i]));
        else nums[index] *= -1;
    }
    return dupes;
}
