// 2248 - Intersection of Multiple Arrays

function intersection(nums) {
    const freq = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            freq[nums[i][j]] = (freq[nums[i][j]] || 0) + 1;
        }
    }
    const res = [];
    for (let i = 1; i < freq.length; i++) {
        freq[i] === nums.length && res.push(i);
    }
    return res;
}
