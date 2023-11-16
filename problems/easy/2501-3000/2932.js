// 2932 - Maximum Strong Pair XOR I

function maximumStrongPairXor(nums) {
    const len = nums.length;
    let min = 0;
    for (let i = 0; i < len; i++) {
        const num1 = nums[i];
        for (let j = i + 1; j < len; j++) {
            const num2 = nums[j];
            if (Math.abs(num1 - num2) <= Math.min(num1, num2)) {
                min = Math.max(nums[i] ^ nums[j], min);
            }
        }
    }
    return min;
}
