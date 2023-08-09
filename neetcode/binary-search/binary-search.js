// 704 - Binary Search

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function search(nums, target) {
    let left = 0,
        right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] < target) left = mid + 1;
        else if (nums[mid] > target) right = mid - 1;
        else return mid;
    }
    return -1;
}

module.exports = search;
