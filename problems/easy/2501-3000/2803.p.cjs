// 2803 - Factorial Generator

function* factorial(n) {
    let cur = n ? 1 : 0, prod = 1;
    while (cur <= n) {
        yield prod;
        prod *= ++cur;
    }
}
