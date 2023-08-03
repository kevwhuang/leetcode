// 26 - Remove Duplicates from Sorted Array

function removeDuplicates(nums) {
    let marker,
        count = nums.length;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === marker) {
            delete nums[i];
            count--;
        } else {
            marker = nums[i];
        }
    }
    nums.sort((a, b) => a - b);
    return count;
}
