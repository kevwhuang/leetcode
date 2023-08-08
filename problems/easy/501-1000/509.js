// 509 - Fibonacci Number

function fib(n) {
    const sqrt = Math.sqrt(5);
    return ((1 + sqrt) / 2) ** n / sqrt - ((1 - sqrt) / 2) ** n / sqrt;
}
