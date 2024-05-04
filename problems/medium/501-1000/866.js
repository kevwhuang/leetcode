// 866 - Prime Palindrome

function primePalindrome(n) {
    function nextPalindrome(num, isOdd) {
        if (isOdd) num = Math.trunc(num / 10);
        let exp = 0, end = 0;
        while (num) {
            exp++;
            end = 10 * end + num % 10;
            num = Math.trunc(num / 10);
        }
        return cur++ * Math.pow(10, exp) + end;
    }
    function isPrime(num) {
        const sqrt = Math.sqrt(num);
        for (let div = 2; div <= sqrt; div++) {
            if (num % div === 0) return;
        }
        return true;
    }
    if (n === 1) return 2;
    let digits = Math.ceil(Math.log10(n));
    let cur = Math.trunc(n / Math.pow(10, Math.trunc(digits / 2)));
    while (true) {
        const isOdd = Boolean(digits % 2);
        const bound = Math.pow(10, Math.ceil(digits / 2));
        while (cur < bound) {
            const next = nextPalindrome(cur, isOdd);
            if (next >= n && isPrime(next)) return next;
        }
        cur = Math.pow(10, (Math.ceil(++digits / 2) - 1));
    }
}
