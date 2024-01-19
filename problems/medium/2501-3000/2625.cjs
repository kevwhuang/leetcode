// 2625 - Flatten Deeply Nested Array

function flat(arr, n) {
    function flatten(arr, n) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i]) && n) flatten(arr[i], n - 1);
            else res.push(arr[i]);
        }
    }
    const res = [];
    flatten(arr, n);
    return res;
}
