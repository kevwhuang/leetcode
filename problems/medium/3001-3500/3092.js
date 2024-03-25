// 3092 - Most Frequent IDs

function mostFrequentIDs(nums, freq) {
    const map = new Map([[nums[0], freq[0]]]);
    let maxNum = nums[0], maxFreq = nums[0] = freq[0];
    for (let i = 1; i < nums.length; i++) {
        let curFreq = (map.get(nums[i]) ?? 0) + freq[i];
        map.set(nums[i], curFreq);
        if (curFreq > maxFreq) {
            maxNum = nums[i];
            maxFreq = curFreq;
        } else if (nums[i] === maxNum && freq[i] < 0) {
            maxFreq = -Infinity;
            for (const curNum of map.keys()) {
                curFreq = map.get(curNum);
                if (curFreq <= maxFreq) continue;
                maxNum = curNum;
                maxFreq = curFreq;
            }
        }
        nums[i] = maxFreq;
    }
    return nums;
}
