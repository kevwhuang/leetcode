// 34 - Find First and Last Position of Element in Sorted Array

function searchRange(nums, target) {
    function binarySearch(right) {
        let index = -1, l = 0, r = nums.length - 1, m;
        while (l <= r) {
            m = ~~((l + r) / 2);
            if (nums[m] < target) l = m + 1;
            else if (nums[m] > target) r = m - 1;
            else {
                index = m;
                if (right) l = m + 1;
                else r = m - 1;
            }
        }
        return index;
    }
    return [binarySearch(), binarySearch(true)];
}
