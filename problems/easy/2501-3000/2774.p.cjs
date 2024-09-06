// 2774 - Array Upper Bound

Array.prototype.upperBound = function (target) {
    let idx, l = 0, r = this.length - 1;
    while (l <= r) {
        const m = l + r >> 1;
        if (this[m] < target) l = m + 1;
        else if (this[m] > target) r = m - 1;
        else idx = m, r = -1;
    }
    if (idx === undefined) return -1;
    if (idx === this.length - 1) return idx;
    while (idx < this.length - 1) {
        if (this[++idx] !== target) return idx - 1;
    }
    return idx;
};
