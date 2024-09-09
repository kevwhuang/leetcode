// 2624 - Snail Traversal

Array.prototype.snail = function (rowsCount, colsCount) {
    if (this.length !== rowsCount * colsCount) return [];
    const res = Array.from({ length: rowsCount }, () => []);
    for (let i = 0, c = 0; i < this.length; c = i += rowsCount) {
        let r = res[0].length % 2 ? rowsCount - 1 : 0;
        const dr = r ? -1 : 1;
        while (r >= 0 && r < rowsCount) {
            res[r].push(this[c++]);
            r += dr;
        }
    }
    return res;
};
