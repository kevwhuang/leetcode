// 1608 - Special Array With X Elements Greater Than or Equal X

function specialArray(nums) {
    function binarySearch(target) {
        let l = 0, r = nums.length - 1;
        while (l <= r) {
            const m = ~~((l + r) / 2);
            if (nums[m] < target) l = m + 1;
            else if (nums[m] >= target) r = m - 1;
        }
        return l;
    }
    nums.sort((a, b) => a - b);
    for (let i = 1; i <= nums.length; i++) {
        if (i === nums.length - binarySearch(i)) return i;
    }
    return -1;
}
