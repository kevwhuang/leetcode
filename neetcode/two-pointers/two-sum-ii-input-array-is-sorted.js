// 167 - Two Sum II - Input Array Is Sorted

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

function twoSum(numbers, target) {
    let left = 0,
        right = numbers.length - 1;
    while (left < right) {
        if (numbers[left] + numbers[right] > target) right--;
        else if (numbers[left] + numbers[right] < target) left++;
        else return [left + 1, right + 1];
    }
}

module.exports = twoSum;
