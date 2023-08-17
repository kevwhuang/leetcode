// 485 - Max Consecutive Ones

function findMaxConsecutiveOnes(nums) {
    let max = 0,
        window = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) window++;
        else {
            max = Math.max(window, max);
            window = 0;
        }
    }
    return Math.max(window, max);
}
