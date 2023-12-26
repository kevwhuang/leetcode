// 2644 - Find the Maximum Divisibility Score

function maxDivScore(nums, divisors) {
    let min = Infinity, maxScore = -Infinity;
    for (let i = 0; i < divisors.length; i++) {
        const div = divisors[i];
        let score = 0;
        for (let j = 0; j < nums.length; j++) {
            nums[j] % div === 0 && score++;
        }
        if (score === maxScore && div < min) min = div;
        else if (score > maxScore) {
            min = div;
            maxScore = score;
        }
    }
    return min;
}
