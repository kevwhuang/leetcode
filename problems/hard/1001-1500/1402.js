// 1402 - Reducing Dishes

function maxSatisfaction(satisfaction) {
    satisfaction.sort((a, b) => b - a);
    let res = 0, acc = 0;
    for (let i = 0; i < satisfaction.length; i++) {
        acc += satisfaction[i];
        if (acc <= 0) break;
        res += acc;
    }
    return res;
}
