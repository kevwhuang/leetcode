// 300 - Longest Increasing Subsequence

function lengthOfLIS(nums) {
    const subsequence = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num > subsequence.at(-1)) {
            subsequence.push(num);
        } else {
            let j = 0;
            while (num > subsequence[j]) j++;
            subsequence[j] = num;
        }
    }
    return subsequence.length;
}
