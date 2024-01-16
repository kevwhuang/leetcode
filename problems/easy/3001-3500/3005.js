// 3005 - Count Elements With Maximum Frequency

function maxFrequencyElements(nums) {
    const bucket = new Array(101).fill(0);
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(++bucket[nums[i]], max);
    }
    let res = 0;
    for (let n = 1; n <= 100; n++) {
        if (bucket[n] === max) res += max;
    }
    return res;
}
