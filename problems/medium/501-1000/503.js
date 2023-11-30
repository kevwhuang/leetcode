// 503 - Next Greater Element II

function nextGreaterElements(nums) {
    const len = nums.length;
    const res = new Array(len).fill(-1);
    const stack = [];
    for (let i = 0; i < 2 * len; i++) {
        const n = nums[i % len];
        while (stack.length && n > nums[stack[stack.length - 1]]) {
            res[stack.pop()] = n;
        }
        if (i < len) stack.push(i);
    }
    return res;
}
