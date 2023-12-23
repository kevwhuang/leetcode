// 2758 - Next Day

Date.prototype.nextDay = function () {
    const ms = this.valueOf() + 8.64e7;
    return new Date(ms).toISOString().substring(0, 10);
};
