// 2239 - Find Closest Number to Zero

function findClosestNumber(nums) {
    let delta = Infinity;
    let largest = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        const abs = Math.abs(nums[i]);
        if (abs < delta) {
            delta = abs;
            largest = nums[i];
        } else if (abs === delta && nums[i] > largest) {
            largest = nums[i];
        }
    }
    return largest;
}
