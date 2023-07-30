// 1470 - Shuffle the Array

function shuffle(nums, n) {
    const output = [];
    for (let i = 0; i < n; i++) {
        output.push(nums[i], nums[i + n]);
    }
    return output;
}
