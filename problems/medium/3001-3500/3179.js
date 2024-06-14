// 3179 - Find the Nth Value After K Seconds

function valueAfterKSeconds(n, k) {
    const arr = new Uint32Array(n).fill(1);
    const mod = 1_000_000_007;
    while (k--) {
        for (let i = 1; i < n; i++) {
            arr[i] = (arr[i - 1] + arr[i]) % mod;
        }
    }
    return arr[n - 1];
}
