// 3025 - Find the Number of Ways to Place People I

function numberOfPairs(points) {
    points.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
    let pairs = 0;
    for (let i = 0; i < points.length; i++) {
        let height = -1;
        for (let j = i + 1; j < points.length; j++) {
            const y = points[j][1];
            if (points[i][1] < y || y <= height) continue;
            pairs++, height = y;
        }
    }
    return pairs;
}
