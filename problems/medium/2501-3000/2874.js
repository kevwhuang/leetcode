// 2874 - Maximum Value of an Ordered Triplet II

function maximumTripletValue(nums) {
    const len = nums.length;
    const prefixMax = new Uint32Array(len);
    prefixMax[0] = nums[0];
    for (let i = 1; i < len; i++) {
        prefixMax[i] = Math.max(nums[i], prefixMax[i - 1]);
    }
    const suffixMax = new Uint32Array(len);
    suffixMax[len - 1] = nums[len - 1];
    for (let i = len - 2; i >= 0; i--) {
        suffixMax[i] = Math.max(nums[i], suffixMax[i + 1]);
    }
    let max = 0;
    const bound = len - 1;
    for (let j = 1; j < bound; j++) {
        const val = (prefixMax[j - 1] - nums[j]) * suffixMax[j + 1];
        max = Math.max(val, max);
    }
    return max;
}
