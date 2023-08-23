// 1137 - Nth Tribonacci Number

function tribonacci(n) {
    const seq = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        seq[i] = seq[i - 1] + seq[i - 2] + seq[i - 3];
    }
    return seq[n];
}
