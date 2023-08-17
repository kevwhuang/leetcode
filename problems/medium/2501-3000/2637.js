// 2637 - Promise Time Limit

function timeLimit(fn, t) {
    return async (...args) => {
        const promise = fn(...args);
        const timeout = new Promise((_, rej) =>
            setTimeout(() => rej('Time Limit Exceeded'), t));
        return Promise.race([promise, timeout]);
    };
}
