// 495 - Teemo Attacking

function findPoisonedDuration(timeSeries, duration) {
    let time = duration;
    for (let i = 0, cur, next; i < timeSeries.length - 1; i++) {
        cur = timeSeries[i];
        next = timeSeries[i + 1];
        if (cur + duration <= next) time += duration;
        else time += next - cur;
    }
    return time;
}
