// 2614 - Prime in Diagonal

function diagonalPrime(nums) {
    let largest = 0;
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        for (const num of [nums[i][i], nums[i][len - i - 1]]) {
            if (num < largest || num === 1) continue;
            const sqrt = Math.sqrt(num);
            let isPrime = true;
            for (let j = 2; j <= sqrt; j++) {
                if (num % j) continue;
                isPrime = false;
                break;
            }
            if (isPrime) largest = Math.max(largest, num);
        }
    }
    return largest;
}
