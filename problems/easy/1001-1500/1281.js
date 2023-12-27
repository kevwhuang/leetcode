// 1281 - Subtract the Product and Sum of Digits of an Integer

function subtractProductAndSum(n) {
    let product = 1, sum = 0;
    for (const digit of String(n)) {
        product *= +digit;
        sum += +digit;
    }
    return product - sum;
}
