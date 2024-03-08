// 738 - Monotone Increasing Digits

function monotoneIncreasingDigits(n) {
    n = n.toString().split('');
    for (let i = n.length - 2; i >= 0; i--) {
        if (n[i] <= n[i + 1]) continue;
        n[i]--;
        for (let j = i + 1; j < n.length; j++) {
            n[j] = 9;
        }
    }
    return parseInt(n.join(''));
}
