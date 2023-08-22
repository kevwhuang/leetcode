// 2164 - Sort Even and Odd Indices Independently

function sortEvenOdd(nums) {
    const evens = nums.filter((_, i) => i % 2 === 0).sort((a, b) => a - b);
    let i = 0, length = evens.length;
    while (i < length) nums[i * 2] = evens[i++];
    const odds = nums.filter((_, i) => i % 2).sort((a, b) => b - a);
    i = 0, length = odds.length;
    while (i < length) nums[i * 2 + 1] = odds[i++];
    return nums;
}
