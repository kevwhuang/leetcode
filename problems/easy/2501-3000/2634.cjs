// 2634 - Filter Elements From Array

function filter(arr, fn) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        fn(arr[i], i) && filteredArr.push(arr[i]);
    }
    return filteredArr;
}
