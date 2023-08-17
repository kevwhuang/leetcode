// 2389 - Longest Subsequence With Limited Sum

function answerQueries(nums, queries) {
    function binarySearch(target) {
        let l = 0;
        let r = nums.length - 1;
        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            if (nums[m] < target) l = m + 1;
            else if (nums[m] > target) r = m - 1;
            else return m + 1;
        }
        return l;
    }
    nums.sort((a, b) => a - b);
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1];
    }
    for (let i = 0; i < queries.length; i++) {
        queries[i] = binarySearch(queries[i]);
    }
    return queries;
}
