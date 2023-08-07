// 2725 - Interval Cancellation

function cancellable(fn, args, t) {
    fn(...args);
    const interval = setInterval(() => fn(...args), t);
    return () => clearInterval(interval);
}
