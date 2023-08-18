// 1085 - Sum of Digits in the Minimum Number

function sumOfDigits(nums) {
    const min = Math.min.apply(null, nums).toString();
    let sum = 0;
    for (let i = 0; i < min.length; i++) {
        sum += +min[i];
    }
    return sum % 2 ? 0 : 1;
}
