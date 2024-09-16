// 313 - Super Ugly Number

function nthSuperUglyNumber(n, primes) {
    const nums = [1];
    const indices = new Uint16Array(primes.length);
    while (nums.length < n) {
        let next = Infinity;
        for (let i = 0; i < primes.length; i++) {
            next = Math.min(primes[i] * nums[indices[i]], next);
        }
        nums.push(next);
        for (let i = 0; i < primes.length; i++) {
            if (next === primes[i] * nums[indices[i]]) indices[i]++;
        }
    }
    return nums[n - 1];
}
