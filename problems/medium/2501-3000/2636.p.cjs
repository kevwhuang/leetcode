// 2636 - Promise Pool

function promisePool(functions, n) {
    const cb = fn => fn().then(next);
    const next = () => functions[n++]?.().then(next);
    return Promise.all(functions.slice(0, n).map(cb));
}
