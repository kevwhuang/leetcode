// 905 - Sort Array by Parity

function sortArrayByParity(nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        if (nums[left] % 2) {
            nums.push(nums[left]);
            nums.splice(left, 1);
            right--;
        } else {
            left++;
        }
    }
    return nums;
}
