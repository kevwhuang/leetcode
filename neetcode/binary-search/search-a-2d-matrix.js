// 74 - Search a 2D Matrix

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

function searchMatrix(matrix, target) {
    function binarySearch(nums, target) {
        let left = 0,
            right = nums.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] < target) left = mid + 1;
            else if (nums[mid] > target) right = mid - 1;
            else return true;
        }
        return false;
    }
    let left = 0,
        right = matrix.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (matrix[mid].at(-1) < target) left = mid + 1;
        else if (matrix[mid][0] > target) right = mid - 1;
        else return binarySearch(matrix[mid], target);
    }
    return false;
}

module.exports = searchMatrix;
