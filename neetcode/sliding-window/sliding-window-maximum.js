// 239 - Sliding Window Maximum

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

function maxSlidingWindow(nums, k) {
    const res = new Int16Array(nums.length - k + 1);
    const stack = [];
    for (let i = 0, l = 0, r = 0; r < nums.length; r++) {
        while (l < stack.length && stack[l] < r - k + 1) l++;
        while (l < stack.length && nums[stack.at(-1)] < nums[r]) stack.pop();
        stack.push(r);
        if (r >= k - 1) res[i++] = nums[stack[l]];
    }
    return res;
}

module.exports = maxSlidingWindow;
