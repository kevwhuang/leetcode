// 2634 - Filter Elements From Array

function filter(arr, fn) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) res.push(arr[i]);
    }
    return res;
}
