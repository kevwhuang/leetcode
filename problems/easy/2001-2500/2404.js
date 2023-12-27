// 2404 - Most Frequent Even Element

function mostFrequentEven(nums) {
    const map = new Map();
    let smallestFrequent = -1, max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2) continue;
        const freq = map.get(nums[i]) + 1 || 1;
        if (freq > max) {
            smallestFrequent = nums[i];
            max = freq;
        } else if (freq === max) {
            smallestFrequent = Math.min(nums[i], smallestFrequent);
        }
        map.set(nums[i], freq);
    }
    return smallestFrequent;
}
