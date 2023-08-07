// 2626 - Array Reduce Transformation

function reduce(nums, fn, init) {
    for (let i = 0; i < nums.length; i++) {
        init = fn(init, nums[i]);
    }
    return init;
}
