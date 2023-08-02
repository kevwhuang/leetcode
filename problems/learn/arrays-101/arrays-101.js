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
