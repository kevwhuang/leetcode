// 1470 - Shuffle the Array

function shuffle(nums, n) {
    const res = new Uint16Array(nums.length);
    for (let i = 0; i < nums.length; i += 2) {
        res[i] = nums[i / 2];
        res[i + 1] = nums[i / 2 + n];
    }
    return res;
}
