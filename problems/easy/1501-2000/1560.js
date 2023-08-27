// 1560 - Most Visited Sector in a Circular Track

function mostVisited(n, rounds) {
    const start = rounds[0];
    const end = rounds[rounds.length - 1];
    const sectors = [];
    if (start <= end) {
        for (let i = start; i <= end; i++) {
            sectors.push(i);
        }
    } else {
        for (let i = 1; i <= end; i++) {
            sectors.push(i);
        }
        for (let i = start; i <= n; i++) {
            sectors.push(i);
        }
    }
    return sectors;
}
