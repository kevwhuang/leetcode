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

// 1089 - Duplicate Zeros
function duplicateZeros(arr) {
    let i = 0;
    while (i < arr.length) {
        if (arr[i]) i++;
        else {
            arr.splice(i, 0, 0);
            arr.pop();
            i += 2;
        }
    }
}

// 88 - Merge Sorted Array
function merge(nums1, m, nums2, n) {
    nums1.splice(m, n);
    nums2.forEach(num => nums1.push(num));
    nums1.sort((a, b) => a - b);
}

// 1346 - Check If N and Its Double Exist
function checkIfExist(arr) {
    for (let i = 0; i < arr.length; i++) {
        const index = arr.lastIndexOf(arr[i] * 2);
        if (index !== -1 && index !== i) return true;
    }
    return false;
}

// 941 - Valid Mountain Array
function validMountainArray(arr) {
    if (arr.length < 3) return false;
    if (arr[0] > arr[1]) return false;
    let isIncreasing = true;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) return false;
        if (isIncreasing) {
            if (arr[i] < arr[i - 1]) isIncreasing = false;
        } else {
            if (arr[i] >= arr[i - 1]) return false;
        }
    }
    if (isIncreasing) return false;
    return true;
}

// 1299 - Replace Elements with Greatest Element on Right Side
function replaceElements(arr) {
    let greatest = arr.at(-1);
    for (let i = arr.length - 2; i >= 0; i--) {
        const current = arr[i];
        arr[i] = greatest;
        if (current > greatest) greatest = current;
    }
    arr[arr.length - 1] = -1;
    return arr;
}

// 283 - Move Zeroes
function moveZeroes(nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        if (nums[left]) left++;
        else {
            nums.splice(left, 1);
            nums.push(0);
            right--;
        }
    }
}

// 905 - Sort Array By Parity
function sortArrayByParity(nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        if (nums[left] % 2) {
            nums.push(nums[left]);
            nums.splice(left, 1);
            right--;
        } else {
            left++;
        }
    }
    return nums;
}
