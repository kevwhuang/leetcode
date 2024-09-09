// 2774 - Array Upper Bound

Array.prototype.upperBound = function (target) {
    let l = 0, r = this.length - 1;
    while (l <= r) {
        const m = l + r >> 1;
        if (this[m] <= target) l = m + 1;
        else r = m - 1;
    }
    return ~--l && this[l] === target ? l : -1;
};
