// 2805 - Custom Interval

function customInterval(fn, delay, period) {
    function lazyFn(calls) {
        customInterval[id] = setTimeout(() => {
            fn();
            lazyFn(calls + 1);
        }, delay + period * calls);
    }
    const id = Math.random();
    lazyFn(0);
    return id;
}

function customClearInterval(id) {
    clearTimeout(customInterval[id]);
}
