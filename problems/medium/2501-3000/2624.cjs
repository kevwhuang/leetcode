// 2624 - Snail Traversal

Array.prototype.snail = function (rowsCount, colsCount) {
    if (this.length !== rowsCount * colsCount) return [];
    const res = Array.from({ length: rowsCount }, () => []);
    for (let i = 0; i < this.length; i += rowsCount) {
        let c = i;
        if (res[0].length % 2) {
            for (let r = rowsCount - 1; r >= 0; r--) {
                res[r].push(this[c++]);
            }
        } else {
            for (let r = 0; r < rowsCount; r++) {
                res[r].push(this[c++]);
            }
        }
    }
    return res;
};
