// 287 - Find the Duplicate Number

function findDuplicate(nums) {
    for (let i = 0, n; i < nums.length; i++) {
        n = Math.abs(nums[i]);
        if (nums[n] > 0) nums[n] *= -1;
        else return n;
    }
}
