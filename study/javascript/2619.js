// 2619 - Array Prototype Last

Array.prototype.last = function () {
    return this.length ? this[this.length - 1] : -1;
};
