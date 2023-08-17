// 189 - Rotate Array

function rotate(nums, k) {
    function reverse(left, right) {
        while (left < right) {
            [nums[left++], nums[right--]] = [nums[right], nums[left]];
        }
    }
    k %= nums.length;
    reverse(0, nums.length - 1);
    reverse(0, k - 1);
    reverse(k, nums.length - 1);
}
