// 539 - Minimum Time Difference

function findMinDifference(timePoints) {
    const difference = (t1, t2) => Math.min(t2 - t1, 1440 + t1 - t2);
    for (let i = 0; i < timePoints.length; i++) {
        timePoints[i] = 60 * timePoints[i].slice(0, 2) + Number(timePoints[i].slice(3));
    }
    timePoints.sort((a, b) => a - b);
    let min = difference(timePoints[0], timePoints.at(-1));
    for (let i = 1; i < timePoints.length; i++) {
        min = Math.min(difference(timePoints[i - 1], timePoints[i]), min);
        if (min === 0) return 0;
    }
    return min;
}
