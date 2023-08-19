// 2690 - Infinite Method Object

function createInfiniteObject() {
    return new Proxy({}, { get: (_, prop) => () => prop });
}
