// 1064 - Fixed Point

function fixedPoint(arr) {
    let l = 0;
    let r = arr.length - 1;
    let index = -1;
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
