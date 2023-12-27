// 1213 - Intersection of Three Sorted Arrays

function arraysIntersection(arr1, arr2, arr3) {
    function binarySearch(arr, targ) {
        let l = 0, r = arr.length - 1;
        while (l <= r) {
            const m = ~~((l + r) / 2);
            if (arr[m] < targ) l = m + 1;
            else if (arr[m] > targ) r = m - 1;
            else return m;
        }
        return -1;
    }
    return arr1
        .filter(n => binarySearch(arr2, n) !== -1)
        .filter(n => binarySearch(arr3, n) !== -1);
}
