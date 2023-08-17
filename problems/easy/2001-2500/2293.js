// 2293 - Min Max Game

function minMaxGame(nums) {
    while (nums.length > 1) {
        const newNums = new Array(nums.length / 2);
        for (let i = 0; i < newNums.length; i++) {
            if (i % 2) newNums[i] = Math.max(nums[2 * i], nums[2 * i + 1]);
            else newNums[i] = Math.min(nums[2 * i], nums[2 * i + 1]);
        }
        nums = newNums;
    }
    return nums[0];
}
