// 1063 - Number of Valid Subarrays

function validSubarrays(nums) {
    let res = 0;
    const S = [];
    for (let i = 0; i < nums.length; i++) {
        while (S.at(-1) > nums[i]) S.pop();
        S.push(nums[i]);
        res += S.length;
    }
    return res;
}
