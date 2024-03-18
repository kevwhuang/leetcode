// 3079 - Find the Sum of Encrypted Integers

function sumOfEncryptedInt(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        let max = 0, digits = 0, num = nums[i];
        while (num) {
            max = Math.max(num % 10, max);
            digits++;
            num = num / 10 >> 0;
        }
        while (digits) {
            sum += max;
            max *= 10;
            digits--;
        }
    }
    return sum;
}
