// 2676 - Throttle

function throttle(fn, t) {
    let prevArgs, timeout;
    return function run(...args) {
        if (timeout) {
            prevArgs = args;
        } else {
            fn(...args);
            timeout = setTimeout(() => {
                timeout = null;
                if (!prevArgs) return;
                run(...prevArgs);
                prevArgs = null;
            }, t);
        }
    };
}
