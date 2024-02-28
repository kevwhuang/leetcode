// 2971 - Find Polygon With the Largest Perimeter

function largestPerimeter(nums) {
    let sum = nums.reduce((s, e) => s + e);
    while (nums.length >= 3) {
        let maxIndex = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > nums[maxIndex]) maxIndex = i;
        }
        if (sum - nums[maxIndex] > nums[maxIndex]) return sum;
        sum -= nums[maxIndex];
        nums.splice(maxIndex, 1);
    }
    return -1;
}
