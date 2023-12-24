// 2637 - Promise Time Limit

function timeLimit(fn, t) {
    return function (...args) {
        const timeout = new Promise((_, rej) =>
            setTimeout(() => rej('Time Limit Exceeded'), t));
        return Promise.race([fn(...args), timeout]);
    }
}
