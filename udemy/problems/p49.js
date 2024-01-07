// 49 - Merge Sort

function mergeSort(arr, comparator = (a, b) => a < b ? -1 : 1) {
    if (arr.length <= 1) return arr;
    const m = ~~(arr.length >> 1);
    const left = mergeSort(arr.slice(0, m), comparator);
    const right = mergeSort(arr.slice(m), comparator);
    return merge(left, right, comparator);
}

function merge(arr1, arr2, comparator = (a, b) => a < b ? -1 : 1) {
    const res = new Array(arr1.length + arr2.length);
    let p1 = 0, p2 = 0;
    while (p1 < arr1.length && p2 < arr2.length) {
        res[p1 + p2] = comparator(arr1[p1], arr2[p2]) < 0 ? arr1[p1++] : arr2[p2++];
    }
    while (p1 < arr1.length) res[p1 + p2] = arr1[p1++];
    while (p2 < arr2.length) res[p1 + p2] = arr2[p2++];
    return res;
}
