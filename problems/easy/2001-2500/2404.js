// 2404 - Most Frequent Even Element

function mostFrequentEven(nums) {
    const map = new Map();
    let max = 0,
        smallestFrequent = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2) continue;
        const freq = map.get(nums[i]) + 1 || 1;
        if (freq > max) {
            max = freq;
            smallestFrequent = nums[i];
        } else if (freq === max) {
            smallestFrequent = Math.min(nums[i], smallestFrequent);
        }
        map.set(nums[i], freq);
    }
    return smallestFrequent;
}
