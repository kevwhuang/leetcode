// 2481 - Minimum Cuts to Divide a Circle

function numberOfCuts(n) {
    if (n === 1) return 0;
    return n % 2 ? n : n / 2;
}
