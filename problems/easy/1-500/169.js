// 169 - Majority Element

function majorityElement(nums) {
    let res = 0, max = 0, i = -1;
    while (++i < nums.length) {
        if (max === 0) res = nums[i], max = 1;
        else if (nums[i] === res) max++;
        else max--;
    }
    return res;
}
