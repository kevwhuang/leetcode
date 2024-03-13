// 7 - Reverse Integer

function reverse(x) {
    let rvs = parseInt(x.toString().split('').reverse().join(''));
    if (x < 0) rvs *= -1;
    return rvs > 2147483647 || rvs < -2147483647 ? 0 : rvs;
}
