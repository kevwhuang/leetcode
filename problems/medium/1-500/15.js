// 15 - 3Sum

function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const triplets = [];
    for (let i = 0; i < nums.length - 2; i++) {
        const n = nums[i];
        if (n > 0) break;
        if (nums[i - 1] === nums[i]) continue;
        let l = i + 1, r = nums.length - 1;
        while (l < r) {
            const sum = n + nums[l] + nums[r];
            if (sum < 0) l++;
            else if (sum > 0) r--;
            else {
                triplets.push([n, nums[l++], nums[r--]]);
                while (nums[l - 1] === nums[l]) l++;
                while (nums[r] === nums[r + 1]) r--;
            }
        }
    }
    return triplets;
}
