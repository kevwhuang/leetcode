// 2905 - Find Indices With Index and Value Difference II

function findIndices(nums, indexDifference, valueDifference) {
    let minIndex = 0, maxIndex = 0;
    for (let i = 0, j = indexDifference; i < nums.length; i++, j++) {
        if (nums[i] < nums[minIndex]) minIndex = i;
        else if (nums[i] > nums[maxIndex]) maxIndex = i;
        if (Math.abs(nums[minIndex] - nums[j]) >= valueDifference) {
            return [minIndex, j];
        }
        if (Math.abs(nums[maxIndex] - nums[j]) >= valueDifference) {
            return [maxIndex, j];
        }
    }
    return [-1, -1];
}
