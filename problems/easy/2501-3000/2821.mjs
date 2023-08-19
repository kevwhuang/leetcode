// 2821 - Delay the Resolution of Each Promise

function delayAll(functions, ms) {
    const fns = [];
    for (let i = 0; i < functions.length; i++) {
        const cb = res => setTimeout(() => res(functions[i]()), ms);
        fns.push(() => new Promise(cb));
    }
    return fns;
}
