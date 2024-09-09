// 2630 - Memoize II

function memoize(fn) {
    const memo = new Map();
    return function (...args) {
        const len = args.length;
        if (!memo.has(len)) memo.set(len, new Map());
        let cache = memo.get(len);
        for (let i = 0; i < args.length - 1; i++) {
            if (!cache.has(args[i])) cache.set(args[i], new Map());
            cache = cache.get(args[i]);
        }
        const tail = args[len - 1];
        if (!cache.has(tail)) cache.set(tail, fn(...args));
        return cache.get(tail);
    };
}
