// 2774 - Array Upper Bound

Array.prototype.upperBound = function (target) {
    let l = 0;
    let r = this.length - 1;
    let index;
    while (l <= r) {
        const m = ~~((l + r) / 2);
        if (this[m] < target) l = m + 1;
        else if (this[m] > target) r = m - 1;
        else {
            index = m;
            break;
        }
    }
    if (index === undefined) return -1;
    if (index === this.length - 1) return index;
    while (index < this.length - 1) {
        if (this[index + 1] !== target) return index;
        index++;
    }
    return index;
};
