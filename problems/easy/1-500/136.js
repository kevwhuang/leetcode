// 136 - Single Number

function singleNumber(nums) {
    let unique = 0;
    for (let i = 0; i < nums.length; i++) {
        unique ^= nums[i];
    }
    return unique;
}
