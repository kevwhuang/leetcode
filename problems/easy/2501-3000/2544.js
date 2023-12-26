// 2544 - Alternating Digit Sum

function alternateDigitSum(n) {
    n = n.toString();
    let sum = 0, isPositive = true;
    for (let i = 0; i < n.length; i++) {
        isPositive ? sum += +n[i] : sum -= +n[i];
        isPositive = !isPositive;
    }
    return sum;
}
