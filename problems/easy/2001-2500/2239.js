// 2239 - Find Closest Number to Zero

function findClosestNumber(nums) {
    let largest = -Infinity, delta = Infinity;
    for (let i = 0; i < nums.length; i++) {
        const abs = Math.abs(nums[i]);
        if (abs < delta) {
            largest = nums[i];
            delta = abs;
        } else if (abs === delta && nums[i] > largest) {
            largest = nums[i];
        }
    }
    return largest;
}
