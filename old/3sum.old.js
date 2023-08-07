/**
 * @param {number[]} nums
 * @return {number[][]}
 */

module.exports = function threeSum(nums) {
    const L = nums.length;
    const output = [];
    const set = new Set();
    nums.sort((a, b) => a - b);
    for (let i = 0; i < L; i++) {
        if (nums[i] > 0) break;
        for (let j = i + 1; j < L; j++) {
            for (let k = j + 1; k < L; k++) {
                if (!(nums[i] + nums[j] + nums[k])) {
                    set.add(`${nums[i]},${nums[j]},${nums[k]}`);
                    break;
                }
            }
        }
    }
    for (const e of set) {
        const arr = e.split(',');
        for (let i = 0; i < 3; i++) arr[i] = Number(arr[i]);
        output.push(arr);
    }
    return output;
};
