// 2113 - Elements in Array After Removing and Replacing Elements

function elementInNums(nums, queries) {
    const ans = new Array(queries.length);
    const divisor = 2 * nums.length;
    for (let i = 0; i < queries.length; i++) {
        let bound = nums.length;
        let index = queries[i][0] % divisor;
        if (index > nums.length) {
            bound = index - nums.length;
            index = 0;
        }
        index += queries[i][1];
        ans[i] = index < bound ? nums[index] : -1;
    }
    return ans;
}
