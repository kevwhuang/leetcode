// 2666 - Allow One Function Call

function once(fn) {
    let called = false;
    return (...args) => {
        if (!called) {
            called = true;
            return fn(...args);
        }
    };
}
