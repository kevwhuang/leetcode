// 1015 - Smallest Integer Divisible by K

function smallestRepunitDivByK(k) {
    if (k % 2 === 0 || k % 5 === 0) return -1;
    let len = 0, cur = 0;
    while (true) {
        len++;
        cur = (10 * cur + 1) % k;
        if (cur === 0) return len;
    }
}
