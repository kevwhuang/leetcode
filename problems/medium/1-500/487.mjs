// 487 - Max Consecutive Ones II

function findMaxConsecutiveOnes(nums) {
    let max = 0;
    let curWindow = 0;
    let prevWindow = 0;
    let hasZero = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            curWindow++;
        } else {
            prevWindow = curWindow;
            curWindow = 0;
            hasZero = 1;
        }
        max = Math.max(curWindow + prevWindow + hasZero, max);
    }
    return max;
}
