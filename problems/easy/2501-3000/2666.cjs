// 2666 - Allow One Function Call

function once(fn) {
    let called;
    return function (...args) {
        if (called) return;
        called = true;
        return fn(...args);
    };
}
