// 1829 - Maximum XOR for Each Query

function getMaximumXor(nums, maximumBit) {
    const len = nums.length, target = 2 ** maximumBit - 1;
    for (let i = 1; i < len; i++) {
        nums[i] ^= nums[i - 1];
    }
    const ans = new Array(len);
    for (let i = 0; i < len; i++) {
        ans[i] = nums[len - i - 1] ^ target;
    }
    return ans;
}
