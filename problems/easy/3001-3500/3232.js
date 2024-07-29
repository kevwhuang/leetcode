// 3232 - Find If Digit Game Can Be Won

function canAliceWin(nums) {
    let sum1 = 0, sum2 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 10) sum1 += nums[i];
        else sum2 += nums[i];
    }
    return sum1 !== sum2;
}
