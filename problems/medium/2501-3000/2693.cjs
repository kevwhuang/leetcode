// 2693 - Call Function With Custom Context

Function.prototype.callPolyfill = function (context, ...args) {
    return this.call(context, ...args);
};
