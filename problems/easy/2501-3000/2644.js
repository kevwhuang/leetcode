// 2644 - Find the Maximum Divisibility Score

function maxDivScore(nums, divisors) {
    let min = Infinity;
    let maxScore = -Infinity;
    for (let i = 0, div, score; i < divisors.length; i++) {
        div = divisors[i];
        score = 0;
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
