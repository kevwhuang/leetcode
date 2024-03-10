// 3075 - Maximize Happiness of Selected Children

function maximumHappinessSum(happiness, k) {
    happiness.sort((a, b) => b - a);
    let sum = 0;
    const bound = Math.min(happiness.length, k);
    for (let i = 0; i < bound; i++) {
        const val = happiness[i] - i;
        if (val <= 0) break;
        sum += val;
    }
    return sum;
}
