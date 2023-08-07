// 2729 - Check if the Number is Fascinating

function isFascinating(n) {
    n += '' + 2 * n + 3 * n;
    if (n.length > 9) return false;
    const set = new Set(n);
    return !set.has('0') && set.size === 9;
}
