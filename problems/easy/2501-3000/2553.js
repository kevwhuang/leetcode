// 2553 - Separate the Digits in an Array

function separateDigits(nums) {
    const output = [];
    for (let i = 0; i < nums.length; i++) {
        const str = nums[i].toString();
        for (let j = 0; j < str.length; j++) {
            output.push(+str[j]);
        }
    }
    return output;
}
