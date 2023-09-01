// 78 - Subsets

function subsets(nums) {
    function backtrack(i) {
        res.push([...cur]);
        while (i < nums.length) {
            cur.push(nums[i]);
            backtrack(++i);
            cur.pop();
        }
    }
    const res = [], cur = [];
    backtrack(0);
    return res;
}
