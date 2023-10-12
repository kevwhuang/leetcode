// 50 - Sorting Exercise - pivot Helper

function pivot(arr, comparator = (a, b) => a < b ? -1 : 1, l = 0, r = arr.length - 1) {
    let swap = l;
    for (let i = l + 1, val = arr[l]; i <= r; i++) {
        if (comparator(val, arr[i]) <= 0) continue;
        [arr[i], arr[swap]] = [arr[++swap], arr[i]];
    }
    [arr[l], arr[swap]] = [arr[swap], arr[l]];
    return swap;
}
