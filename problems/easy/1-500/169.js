// 169 - Majority Element

function majorityElement(nums) {
    let majority, max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (!max) {
            majority = nums[i];
            max++;
        } else if (nums[i] === majority) {
            max++;
        } else {
            max--;
        }
    }
    return majority;
}
