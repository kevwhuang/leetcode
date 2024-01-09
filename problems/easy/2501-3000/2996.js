// 2996 - Smallest Missing Integer Greater Than Sequential Prefix Sum

function missingInteger(nums) {
    let sum = nums[0], index;
    for (let i = 1; i < nums.length && !index; i++) {
        if (nums[i - 1] + 1 === nums[i]) sum += nums[i];
        else index = i;
    }
    const set = new Set([nums[0]]);
    for (let i = index; i < nums.length; i++) {
        set.add(nums[i]);
    }
    while (set.has(sum)) sum++;
    return sum;
}
