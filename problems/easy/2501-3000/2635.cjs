// 2635 - Apply Transform Over Each Element in Array

function map(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = fn(arr[i], i);
    }
    return arr;
}
