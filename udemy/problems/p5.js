// 5 - Multiple Pointers - averagePair

function averagePair(nums, target) {
    let start = 0, end = nums.length - 1;
    while (start < end) {
        const avg = (nums[start] + nums[end]) / 2;
        if (target > avg) start++;
        else if (target < avg) end--;
        else return true;
    }
    return false;
}
