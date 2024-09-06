// 2637 - Promise Time Limit

function timeLimit(fn, t) {
    return function (...args) {
        const str = 'Time Limit Exceeded';
        const timeout = new Promise((_, rej) => setTimeout(() => rej(str), t));
        return Promise.race([fn(...args), timeout]);
    }
}
