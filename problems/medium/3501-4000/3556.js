// 3556 - Sum of Largest Prime Substrings

function sumOfLargestPrimes(s) {
    const n = s.length, arr = new Uint8Array(n);
    arr.forEach((_, i) => arr[i] = Number(s[i]));
    let a = 0, b = 0, c = 0, i = -1;
    while (++i < n) {
        if (arr[i] === 0) continue;
        let cur = 0, j = i - 1;
        while (++j < n) {
            cur = 10 * cur + arr[j];
            if (cur === 1 || cur > 2 && cur % 2 === 0) continue;
            const sqrt = Math.sqrt(cur);
            let k = 1;
            while ((k += 2) <= sqrt) if (cur % k === 0 && (k = 1)) break;
            if (k === 1) continue;
            if (cur > a) c = b, b = a, a = cur;
            else if (cur !== a && cur > b) c = b, b = cur;
            else if (cur !== a && cur !== b && cur > c) c = cur;
        }
    }
    return a + b + c;
}
