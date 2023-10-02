// 2869 - Minimum Operations to Collect Elements

function minOperations(nums, k) {
    const set = new Set();
    let operations = 0, num;
    while (set.size < k) {
        num = nums.pop();
        num <= k && set.add(num);
        operations++;
    }
    return operations;
}
