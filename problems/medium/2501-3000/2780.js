// 2780 - Minimum Index of a Valid Split

function minimumIndex(nums) {
    let dominant, max = 0;
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const freq = map.get(nums[i]) + 1 || 1;
        map.set(nums[i], freq);
        if (freq <= max) continue;
        dominant = nums[i];
        max = freq;
    }
    let left = 0, right = map.get(dominant);
    const bound = nums.length - 1;
    for (let i = 0; i < bound; i++) {
        if (nums[i] !== dominant) continue;
        left++, right--;
        if (left * 2 > i + 1 && right * 2 > bound - i) return i;
    }
    return -1;
}
