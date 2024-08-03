// 1063 - Number of Valid Subarrays

function validSubarrays(nums) {
    let subarrays = 0;
    const stack = [];
    for (let i = 0; i < nums.length; i++) {
        while (stack.at(-1) > nums[i]) stack.pop();
        stack.push(nums[i]);
        subarrays += stack.length;
    }
    return subarrays;
}
