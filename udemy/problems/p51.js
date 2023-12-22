// 51 - Quick Sort

function quickSort(arr, comparator = (a, b) => a < b ? -1 : 1, l = 0, r = arr.length - 1) {
    if (l >= r) return arr;
    const pivot = partition(arr, comparator, l, r);
    quickSort(arr, comparator, l, pivot - 1);
    quickSort(arr, comparator, pivot + 1, r);
    return arr;
}

function partition(arr, comparator, l, r) {
    let swap = l;
    for (let i = l + 1, val = arr[l]; i <= r; i++) {
        if (comparator(val, arr[i]) < 0) continue;
        [arr[i], arr[swap]] = [arr[++swap], arr[i]];
    }
    [arr[l], arr[swap]] = [arr[swap], arr[l]];
    return swap;
}
