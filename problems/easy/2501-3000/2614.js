// 2614 - Prime in Diagonal

function diagonalPrime(nums) {
    const L = nums.length;
    let largest = 0;
    for (let i = 0; i < L; i++) {
        for (const num of [nums[i][i], nums[i][L - i - 1]]) {
            if (num < largest || num === 1) continue;
            const sqrt = Math.sqrt(num);
            let isPrime = true;
            for (let j = 2; j <= sqrt; j++) {
                if (num % j === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) largest = Math.max(largest, num);
        }
    }
    return largest;
}
