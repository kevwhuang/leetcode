// 2665 - Counter II

function createCounter(init) {
    let counter = init;
    return {
        decrement: () => --counter,
        increment: () => ++counter,
        reset: () => counter = init,
    };
}
