// 2148 - Count Elements With Strictly Smaller and Greater Elements

function countElements(nums) {
    if (nums.length < 2) return 0;
    const min = [Infinity, null];
    const max = [-Infinity, null];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num < min[0]) {
            min[0] = num;
            min[1] = 1;
        } else if (num === min[0]) {
            min[1]++;
        }
        if (num > max[0]) {
            max[0] = num;
            max[1] = 1;
        } else if (num === max[0]) {
            max[1]++;
        }
    }
    return min[0] === max[0] ? 0 : nums.length - min[1] - max[1];
}
