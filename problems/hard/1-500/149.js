// 149 - Max Points on a Line

function maxPoints(points) {
    let max = 0;
    for (let i = 0; i < points.length; i++) {
        const map = new Map();
        for (let j = 0; j < points.length; j++) {
            if (i === j) continue;
            const dy = points[i][1] - points[j][1];
            const dx = points[i][0] - points[j][0];
            const slope = dy / dx;
            map.set(slope, map.get(slope) + 1 || 1);
        }
        for (const count of map.values()) {
            max = Math.max(count, max);
        }
    }
    return max + 1;
}
