// 3011 - Find If Array Can Be Sorted

function canSortArray(nums) {
    function getSetBits(num) {
        let setBits = 0;
        while (num) {
            if (num & 1) setBits++;
            num >>= 1;
        }
        return setBits;
    }
    let i = 0, prevMax;
    while (i < nums.length) {
        let min = nums[i], max = nums[i];
        const cur = getSetBits(nums[i]);
        while (getSetBits(nums[++i]) === cur) {
            min = Math.min(nums[i], min);
            max = Math.max(nums[i], max);
        }
        if (prevMax > min) return false;
        prevMax = max;
    }
    return true;
}
