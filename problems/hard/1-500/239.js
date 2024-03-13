// 239 - Sliding Window Maximum

function maxSlidingWindow(nums, k) {
    const res = [];
    for (let l = 0, r = 0, q = []; r < nums.length; r++) {
        while (l < q.length && q[l] < r - k + 1) l++;
        while (l < q.length && nums[r] > nums[q[q.length - 1]]) q.pop();
        q.push(r);
        r >= k - 1 && res.push(nums[q[l]]);
    }
    return res;
}
