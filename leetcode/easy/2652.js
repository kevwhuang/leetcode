// 2652 - Sum Multiples

function sumOfMultiples(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (!(i % 3) || !(i % 5) || !(i % 7)) sum += i;
    }
    return sum;
}
