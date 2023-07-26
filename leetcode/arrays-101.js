// 485 - Max Consecutive Ones
function findMaxConsecutiveOnes(nums) {
    let max = 0;
    let window = 0;
    for (const num of nums) {
        if (num) max = Math.max(++window, max);
        else window = 0;
    }
    return max;
}

// 1295 - Find Numbers with Even Number of Digits
function findNumbers(nums) {
    let count = 0;
    for (const num of nums) {
        if (!(String(num).length % 2)) count++;
    }
    return count;
}

// 977 - Squares of a Sorted Array
function sortedSquares(nums) {
    const squares = [];
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const leftNum = Math.abs(nums[left]);
        const rightNum = Math.abs(nums[right]);
        if (leftNum < rightNum) {
            squares.push(rightNum ** 2);
            right--;
        } else {
            squares.push(leftNum ** 2);
            left++;
        }
    }
    return squares.reverse();
}
