// 1539 - Kth Missing Positive Number

function findKthPositive(arr, k) {
    const len = arr.length;
    let n = 0, i = 0;
    while (k) {
        ++n === arr[i] ? i++ : k--;
        if (i === len) return n + k;
    }
    return n;
}
