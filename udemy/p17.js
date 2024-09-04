// 17 - someRecursive

function someRecursive(arr, cb) {
    if (arr.length === 0) return false;
    return cb(arr[0]) ? true : someRecursive(arr.slice(1), cb);
}
