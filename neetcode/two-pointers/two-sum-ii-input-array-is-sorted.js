// 167 - Two Sum II - Input Array Is Sorted

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

function twoSum(numbers, target) {
    let l = 0, r = numbers.length - 1;
    while (l < r) {
        if (numbers[l] + numbers[r] > target) r--;
        else if (numbers[l] + numbers[r] < target) l++;
        else return [l + 1, r + 1];
    }
}

module.exports = twoSum;
