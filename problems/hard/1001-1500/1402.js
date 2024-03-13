// 1402 - Reducing Dishes

function maxSatisfaction(satisfaction) {
    satisfaction.sort((a, b) => b - a);
    let sum = 0, running = 0;
    for (let i = 0; i < satisfaction.length; i++) {
        running += satisfaction[i];
        if (running <= 0) break;
        sum += running;
    }
    return sum;
}
