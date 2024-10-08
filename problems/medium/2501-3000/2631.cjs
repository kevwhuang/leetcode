// 2631 - Group By

Array.prototype.groupBy = function (fn) {
    const groups = {};
    for (let i = 0; i < this.length; i++) {
        const key = fn(this[i]);
        if (key in groups) groups[key].push(this[i]);
        else groups[key] = [this[i]];
    }
    return groups;
};
