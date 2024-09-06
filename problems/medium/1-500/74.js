// 74 - Search a 2D Matrix

function searchMatrix(matrix, target) {
    function binarySearch(nums, target) {
        let l = 0, r = nums.length - 1;
        while (l <= r) {
            const m = l + r >> 1;
            if (nums[m] < target) l = m + 1;
            else if (nums[m] > target) r = m - 1;
            else return true;
        }
        return false;
    }
    let l = 0, r = matrix.length - 1;
    while (l <= r) {
        const m = l + r >> 1;
        if (matrix[m].at(-1) < target) l = m + 1;
        else if (matrix[m][0] > target) r = m - 1;
        else return binarySearch(matrix[m], target);
    }
    return false;
}
