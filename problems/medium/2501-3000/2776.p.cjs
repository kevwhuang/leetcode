// 2776 - Convert Callback Based Function to Promise Based Function

function promisify(fn) {
    return async function (...args) {
        return new Promise((res, rej) => {
            const cb = (data, err) => err ? rej(err) : res(data);
            fn(cb, ...args);
        });
    }
}
