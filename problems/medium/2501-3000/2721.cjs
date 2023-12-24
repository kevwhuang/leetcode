// 2721 - Execute Asynchronous Functions in Parallel

function promiseAll(functions) {
    return Promise.all(functions.map(fn => fn()));
}
