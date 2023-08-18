// 2803 - Factorial Generator

function* factorial(n) {
    let cur = !n ? 0 : 1;
    let prod = 1;
    while (cur <= n) {
        yield prod;
        prod *= ++cur;
    }
}
