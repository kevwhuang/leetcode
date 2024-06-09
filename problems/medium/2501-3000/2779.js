// 2779 - Maximum Beauty of an Array After Applying Operation

function maximumBeauty(nums, k) {
    k *= 2;
    const bucket = new Array(Math.max(...nums) + 1);
    if (k >= bucket.length) return nums.length;
    bucket.fill(0);
    for (let i = 0; i < nums.length; i++) {
        bucket[nums[i]]++;
    }
    let window = 0;
    for (let n = 0; n <= k; n++) {
        window += bucket[n];
    }
    let beauty = window;
    for (let n = k + 1; n < bucket.length; n++) {
        window += bucket[n] - bucket[n - k - 1];
        if (window > beauty) beauty = window;
    }
    return beauty;
}
