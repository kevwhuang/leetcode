// 2623 - Memoize

function memoize(fn) {
    const memo = new Map();
    return function (...args) {
        const key = JSON.stringify(args);
        if (memo.has(key)) return memo.get(key);
        const res = fn(...args);
        memo.set(key, res);
        return res;
    }
}
