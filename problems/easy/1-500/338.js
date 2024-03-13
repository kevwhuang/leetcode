// 338 - Counting Bits

function countBits(n) {
    const res = new Array(n + 1);
    for (let i = 0; i <= n; i++) {
        let num = i, count = 0;
        while (num) {
            num & 1 && count++;
            num >>= 1;
        }
        res[i] = count;
    }
    return res;
}
