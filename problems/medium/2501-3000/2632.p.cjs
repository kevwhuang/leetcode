// 2632 - Curry

function curry(fn) {
    const arr = [];
    return function curried(...args) {
        arr.push(...args);
        return arr.length === fn.length ? fn(...arr) : curried;
    }
}
