// 2748 - Number of Beautiful Pairs

function countBeautifulPairs(nums) {
    const gcd = (a, b) => !a ? b : gcd(b % a, a);
    const safe = new Set([1, 5, 7]);
    let pairs = 0;
    for (let i = 0, dig1; i < nums.length; i++) {
        dig1 = +nums[i].toString()[0];
        if (dig1 === 1) {
            pairs += nums.length - i - 1;
            continue;
        }
        for (let j = i + 1, dig2; j < nums.length; j++) {
            dig2 = nums[j] % 10;
            if (dig1 === dig2) continue;
            if (dig1 % 2 === 0 && dig2 % 2 === 0) continue;
            if (safe.has(dig2)) pairs++;
            else if (gcd(dig1, dig2) === 1) pairs++;
        }
    }
    return pairs;
}
