// 1064 - Fixed Point

function fixedPoint(arr) {
    let index = -1, l = 0, r = arr.length - 1;
    while (l <= r) {
        const m = ~~((l + r) / 2);
        if (arr[m] < m) l = m + 1;
        else if (arr[m] > m) r = m - 1;
        else {
            r = m - 1;
            index = m;
        }
    }
    return index;
}
