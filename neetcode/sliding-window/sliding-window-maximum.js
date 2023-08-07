// 239 - Sliding Window Maximum

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

function maxSlidingWindow(nums, k) {
    const res = [], q = [];
    for (let l = 0, r = 0; r < nums.length; r++) {
        while (l < q.length && q[l] < r - k + 1) l++;
        while (l < q.length && nums[r] > nums[q.at(-1)]) q.pop();
        q.push(r);
        if (r >= k - 1) res.push(nums[q[l]]);
    }
    return res;
}

module.exports = maxSlidingWindow;
